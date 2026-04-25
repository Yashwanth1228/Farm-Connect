import type { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";
import Bookingmodel from "@/models/Bookingmodel";
import Usermodel from "@/models/Usermodel";
import dbConnect from "@/lib/db";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { bookingId } = req.query;

    const booking = await Bookingmodel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const user = await Usermodel.findById(booking.userId);

    // =========================
    // CALCULATIONS
    // =========================
    const subtotal = Number(booking.subtotal || 0);
    const tax = Number(booking.tax || 0);
    const total = Number(booking.totalprice || 0);

    const invoiceNumber = `FC-${new Date().getFullYear()}-${booking._id
      .toString()
      .slice(-5)}`;

    const fileName = `Invoice_${invoiceNumber}.pdf`;

    // =========================
    // PDF SETUP
    // =========================
    const doc = new PDFDocument({ size: "A4", margin: 40 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    doc.pipe(res);

    // =========================
    // HEADER
    // =========================
    const logoPath = path.join(process.cwd(), "public", "images", "logos.png");
    try {
      doc.image(logoPath, 40, 30, { width: 120 });
    } catch (err) {
      console.log("Logo not found");
    }

    // doc
    //   .fontSize(10)
    //   .fillColor("#666")
    //   .text("Equipment Rental Platform", 40, 90);

    doc.fontSize(16).fillColor("#000").text("INVOICE", 400, 40);

    doc
      .fontSize(10)
      .text(`Invoice: ${invoiceNumber}`, 400, 65)
      .text(`Date: ${new Date().toDateString()}`, 400, 80);

    // =========================
    // USER INFO
    // =========================
    let y = 120;

    doc.fontSize(12).fillColor("#000").text("Bill To:", 40, y);

    y += 20;

    doc
      .fontSize(11)
      .text(user?.name || "N/A", 40, y)
      .text(user?.email || "N/A", 40, y + 15);

    // =========================
    // BOOKING BOX
    // =========================
    y += 50;

    doc.rect(40, y, 520, 60).stroke("#ddd");

    doc
      .fontSize(11)
      .text(`Equipment: ${booking.name}`, 50, y + 10)
      .text(
        `Duration: ${new Date(booking.start_date).toDateString()} - ${new Date(
          booking.end_date,
        ).toDateString()}`,
        50,
        y + 25,
      )
      .text(`Days: ${booking.days}`, 50, y + 40);

    // =========================
    // TABLE
    // =========================
    y += 90;

    doc.rect(40, y, 520, 25).fill("#e8f5e9");

    doc
      .fillColor("#000")
      .fontSize(11)
      .text("Description", 50, y + 7)
      .text("Rate", 300, y + 7)
      .text("Days", 370, y + 7)
      .text("Amount", 450, y + 7);

    y += 30;

    doc.rect(40, y, 520, 25).stroke("#ddd");

    doc
      .fontSize(11)
      .text(booking.name, 50, y + 7)
      .text(`₹${booking.price}`, 300, y + 7)
      .text(`${booking.days}`, 370, y + 7)
      .text(`₹${subtotal}`, 450, y + 7);

    // =========================
    // TOTAL SECTION
    // =========================
    y += 60;

    doc
      .fontSize(11)
      .fillColor("#555")
      .text("Subtotal:", 350, y)
      .text(`₹${subtotal}`, 520, y, { align: "right" });

    doc
      .text("GST (8%):", 350, y + 18)
      .text(`₹${tax.toFixed(2)}`, 520, y + 18, { align: "right" });

    // Divider line
    doc
      .moveTo(350, y + 38)
      .lineTo(560, y + 38)
      .strokeColor("#cccccc")
      .stroke();

    // TOTAL PAID (Highlight)
    doc
      .fontSize(15)
      .fillColor("#1b5e20")
      .text("Total Paid:", 350, y + 50)
      .text(`₹${total.toFixed(2)}`, 520, y + 50, { align: "right" });
    // =========================
    // FOOTER
    // =========================
    y += 90;

    const footerY = doc.page.height - 80;

    doc
      .fontSize(9)
      .fillColor("#777")
      .text(
        "This is a system generated invoice. No signature required.",
        40,
        footerY,
        { align: "center", width: 520 },
      );

    doc
      .fontSize(10)
      .fillColor("#1b5e20")
      .text("Thank you for choosing Farm Connect 🌱", 40, footerY + 15, {
        align: "center",
        width: 520,
      });

    doc.end();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

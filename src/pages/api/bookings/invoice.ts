import type { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";
import Bookingmodel from "@/models/Bookingmodel";
import Usermodel from "@/models/Usermodel";
import dbConnect from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { bookingId } = req.query;

    // =========================
    // FETCH DATA
    // =========================
    const booking = await Bookingmodel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const user = await Usermodel.findById(booking.userId);

    // =========================
    // CALCULATIONS
    // =========================
    const subtotal = booking.price * booking.days;
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const total = subtotal + tax;

    const invoiceNumber = `FC-${new Date().getFullYear()}-${booking._id
      .toString()
      .slice(-5)}`;

    const fileName = `Invoice_FarmConnect_${invoiceNumber}.pdf`;

    // =========================
    // PDF SETUP
    // =========================
    const doc = new PDFDocument({ margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    doc.pipe(res);

    // =========================
    // HEADER (LOGO + BRAND)
    // =========================
    // 👉 If you have logo, use:
    // doc.image("public/logo.png", 50, 45, { width: 120 });

    doc
      .fontSize(26)
      .fillColor("#1b5e20")
      .text("Farm Connect", 50, 50);

    doc
      .fontSize(10)
      .fillColor("#666")
      .text("Equipment Rental Platform", 50, 80);

    doc
      .fontSize(18)
      .fillColor("#000")
      .text("INVOICE", 400, 50);

    doc
      .fontSize(10)
      .text(`Invoice No: ${invoiceNumber}`, 400, 80)
      .text(`Date: ${new Date().toDateString()}`, 400, 95);

    doc.moveDown(3);

    // =========================
    // BILL TO SECTION
    // =========================
    doc
      .fontSize(12)
      .fillColor("#000")
      .text("Bill To:", 50, doc.y);

    doc.moveDown(0.5);

    doc
      .fontSize(11)
      .text(user?.name || "N/A")
      .text(user?.email || "N/A");

    doc.moveDown(2);

    // =========================
    // BOOKING INFO BOX
    // =========================
    doc
      .rect(50, doc.y, 500, 80)
      .stroke("#cccccc");

    doc
      .fontSize(11)
      .text(`Equipment: ${booking.name}`, 60, doc.y + 10)
      .text(
        `Duration: ${new Date(booking.start_date).toDateString()} - ${new Date(
          booking.end_date
        ).toDateString()}`,
        60,
        doc.y + 25
      )
      .text(`Total Days: ${booking.days}`, 60, doc.y + 40);

    doc.moveDown(6);

    // =========================
    // TABLE HEADER
    // =========================
    const tableTop = doc.y;

    doc
      .rect(50, tableTop, 500, 30)
      .fill("#e8f5e9");

    doc
      .fillColor("#000")
      .fontSize(12)
      .text("Description", 60, tableTop + 8)
      .text("Rate", 300, tableTop + 8)
      .text("Days", 380, tableTop + 8)
      .text("Amount", 450, tableTop + 8);

    // =========================
    // TABLE ROW
    // =========================
    const rowY = tableTop + 35;

    doc
      .rect(50, rowY, 500, 30)
      .stroke("#dddddd");

    doc
      .fontSize(11)
      .text(booking.name, 60, rowY + 8)
      .text(`₹${booking.price}`, 300, rowY + 8)
      .text(`${booking.days}`, 380, rowY + 8)
      .text(`₹${subtotal}`, 450, rowY + 8);

    doc.moveDown(4);

    // =========================
    // TOTAL SECTION
    // =========================
    const summaryX = 350;

    doc
      .fontSize(11)
      .text("Subtotal:", summaryX, doc.y)
      .text(`₹${subtotal}`, 450, doc.y, { align: "right" });

    doc
      .text("GST (18%):", summaryX, doc.y + 15)
      .text(`₹${tax}`, 450, doc.y + 15, { align: "right" });

    doc
      .moveTo(summaryX, doc.y + 35)
      .lineTo(550, doc.y + 35)
      .stroke();

    doc
      .fontSize(14)
      .fillColor("#1b5e20")
      .text("Total:", summaryX, doc.y + 45)
      .text(`₹${total}`, 450, doc.y + 45, { align: "right" });

    doc.moveDown(4);

    // =========================
    // FOOTER
    // =========================
    doc
      .fontSize(10)
      .fillColor("#777")
      .text(
        "This is a system generated invoice. No signature required.",
        50,
        doc.y,
        { align: "center" }
      );

    doc
      .moveDown()
      .text("Thank you for choosing Farm Connect 🌱", {
        align: "center",
      });

    doc.end();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
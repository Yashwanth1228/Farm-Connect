import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { AppContent } from "@/context/Appcontext";
import toast from "react-hot-toast";
import {
  Container,
  Hero,
  MainImage,
  Gallery,
  InfoRow,
  Highlight,
  Thumb,
  RightWrapper,
  Title,
  SubInfo,
  Card,
  PriceRow,
  Price,
  Location,
  InputGroup,
  Input,
  ButtonGroup,
  OutlineBtn,
  Section,
  SectionTitle,
  Text,
  FeatureGrid,
  FeatureCard,
  SpecWrapper,
  SpecItem,
  Details,
  PrimaryBtn,
} from "@/pages/equipments/style/details";

type Props = {
  product: {
    id: number;
    name: string;
    img: string;
    type: string;
    price: number;
    available: boolean;
    description: string;
    enginepower: string;
  };
};

/* ================= NAV ================= */

/* ================= PAGE ================= */
export default function detail() {
  const router = useRouter();
  //   const [productdetail , setProductdetail] = useState(product[]>([]));
  const { user, loading } = useContext(AppContent);

  if (loading) {
    return <p>Loading user...</p>;
  }
  const [product, setProduct] = useState<any>([]);
  const { id } = router.query;
  console.log("the product id is", id);

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    start_date: "",
    end_date: "",
    quantity: "",
  });

  const [togglecart, setTogglecart] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);

  console.log("the form data is ", form);

  useEffect(() => {
    if (!id) return;

    const fetchproductdetail = async () => {
      try {
        const res = await axios.post(`/api/equipment/${id}`);
        console.log("the product details are ", res.data.data);
        setProduct(res.data.data);

        const cartres = await axios.get("/api/cart/all");

        const isincart = cartres.data.data.filter(
          (items: any) => items.productid === String(id),
        );

        console.log("the is  in cart ", isincart);

        if (isincart.length > 0) {
          const item = isincart[0];

          setTogglecart(true);
          setCartId(item._id);
          console.log("this is the cartid  ", cartId);
          console.log(
            "cart id setting after fetching from the cart api of data ",
            cartId,
          );
          const re_start_date = new Date(item.start_date);
          const formateddate = re_start_date.toISOString().split("T")[0];

          const re_end_date = new Date(item.end_date);
          const formatedenddate = re_end_date.toISOString().split("T")[0];

          setForm({
            start_date: formateddate,
            end_date: formatedenddate,
            quantity: item.quantity,
          });
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchproductdetail();
  }, [id]);

  console.log(
    "cart id setting after useeffect from the cart api of data ",
    cartId,
  );
  console.log(" the image is ", product?.images);

  const { images } = product || {};
  console.log("the first image is ", images);

  const calculateDays = () => {
    if (!form.start_date || !form.end_date) return 0;

    const start = new Date(form.start_date);
    const end = new Date(form.end_date);

    const diff = end.getTime() - start.getTime();

    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
  };

  const days = calculateDays();

  const isInvalid = !form.start_date || !form.end_date || days <= 0;
  const today = new Date().toISOString().split("T")[0];

  const quantity = Number(form.quantity || 1);

  const subtotal = days * product.price * quantity;
  const tax = subtotal * 0.08;
  const totalPrice = subtotal + tax;
  const handlesubmit = async () => {
    const toastId = toast.loading("Processing your request...");
    if (!form.start_date || !form.end_date || days <= 0) {
      toast.error("Please select valid dates", { id: toastId });
      return;
    }

    console.log("farm data from handle submit", form);

    if (
      Number(form.quantity) <= product?.quantity &&
      form.start_date != "" &&
      form.end_date != ""
    ) {
      toast.success("we can go to next route that is cart", { id: toastId });
      const data = {
        productid: id,
        name: product?.name,
        image: product?.images[0],
        price: product?.price,
        totalprice: Number(totalPrice),
        days: Number(days),
        ...form,
      };
      console.log("the data is ", data);

      const newvalue = !togglecart;

      console.log("the new value ", newvalue);

      setTogglecart(newvalue);

      if (newvalue) {
        try {
          const res = await axios.post("/api/cart/add", { data });
          console.log("response from the api ", res);
          if (res.data.success) {
            setCartId(res.data.data.id);
            toast.success("Successfully added to cart!", { id: toastId });
          }
          console.log("cart id fro inserting of data ", cartId);
        } catch (error) {
          toast.error("Failed to add to cart.", { id: toastId });
        }
      } else {
        try {
          const res = await axios.delete(`/api/cart/${cartId}`);
          console.log("response from the delete api ", res);
          if (res.data.success) {
            toast.success("Successfully removed from cart!", { id: toastId });
          }
        } catch (error) {
          toast.error("Failed to remove from cart.", { id: toastId });
          console.log("error in the deletion api", error);
        }
      }

      // try{
      //   const res = await axios.post("/api/cart/add",{data})
      //   if(res.data.success){
      //     alert("successfully added to cart")
      //   }

      // }
      // catch(error){
      //   alert("would not add to cart ")
      // }
      // router.push("/equipments/carts")
    } else {
      setError("please select the quantity lesser than the available quantity");
    }
  };

  // payment gateway handler

  const handlePayment = async () => {
    if (loading) {
      toast.error("Please wait, user loading...");
      return;
    }

    if (!user?._id) {
      toast.error("User not logged in");
      return;
    }

    if (!totalPrice || totalPrice <= 0) {
      toast.error("Invalid amount");
      return;
    }

    const userId = user._id;

    // ✅ USE EXISTING VALUES (NO RE-CALCULATION)
    const finalAmount = Number(totalPrice.toFixed(2));
    const finalSubtotal = Number(subtotal.toFixed(2));
    const finalTax = Number(tax.toFixed(2));

    const toastId = toast.loading("Processing payment...");

    try {
      // =========================
      // CREATE ORDER
      // =========================
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: finalAmount }), // ✅ CORRECT
      });

      if (!res.ok) throw new Error("Failed to create order");

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Farm Connect",
        description: product?.name || "Equipment Rental",
        order_id: order.id,

        prefill: {
          name: user?.name || "User",
          email: user?.email || "test@farmconnect.com",
          contact: "9999999999",
        },

        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            const data = await verifyRes.json();

            if (data.success) {
              toast.success("Payment successful ✅", { id: toastId });

              // =========================
              // SAVE BOOKING (CORRECT VALUES)
              // =========================
              const bookingData = {
                name: product?.name,
                images: product?.images[0],
                start_date: form.start_date,
                end_date: form.end_date,
                price: product?.price,
                days: days,
                quantity: quantity,
                subtotal: finalSubtotal, // ✅ FIXED
                tax: finalTax, // ✅ FIXED
                totalprice: finalAmount, // ✅ FIXED
              };

              await fetch("/api/bookings/create", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-user-id": userId,
                },
                body: JSON.stringify(bookingData),
              });
            } else {
              toast.error("Payment verification failed ❌", { id: toastId });
            }
          } catch (err) {
            console.error(err);
            toast.error("Verification error ⚠️", { id: toastId });
          }
        },

        modal: {
          ondismiss: function () {
            toast.error("Payment cancelled ❌", { id: toastId });
          },
        },

        theme: {
          color: "#0d631b",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed ❌", { id: toastId });
    }
  };

  return (
    <>
      <Container>
        <Hero>
          {/* LEFT */}
          <div>
            {/* <MainImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Qh_nTp8s1ktmhft8jayHfopMKRmI0Byagywq89q-391nkoSqvNu9IZlPukRN7MHg4zVtHPozPooFURROD3ulzfKaePMkVcj2O9YW3pl7Vja-X3figZcz_a2QZfBpb_lRFrF-9uH4K3qlaHbCfE1v0MI6RvQ2kB6zw1y35tu_KNc3q2qSeJ3pDdiXEh07ScxmTKNDbwEeMXDQQqZIA7XVRM29n4xOEBRDX328NVXeuVqKVbR5GfhozGMV6aeVNQosPPnIjazDXYY" /> */}

            <div>
              {/* MAIN IMAGE */}
              {images && images.length > 0 && (
                <MainImage src={images[0]} alt={product?.name} />
              )}

              {/* THUMBNAILS */}
              <Gallery>
                {images?.slice(1).map((img: string, index: number) => (
                  <Thumb key={index} src={img} />
                ))}
              </Gallery>
            </div>

            {/* <MainImage src={product?.images[0]}  /> */}
            {/* {images?.map((img : any ,index : number) => {
                if(index === 0) {
                    return <MainImage key={index} src={img} alt={String(product.name)} />
                }
                else if(index > 0){
                    return (
                        // <Gallery>
                        <Thumb src={img} />
                        // </Gallery>
                    )
                }
            })} */}

            {/* <Gallery>
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeLq2VQVkEf0MxCQto2MGwzqSg4c_kH_ZtjIorVg_PPlGa6L1stfqoeZcTvb6posDBaosUgEkkJJYsB1FbogbzlCa0zh_pPuRQCOr6A9x-9CJ5RumPHtXAz6-OcrlW_igTASqfYuxdkekBki1geV5V7KNiDO9rgQtV7SevtrWmbaWCObXYRg7J-7ZOCiW9KHKaHEDLpyZF6WM9V-v3f6WjBRJeM7t_XV-9pXMZ_f3Bqbs5wnQV_jBeJ3OprbzhTvQT4rzl__SnO-s" />
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQJYbgNlGdTuDwLBu_lznbb3icX4Ob4GRAWcEQnkDwn1fJVak6WmuUHSY916PFO55DkFQdmxX6Od2HUSZ1WEQW4hz9qNcsYu-oNg3iXfYh_aIZUymVFGpluRd0E3c2filabwUbiGGKSE_W-zvXJlO1yQlG0vo42BoUSmwvzAPzkiGjl7QIdvy55I1y20SMoQiARpn8qaArS8m__J9KtUJcs-rgm7tRgiCmiaKCzDHhuOt7sL8pcc6Lw0TouNzidqIH6zYysb4emo8" />
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE-iQPbRAiyEnqbApr4mi1ASZJE2x6GPKy1zg-TT2--jAviHir1QjhZ1sLxqUWWllSpUeQ37fH7tEsge_JbJ_5AxJ0yy3h4kHvd3dJ1XGDcscOkucmkzvnM3dhHJg6f0mOPLTN28i7HHftTJAY-mGRPOUXdKm68JZPLGrmufG2xCM9XO-GHjcuavichKbbyLzjbWJTauvtU1bd0AqedCA08MvqsI8uywNZiLfadRvsViKN6vvq0hE7FGBTzVC5YehiltTjlKPhluc" />
              <Thumb src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwce1k6l1IQdQhFE3Ok-LtRBcMT3xpAKPy0pYhLhvlbSScKgucREeAphwQlY50-ih5Qe8j9ciz-NHzjo2p6aP_eRs6FdPp4Vlu5dogoMiIeFxIu8R95QnPYanfRUHMHOC22d4e3ZLlf0aQQlssbzIx0kEisbkrC-bcWOtkOOtqFDrThU97BZfTydlcNri_-lEXpGYx5d4UcsPau8kw0GAAfLcepTSKFKpZNGycWskufnw1yvV5om1a1wz9S9vv_Hvm8Yff_RzEjCA" />
            </Gallery> */}
          </div>

          {/* RIGHT */}

          <RightWrapper>
            <Title>{product?.name}</Title>
            <InfoRow>
              <SubInfo>
                {product?.enginepower} • {product?.wheels} •{" "}
                {product?.fuel_type}
              </SubInfo>

              <SubInfo>
                Available: <Highlight>{product?.quantity}</Highlight>
              </SubInfo>
            </InfoRow>
            {/* <SubInfo>Available : {product?.quantity}</SubInfo> */}

            <Card>
              <PriceRow>
                <Price>₹{Number(product?.price)}/day</Price>
                <Location>📍{product?.location}</Location>
              </PriceRow>

              <InputGroup>
                <label>Start Date</label>
                <Input
                  type="date"
                  value={form.start_date}
                  min={today}
                  onChange={(e) => {
                    setForm({ ...form, start_date: e.target.value as any });
                  }}
                  required
                />
              </InputGroup>

              <InputGroup>
                <label>End Date</label>
                <Input
                  type="date"
                  value={form.end_date}
                  min={today}
                  onChange={(e) => {
                    setForm({ ...form, end_date: e.target.value });
                  }}
                  required
                />
              </InputGroup>

              <InputGroup>
                <label>Quantity</label>
                <Input
                  type="number"
                  value={form.quantity}
                  defaultValue={1}
                  onChange={(e) => {
                    setForm({ ...form, quantity: e.target.value });
                  }}
                  required
                />
              </InputGroup>
              <span>{error}</span>

              <ButtonGroup>
                <PrimaryBtn onClick={handlePayment} disabled={!user}>
                  Rent Now
                </PrimaryBtn>
                {/* <OutlineBtn onClick={() => router.push("/equipments/carts")}>
                  Add to Cart
                </OutlineBtn> */}

                <OutlineBtn onClick={handlesubmit}>
                  {togglecart ? "Remove from cart" : "Add to cart"}
                </OutlineBtn>
              </ButtonGroup>
            </Card>
            <Details>
              <SectionTitle>About</SectionTitle>
              <p>{product?.description}</p>
            </Details>
          </RightWrapper>
        </Hero>

        {/* FEATURES + SPEC */}
        <Section>
          <div>
            <SectionTitle>Engineered for the Field</SectionTitle>

            <Text>
              The 7R 350 is a powerhouse built for farmers who demand efficiency
              and precision. Designed for large-scale operations.
            </Text>

            <FeatureGrid>
              <FeatureCard>Integrated GPS</FeatureCard>
              <FeatureCard>Climate Control</FeatureCard>
              <FeatureCard>Auto-Steer</FeatureCard>
              <FeatureCard>Efficiency Mode</FeatureCard>
            </FeatureGrid>
          </div>

          <SpecWrapper>
            <SectionTitle>Specifications</SectionTitle>

            <SpecItem>
              <span>Engine Power</span>
              <span>{product?.enginepower}</span>
            </SpecItem>

            <SpecItem>
              <span>Transmission</span>
              {/* <span>e23™</span> */}
              <span>{product?.Transmission}</span>
            </SpecItem>

            <SpecItem>
              <span>Hydraulic Flow</span>
              {/* <span>59 gpm</span> */}
              <span>{product?.Hydraulic_Flow}</span>
            </SpecItem>

            <SpecItem>
              <span>Weight</span>
              {/* <span>24,700 lbs</span> */}
              <span>{product?.weight}</span>
            </SpecItem>
          </SpecWrapper>
        </Section>
      </Container>
    </>
  );
}

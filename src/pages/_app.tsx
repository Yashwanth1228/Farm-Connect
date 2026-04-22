import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { AppContextProvider } from "@/context/Appcontext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noNavbarRoutes = [
    "/login",
    "/signup",
    "/admin/add_equipment",
    "/admin/adminlogin",
    "/searchs",
    "/search",
  ];
  const showNavbar = !noNavbarRoutes.includes(router.pathname);

  const noFooterRoutes = [
    "/login",
    "/signup",
    "/equipment",
    "/admin/add_equipment",
    "/admin/adminlogin",
    "/searchs",
    "/search",
  ];
  const showFooter = !noFooterRoutes.includes(router.pathname);
  return (
    <>
      <Provider store={store}>
        <AppContextProvider>
          {showNavbar && <Navbar />}

          <Component {...pageProps} />

          {showFooter && <Footer />}
        </AppContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </>
  );
}

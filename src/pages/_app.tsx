import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noNavbarRoutes = ["/login", "/signup", "/admin/adminlogin"];
  const showNavbar = !noNavbarRoutes.includes(router.pathname);

  const noFooterRoutes = ["/login", "/signup", "/admin/adminlogin"];
  const showFooter = !noFooterRoutes.includes(router.pathname);
  return (
    <>
      <CartProvider>
        <UserProvider>
          {showNavbar && <Navbar />}

          <Component {...pageProps} />
          {showFooter && <Footer />}
        </UserProvider>
      </CartProvider>
    </>
  );
}

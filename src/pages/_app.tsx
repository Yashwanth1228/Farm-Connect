import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noNavbarRoutes = ["/login", "/signup"];
  const isAdminRoute = router.pathname.startsWith("/admin");
  const showNavbar = !noNavbarRoutes.includes(router.pathname) && !isAdminRoute;

  const noFooterRoutes = ["/login", "/signup"];
  const showFooter = !noFooterRoutes.includes(router.pathname) && !isAdminRoute;
  return (
    <>
      {showNavbar && <Navbar />}

      <Component {...pageProps} />
      {showFooter && <Footer />}
    </>
  );
}

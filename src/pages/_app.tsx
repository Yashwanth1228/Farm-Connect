import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { AppContextProvider } from "@/context/Appcontext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noNavbarRoutes = ["/login", "/signup"];
  const showNavbar = !noNavbarRoutes.includes(router.pathname);

  const noFooterRoutes = ["/login", "/signup"];
  const showFooter = !noFooterRoutes.includes(router.pathname);
  return (
    <>
      {showNavbar && <Navbar />}

      <AppContextProvider>

      <Component {...pageProps} />

      </AppContextProvider>

      {showFooter && <Footer />}
    </>
  );
}

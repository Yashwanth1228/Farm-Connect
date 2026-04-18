import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { AppContextProvider } from "@/context/Appcontext";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noNavbarRoutes = ["/login", "/signup", "/admin/add_equipment" , "/admin/adminlogin"];
  const showNavbar = !noNavbarRoutes.includes(router.pathname);

  const noFooterRoutes = [
    "/login",
    "/signup",
    "/equipment",
    "/admin/add_equipment",
    "/admin/adminlogin"
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
      </Provider>
    </>
  );
}

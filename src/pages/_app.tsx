import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { AppContextProvider } from "@/context/Appcontext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Sidebar from "@/components/admin/Sidebar";
import { ToastContainer } from "react-toastify";
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
    "/admin/dashboard",
    "/admin/user",
    "/admin/equipment",
    "/admin/bookings",
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
    "/admin/dashboard",
    "/admin/user",
    "/admin/equipment",
    "/admin/bookings",
  ];
  const showFooter = !noFooterRoutes.includes(router.pathname);

  const sidebarRoutes = [
    "/admin/dashboard",
    "/admin/user",
    "/admin/add_equipment",
    "/admin/equipment",
    "/admin/bookings",
  ];

  const showSidebar = sidebarRoutes.includes(router.pathname);

  return (
    <>
      <Provider store={store}>
        <AppContextProvider>
          {/* <AdminContextProvider> */}

          {showNavbar && <Navbar />}

          {showSidebar && <Sidebar />}

          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastStyle={{
              borderRadius: "10px",
              fontSize: "14px",
              padding: "12px 14px",
              fontWeight: 500,
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          />

          {showFooter && <Footer />}

          {/* </AdminContextProvider> */}
        </AppContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </Provider>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </>
  );
}

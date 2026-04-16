import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLayout from "@/components/AdminLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isAdminRoute = router.pathname.startsWith("/admin");
  const isAuthRoute  = ["/login", "/signup"].includes(router.pathname);

  // Admin pages: sidebar layout, no Navbar/Footer
  if (isAdminRoute) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );
  }

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Component {...pageProps} />
      {!isAuthRoute && <Footer />}
    </>
  );
}

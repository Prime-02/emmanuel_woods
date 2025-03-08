"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import AnimatedText from "@/components/Loader/AnimatedText";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // Current route path
  const [loading, setLoading] = useState(false);

  // Check if the current path is one of the allowed routes
  const shouldShowNavbarAndFooter = pathname !== "/admin";

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      disablePageScroll(); // Disable scroll when loading starts
    };

    handleRouteChange();

    // Hide loading screen after navigation completes
    const timer = setTimeout(() => {
      setLoading(false);
      enablePageScroll(); // Re-enable scroll after loading ends
    }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);

    return () => {
      clearTimeout(timer);
      enablePageScroll(); // Ensure scroll is re-enabled on cleanup
    };
  }, [pathname]);

  return (
    <main className="min-h-screen bg-white z-50 w-full">
      {/* Loading screen */}
      {loading && (
        <div className="fixed min-h-screen bg-white  z-50 h-screen w-full card justify-center flex flex-col items-center top-0 bottom-0 left-0 right-0 overflow-hidden">
          <span className="">
            <AnimatedText />
          </span>
        </div>
      )}

      {/* Only render Navbar and Footer if on allowed paths */}
      {shouldShowNavbarAndFooter && <Navbar />}

      {/* Render the page content */}
      <div className="w-full min-h-screen">{children}</div>

      {shouldShowNavbarAndFooter && <Footer />}
    </main>
  );
}

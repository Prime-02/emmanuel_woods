"use client";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // Current route path
  // Check if the current path is one of the allowed routes
  const shouldShowNavbarAndFooter = pathname !== "/admin";

  return (
    <main className="min-h-screen bg-white z-50 w-full">
      {/* Only render Navbar and Footer if on allowed paths */}
      {shouldShowNavbarAndFooter && <Navbar />}

      {/* Render the page content */}
      <div className="w-full min-h-screen">{children}</div>

      {shouldShowNavbarAndFooter && <Footer />}
    </main>
  );
}

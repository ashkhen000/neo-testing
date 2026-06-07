import { useEffect } from "react"; // 1. Imported useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout, NotFoundComponent } from "@/components/RootLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ServicesLayout from "@/pages/ServicesLayout";
import ServicesIndexPage from "@/pages/ServicesIndexPage";
import WindowsPage from "@/pages/WindowsPage";
import DoorsPage from "@/pages/DoorsPage";

export default function App() {
  // 2. This hook runs immediately after the component successfully renders in the DOM
  useEffect(() => {
    console.log("🚀 NEOCRISTAL App has successfully initialized and rendered!");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Main Top-Level Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Nested Services Hierarchy with Layout Wrapper */}
          <Route path="/services" element={<ServicesLayout />}>
            <Route index element={<ServicesIndexPage />} />
            <Route path="windows" element={<WindowsPage />} />
            <Route path="doors" element={<DoorsPage />} />
          </Route>

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFoundComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { useEffect } from "react";
import ReactDOM from "react-dom/client"; // 1. Added React DOM client import
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
  // useEffect(() => {
  //   alert(0);
  //   console.log("🚀 NEOCRISTAL App has successfully initialized and rendered!");
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={}>
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

// 2. THIS IS THE MISSING LINK: Mount the application to the DOM element
const rootEl = document.getElementById("root");
if (rootEl && !rootEl.innerHTML) {
  ReactDOM.createRoot(rootEl).render(<App />);
}

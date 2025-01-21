import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider>
    <BrowserRouter> 
      <Header /> 
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/contato" element={<Contact />} /> 
      </Routes>
      <Footer /> 
    </BrowserRouter> 
  </Provider>
</StrictMode>
);

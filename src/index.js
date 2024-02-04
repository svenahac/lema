import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Si from "./pages/si";
import En from "./pages/en";
import Loading from "./pages/loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Loading />} />
        <Route path="en" element={<En />} />
        <Route path="si" element={<Si />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

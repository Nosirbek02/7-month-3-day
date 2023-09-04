import React from "react";
import { Home } from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { AddProduct } from "./dashboard/addProduct";
import { SettingsProduct } from "./dashboard/settingsProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="settings-product" element={<SettingsProduct />} />
      </Route>
    </Routes>
  );
}

export default App;

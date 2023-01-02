import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Footer from "./components/Footer/Footer";
import UserPage from "./pages/UserPage/UserPage";
import About from "./pages/About/About";
import CarsPage from "./pages/CarsPage/CarsPage";
import OneCar from "./pages/OneCar/OneCar";
import FormRegistration from "./pages/FormRegistration/FormRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/login" element={<FormRegistration />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/car/:id" element={<OneCar />} />
        <Route path="/cars/category/:id" element={<CarsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

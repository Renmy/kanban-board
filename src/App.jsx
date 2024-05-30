import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import SidebarFixed from "./components/SidebarFixed";

import { useState } from "react";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleArrowClick = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {showSideBar && <SidebarFixed handleArrowClick={handleArrowClick} />}
      <main className="flex">
        <Sidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          handleArrowClick={handleArrowClick}
        />
        <Routes>
          <Route path="/" element={<BoardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-h-[99vh]">
      <Navbar />
      <main className="flex max-h-[80vh] h-[80vh]">
        <Sidebar />
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

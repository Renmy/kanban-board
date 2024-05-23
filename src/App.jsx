import "./App.css";
import tasks from "./utils/kanban.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<BoardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
//import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import tasks from "./utils/kanban.json";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Task from "./components/Task";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <Board tasks={tasks} />
      </main>
      <Footer />
    </>
  );
}

export default App;

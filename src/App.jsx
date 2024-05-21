import "./App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import Navbar from "./components/Navbar";
//import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar>
          <Menu>My Board</Menu>
          <Menu>About</Menu>
        </Sidebar>
      </main>
    </>
  );
}

export default App;

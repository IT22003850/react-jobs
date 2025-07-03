import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mainlayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Mainlayout;

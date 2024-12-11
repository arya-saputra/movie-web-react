import { Outlet } from "react-router-dom";
import Footer from '../components/footer.js';
import Greeting from "../components/greeting";

const Layout = () => {
  return (
    <div className="App">
      <header>
        <Greeting name="usep" />
      </header>
    
      <div className="mt-[63px] min-h-[89vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};

export default Layout;
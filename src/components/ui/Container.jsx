import Navbar from "../layouts/Navbar";
import AddNewCustomer from "./AddNewCustomer";
import Calculate from "./Calculate";
import Footer from "./Footer";
import Orders from "./Orders";

const Container = () => {
  return (
    <div className="col-span-5 px-4">
      <Navbar />
      <AddNewCustomer />
      <Orders />
      <Calculate />
      <Footer />
    </div>
  );
};

export default Container;

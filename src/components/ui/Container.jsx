import Navbar from "../layouts/Navbar";
import AddNewCustomer from "./AddNewCustomer";
import Orders from "./Orders";

const Container = () => {
  return (
    <div className="col-span-5">
      <Navbar />
      <AddNewCustomer />
      <Orders />
    </div>
  );
};

export default Container;

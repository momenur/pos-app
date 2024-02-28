import { useContext, useEffect } from "react";
import MainLayouts from "./components/layouts/MainLayouts";
import { ModalContext } from "./providers/ModalProviders";
import AddCustomer from "./components/ui/modal/AddCustomer";
import AllCategories from "./components/ui/modal/AllCategories";

function App() {
  const { isAddProduct, isCategory } = useContext(ModalContext);

  // Add useEffect hook to handle scrolling
  useEffect(() => {
    if (isAddProduct || isCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAddProduct, isCategory]);
  return (
    <div className="relative mx-auto bg-white max-w-screen-2xl">
      <AddCustomer />
      <AllCategories />
      <MainLayouts />
    </div>
  );
}

export default App;

import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalProviders = ({ children }) => {
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const addProduct = () => {
    setIsAddProduct(!isAddProduct);
  };

  const showAllCategory = () => {
    setIsCategory(!isCategory);
  };

  const modalInfo = {
    addProduct,
    isAddProduct,
    setIsAddProduct,
    showAllCategory,
    isCategory,
    setIsCategory,
  };
  return (
    <ModalContext.Provider value={modalInfo}>{children}</ModalContext.Provider>
  );
};

export default ModalProviders;

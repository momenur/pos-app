import { LiaUserCircle } from "react-icons/lia";
import { IoAddCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProviders";

const AddNewCustomer = () => {
  const { addProduct } = useContext(ModalContext);

  return (
    <div
      onClick={() => {
        addProduct();
      }}
      className="flex items-center justify-between px-4 py-3 bg-[#E7E9F6] my-2 text-xl text-[#5C6AC4] rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-4 font-semibold">
        <span>
          <LiaUserCircle />
        </span>
        <span>Steve Jobs</span>
      </div>
      <div>
        <span>
          <IoAddCircleOutline />
        </span>
      </div>
    </div>
  );
};

export default AddNewCustomer;

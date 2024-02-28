import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalProviders";
import { MdArrowBackIos } from "react-icons/md";

const AddCustomer = () => {
  const { isAddProduct, addProduct } = useContext(ModalContext);
  return (
    <div
      onClick={() => addProduct()}
      className={`absolute w-full h-screen bg-gray-700 bg-opacity-50 flex justify-center items-center ${
        isAddProduct ? "block" : "hidden"
      }`}
    >
      <div className="w-[500px] p-10 text-3xl font-semibold bg-white h-[550px]">
        <div className="grid grid-cols-12">
          <h1 className="col-span-2 text-[#6e7071]">
            <MdArrowBackIos />
          </h1>
          <h1 className="col-span-10">Add New Customer</h1>
        </div>

        <form className="flex flex-col w-full gap-4 pt-10 xl:text-xl pe-8">
          <input
            className="flex-grow w-full  bg-transparent border-[#637381] border-b xl:border-b-1 outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-1 outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-1 outline-none"
            type="text"
            placeholder="Phone"
          />
          <input
            className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-1 outline-none"
            type="text"
            placeholder="Currency"
          />
          <input
            className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-1 outline-none"
            type="text"
            placeholder="TAX ID"
          />
        </form>

        <h1 className="text-[#3674D9] text-lg mt-6 font-semibold">
          + Add More Details
        </h1>
        <button className="bg-[#3674D9] py-4 w-full text-white mt-10">
          {" "}
          Update
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;

import { LiaUserCircle } from "react-icons/lia";
import { IoAddCircleOutline } from "react-icons/io5";

const AddNewCustomer = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#E7E9F6] my-2 text-xl text-[#5C6AC4] rounded-md">
      <div className="flex items-center gap-4">
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

import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const PaymentCardRight = () => {
  return (
    <div className="flex flex-col justify-between h-full pb-8">
      <form className="w-full pt-16 xl:text-2xl pe-8 ">
        <input
          className="flex-grow w-full  bg-transparent border-[#637381] border-b xl:border-b-2 outline-none"
          type="text"
          placeholder="Card Name"
        />
        <input
          className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-2 outline-none pt-10"
          type="text"
          placeholder="Card Number "
        />
        <input
          className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-2 outline-none pt-10"
          type="text"
          placeholder="Card Expire Date"
        />
        <input
          className="flex-grow w-full bg-transparent border-[#637381] border-b xl:border-b-2 outline-none pt-10"
          type="text"
          placeholder="Card Screet"
        />
      </form>

      <div className="flex justify-between gap-6 mt-16 lg:text-lg xk:text-xl 2xl:text-2xl pe-16 lg:mt-0">
        <Link to="/">
          <button className="bg-[#FADEDD] text-[#E55C57] py-4 px-2 xl:px-4 col-span-3  flex items-center gap-6 rounded-md">
            <span>
              <IoCloseCircleOutline />
            </span>
            Cancel
          </button>
        </Link>
        <button className="flex px-2 xl:px-4 rounded-md text-white items-center gap-4 bg-[#3674D9] flex-grow">
          {" "}
          <span>
            {" "}
            <LiaHandHoldingUsdSolid />
          </span>
          <Link className="text-white truncate">Complete Payment</Link>
        </button>
      </div>
    </div>
  );
};

export default PaymentCardRight;

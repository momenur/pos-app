import { IoCloseCircleOutline } from "react-icons/io5";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const PaymentCardRight = () => {
  return (
    <div className="flex flex-col justify-between col-span-8 pb-8">
      <form className="w-full pt-16 text-2xl">
        <input
          className="flex-grow w-10/12 bg-transparent border-[#637381] border-b-2 outline-none"
          type="text"
          placeholder="Card Name"
        />
        <input
          className="flex-grow w-10/12 bg-transparent border-[#637381] border-b-2 outline-none pt-10"
          type="text"
          placeholder="Card Number "
        />
        <input
          className="flex-grow w-10/12 bg-transparent border-[#637381] border-b-2 outline-none pt-10"
          type="text"
          placeholder="Card Expire Date"
        />
        <input
          className="flex-grow w-10/12 bg-transparent border-[#637381] border-b-2 outline-none pt-10"
          type="text"
          placeholder="Card Screet"
        />
      </form>
      <div className="flex justify-between text-4xl pe-16">
        <Link to="/">
          <button className="bg-[#FADEDD] text-[#E55C57] py-4 px-6 col-span-3  flex items-center gap-6 rounded-md">
            <span>
              <IoCloseCircleOutline />
            </span>
            Cancel
          </button>
        </Link>
        <button className="flex px-6 rounded-md text-white items-center gap-6 bg-[#3674D9]">
          {" "}
          <span>
            {" "}
            <LiaHandHoldingUsdSolid />
          </span>
          <Link className="text-white">Complete Payment</Link>
        </button>
      </div>
    </div>
  );
};

export default PaymentCardRight;

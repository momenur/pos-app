import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaHandBackFist } from "react-icons/fa6";
import { GiCardDiscard } from "react-icons/gi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between my-6 text-xl font-semibold">
      <button className="bg-[#FADEDD] text-[#E55C57] px-1 xl:px-3 py-1 xl:py-2 col-span-3  flex items-center xl:gap-6 rounded-md">
        <span>
          <IoCloseCircleOutline />
        </span>
        Cancel
      </button>
      <button className="bg-[#DEE1F3] text-[#5C6AC4] px-1 xl:px-3 py-1 xl:py-2 col-span-3  flex items-center xl:gap-6 rounded-md">
        <span>
          <FaHandBackFist />
        </span>
        Hold
      </button>
      <button className="bg-[#DEE1F3] text-[#5C6AC4] px-1 xl:px-3 py-1 xl:py-2 col-span-3  flex xl:gap-6 items-center rounded-md">
        <span>
          <GiCardDiscard />
        </span>{" "}
        Discount
      </button>
      <Link className="bg-[#DEE1F3] text-[#5C6AC4] px-1 xl:px-3 py-1 xl:py-2 col-span-3  rounded-md">
        <button className="flex items-center truncate xl:gap-6">
          {" "}
          <span>
            {" "}
            <LiaHandHoldingUsdSolid />
          </span>
          <Link to="/payment">Pay Now</Link>
        </button>
      </Link>
    </footer>
  );
};

export default Footer;

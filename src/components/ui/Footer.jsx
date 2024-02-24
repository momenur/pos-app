import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaHandBackFist } from "react-icons/fa6";
import { GiCardDiscard } from "react-icons/gi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between my-8 text-3xl font-semibold">
      <button className="bg-[#FADEDD] text-[#E55C57] p-4 col-span-3  flex items-center gap-6 rounded-md">
        <span>
          <IoCloseCircleOutline />
        </span>
        Cancel
      </button>
      <button className="bg-[#DEE1F3] text-[#5C6AC4] p-4 col-span-3  flex items-center gap-6 rounded-md">
        <span>
          <FaHandBackFist />
        </span>
        Hold
      </button>
      <button className="bg-[#DEE1F3] text-[#5C6AC4] p-4 col-span-3  flex gap-6 items-center rounded-md">
        <span>
          <GiCardDiscard />
        </span>{" "}
        Discount
      </button>
      <Link className="bg-[#DEE1F3] text-[#5C6AC4] px-6 py-4 col-span-3  rounded-md">
        <button className="flex items-center gap-6">
          {" "}
          <span>
            {" "}
            <LiaHandHoldingUsdSolid />
          </span>
          Pay Now
        </button>
      </Link>
    </footer>
  );
};

export default Footer;

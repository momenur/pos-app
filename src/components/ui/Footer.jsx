import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaHandBackFist } from "react-icons/fa6";
import { GiCardDiscard } from "react-icons/gi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-1 my-6 font-semibold xl:text-lg 2xl:text-xl md:gap-4">
      <button className="bg-[#FADEDD] text-[#E55C57] md:px-3 flex-grow px-1  xl:px-3 py-1 xl:py-2 flex items-center lg:gap-2 xl:gap-2 2xl:gap-6 rounded-md">
        <span>
          <IoCloseCircleOutline />
        </span>
        Cancel
      </button>
      <button className="bg-[#DEE1F3] xl:gap-2 lg:gap-2 flex-grow text-[#5C6AC4] px-1 xl:px-3 py-1 xl:py-2 flex items-center 2xl:gap-6 rounded-md">
        <span>
          <FaHandBackFist />
        </span>
        Hold
      </button>
      <button className="bg-[#DEE1F3] flex-grow text-[#5C6AC4] px-1 xl:px-3 py-1 xl:py-2 flex xl:gap-2 2xl:gap-6 items-center rounded-md">
        <span>
          <GiCardDiscard />
        </span>{" "}
        Discount
      </button>
      <Link className="bg-[#DEE1F3] flex-grow text-[#5C6AC4] px-1 xl:px-3 py-1 xl:py-2 rounded-md">
        <button className="flex items-center gap-2 truncate xl:gap-2 2xl:gap-6">
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

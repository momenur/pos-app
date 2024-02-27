import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlNote } from "react-icons/sl";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoReload, IoAddCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="mt-4 bg-white lg:ps-4 ">
      <ul className="custom-nav-class">
        <Link className="flex items-start justify-start">
          <RxHamburgerMenu className="text-xl text-black lg-text-2xl xl:text-4xl" />
        </Link>
        <Link className="custom-ul-class">
          <span>
            <SlNote />
          </span>
          Note
        </Link>
        <Link className="custom-ul-class">
          <span>
            <MdOutlineLocalShipping />
          </span>
          Shipping
        </Link>
        <Link className="custom-ul-class">
          <span>
            <IoReload />
          </span>
          Hole Orders
        </Link>
        <Link className="custom-ul-class">
          {" "}
          <span>
            <IoAddCircle />
          </span>
          New Item
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

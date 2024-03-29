import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <form className="flex md:mt-20 lg:mt-0 items-center gap-6 px-8 py-4 text-xl bg-[#F9FAFB] shadow-md">
      <span>
        <IoSearch />
      </span>
      <input
        className="flex-grow bg-transparent border-none outline-none"
        type="text"
        placeholder="Search Products..."
      />
      <img
        className="h-[30px]"
        src="https://i.ibb.co/Wn6MHTL/qr.png"
        alt="var code"
      />
    </form>
  );
};

export default Search;

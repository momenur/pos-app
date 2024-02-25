import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <form className="flex items-center gap-6 px-10 py-6 text-3xl bg-[#F9FAFB] shadow-md">
      <span>
        <IoSearch />
      </span>
      <input
        className="flex-grow bg-transparent border-none outline-none"
        type="text"
        placeholder="Search Products..."
      />
      <img src="https://i.ibb.co/Wn6MHTL/qr.png" alt="var code" />
    </form>
  );
};

export default Search;

import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalProviders";
import { categoriesData } from "../../../Data/categories";

const AllCategories = () => {
  const { isCategory, showAllCategory } = useContext(ModalContext);

  return (
    <div
      onClick={() => showAllCategory()}
      className={`absolute w-full h-screen bg-gray-700 bg-opacity-50 flex justify-end ${
        isCategory ? "block" : "hidden"
      }`}
    >
      <div className="w-1/2 h-full px-8 py-10 text-3xl font-semibold bg-white ">
        <h1 className="pb-8 text-4xl text-center">Categories</h1>
        <div className="grid w-full grid-cols-10 gap-2 text-[#6e7071]">
          {categoriesData.map((category) => (
            <button
              className={`px-2 text-sm p-2 xl:text-lg  border-[#637381] capitalize bg-white truncate border xl:border-2 rounded-md col-span-2 ${
                category.id === 1 ? "border-[#3674D9] text-[#3674D9]" : ""
              }`}
              key={category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;

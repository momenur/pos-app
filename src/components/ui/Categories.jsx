import { useContext } from "react";
import { categoriesData } from "../../Data/categories";
import { HiDotsVertical } from "react-icons/hi";
import { ModalContext } from "../../providers/ModalProviders";

const Categories = () => {
  const { showAllCategory } = useContext(ModalContext);

  return (
    <section
      onClick={() => showAllCategory()}
      className="flex gap-1 items-center justify-between text-[#637381] px-4 xl:px-8 mt-8 font-semibold"
    >
      {categoriesData.slice(0, 6).map((category) => (
        <button
          className={`px-2 py-2 text-sm xl:text-lg border-[#637381] capitalize bg-white truncate border xl:border-2 rounded-md ${
            category.id === 1 ? "border-[#3674D9] text-[#3674D9]" : ""
          }`}
          key={category.id}
        >
          {category.name}
        </button>
      ))}
      <span className="w-8 text-3xl">
        <HiDotsVertical />
      </span>
    </section>
  );
};

export default Categories;

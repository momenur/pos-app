import { categoriesData } from "../../Data/categories";
import { HiDotsVertical } from "react-icons/hi";

const Categories = () => {
  return (
    <section className="flex items-center justify-between text-[#637381] px-8 mt-8 font-semibold">
      {categoriesData.slice(0, 6).map((category) => (
        <button
          className={`px-4 py-3 text-2xl border-[#637381] capitalize bg-white border-4 rounded-md ${
            category.id === 1 ? "border-[#3674D9] text-[#3674D9]" : ""
          }`}
          key={category.id}
        >
          {category.name}
        </button>
      ))}
      <span className="w-8 text-5xl">
        <HiDotsVertical />
      </span>
    </section>
  );
};

export default Categories;
// 3674D9

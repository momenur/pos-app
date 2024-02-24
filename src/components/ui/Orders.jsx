import { FaRegEdit } from "react-icons/fa";
import { ordersData } from "../../Data/orders";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const Orders = () => {
  return (
    <div className="mx-4 text-[#637381] font-semibold">
      {ordersData.map((order) => (
        <div key={order.id} className="flex items-center text-2xl">
          <span className="w-10">
            <FaRegEdit />
          </span>
          <div
            className={`grid grid-cols-12 w-full  border border-gray-400 mb[1px] p-3 py-4  ${
              order.id != 1 ? "border-t-0" : ""
            }`}
          >
            <div className="grid grid-cols-12 col-span-8">
              <p className="col-span-9">{order.name}</p>
              <p className="col-span-3">$ {order.price.toFixed(2)}</p>
            </div>
            <div className="flex justify-between col-span-2">
              <button>
                <IoRemoveCircle />
              </button>
              <span>{order.quantity}</span>
              <button>
                <IoAddCircle />
              </button>
            </div>
            <div className="flex justify-end col-span-2">
              <p>{(order.price + order.quantity).toFixed(2)}</p>
            </div>
          </div>
          <span className="flex justify-end w-10 text-[#E55C57]">
            <RiDeleteBin6Line />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Orders;
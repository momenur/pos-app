import { ordersData } from "../../Data/orders";

const Calculate = () => {
  const totalPrice = ordersData.reduce((acc, order) => {
    const orderTotal = order.quantity * order.price;
    return acc + orderTotal;
  }, 0);

  const totalQuantity = ordersData.reduce((acc, order) => {
    return acc + order.quantity;
  }, 0);

  const tax = 25;
  const shipping = 5;
  const discount = 10;

  const total = totalPrice + tax + shipping + discount;
  return (
    <div className="mt-10 ">
      <div className="flex flex-col items-end text-2xl">
        <div className="flex justify-between py-3 w-96 border-y-[3px]">
          <p>Sub Total</p>
          <p className="font-semibold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-3 w-96 ">
          <p>TAX</p>
          <p className="font-semibold">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-3 w-96 border-y-[3px]">
          <p>Shipping</p>
          <p className="font-semibold">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-3 w-96 ">
          <p className="text-[#5C6AC4] font-semibold">Discount on Cart</p>
          <p className="font-semibold">${discount.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-between bg-[#E1EAF9]  px-4 rounded-md py-6 items-center text-[#4B83DD] text-2xl">
        <p>{`Product Count (${totalQuantity})`}</p>
        <div className="flex justify-between text-4xl font-semibold w-96 ">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculate;

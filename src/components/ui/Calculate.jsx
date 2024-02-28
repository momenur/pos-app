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
    <div className="mt-8 xl:mt-10">
      <div className="grid items-end justify-end grid-cols-1 xl:text-xl justify-items-end">
        <div className="flex justify-between py-2 xl:py-3  border-y-[2px] w-1/2">
          <p>Sub Total</p>
          <p className="font-semibold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between w-1/2 py-2 xl:py-3">
          <p>TAX</p>
          <p className="font-semibold">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-2 xl:py-3  border-y-[2px] w-1/2">
          <p>Shipping</p>
          <p className="font-semibold">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between w-1/2 py-3">
          <p className="text-[#5C6AC4] font-semibold">Discount on Cart</p>
          <p className="font-semibold">${discount.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-[#E1EAF9]  px-2 rounded-md py-2 items-center text-[#4B83DD] text-xl">
        <p>{`Product Count (${totalQuantity})`}</p>
        <div className="flex justify-between font-semibold lg:text-lg xl:text-2xl ">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculate;

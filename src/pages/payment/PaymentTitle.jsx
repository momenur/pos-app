import { ordersData } from "../../Data/orders";

const PaymentTitle = () => {
  const totalPrice = ordersData.reduce((acc, order) => {
    const orderTotal = order.quantity * order.price;
    return acc + orderTotal;
  }, 0);

  return (
    <section className="flex justify-between bg-[#F8F9FB] px-4 xl:px-6 md:py-2 xl:py-4  lg:text-xl xl:text-2xl font-semibold border-2 border-[#637381] rounded-md shadow-md my-8 lg:my-0">
      <p className="w-full text-[#637381]">Order Amount</p>
      <span>${totalPrice.toFixed(2)}</span>
    </section>
  );
};

export default PaymentTitle;

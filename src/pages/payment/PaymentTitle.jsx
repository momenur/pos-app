import { ordersData } from "../../Data/orders";

const PaymentTitle = () => {
  const totalPrice = ordersData.reduce((acc, order) => {
    const orderTotal = order.quantity * order.price;
    return acc + orderTotal;
  }, 0);

  return (
    <section className="flex justify-between bg-[#F8F9FB] px-6 py-4 text-2xl font-semibold border-2 border-[#637381] rounded-md shadow-md">
      <p className="w-full text-[#637381]">Order Amount</p>
      <span>${totalPrice.toFixed(2)}</span>
    </section>
  );
};

export default PaymentTitle;

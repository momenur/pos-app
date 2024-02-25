import { ordersData } from "../../Data/orders";

const PaymentTitle = () => {
  const totalPrice = ordersData.reduce((acc, order) => {
    const orderTotal = order.quantity * order.price;
    return acc + orderTotal;
  }, 0);

  return (
    <section className="flex justify-between bg-[#F8F9FB] px-8 py-6 text-3xl font-semibold border-2 border-[#637381] rounded-md shadow-md">
      <p className="w-full text-[#637381]">Order Amount</p>
      <span>${totalPrice.toFixed(2)}</span>
    </section>
  );
};

export default PaymentTitle;

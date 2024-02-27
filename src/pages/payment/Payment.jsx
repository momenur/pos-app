import PaymentCard from "./PaymentCard";
import PaymentTitle from "./PaymentTitle";

const Payment = () => {
  return (
    <div className="bg-[#F4F6F8] px-8 py-4 xl:py-10 col-span-7">
      <PaymentTitle />
      <PaymentCard />
    </div>
  );
};

export default Payment;

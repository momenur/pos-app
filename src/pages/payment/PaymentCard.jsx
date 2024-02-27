import { BiMoneyWithdraw } from "react-icons/bi";
import PaymentCardRight from "./PaymentCardRight";

const PaymentCard = () => {
  return (
    <section className="bg-white text-[#637381] lg:mt-6 xl:mt-10 border-2 border-[#637381] grid grid-cols-12 gap-6 xl:gap-16 rounded-md h-5/6 w-full">
      <div className="border-[#637381] col-span-4 border-e-2">
        <ul className="pt-8 text-lg font-semibold xl:pt-16 xl:text-2xl ">
          <li className="custom-li-class">
            <span>
              <BiMoneyWithdraw />
            </span>{" "}
            <span>Cash</span>
          </li>
          <li className="custom-li-class text-[#5C6AC4] bg-[#EEF0F9]">
            <span>
              <BiMoneyWithdraw />
            </span>{" "}
            <span>Card</span>
          </li>
          <li className="custom-li-class">
            <span>
              <BiMoneyWithdraw />
            </span>{" "}
            <span>On Account</span>
          </li>
          <li className="custom-li-class">
            <span>
              <BiMoneyWithdraw />
            </span>{" "}
            <span>Cheque</span>
          </li>
        </ul>
      </div>

      <div className="col-span-8">
        <PaymentCardRight />
      </div>
    </section>
  );
};

export default PaymentCard;

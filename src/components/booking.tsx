import BookingInfo from "./bookingInfo";
import WhyBook from "./WhyBook";

const booking = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center z-[50] relative gap-10 p-10 lg:gap-[264px] bg-[#F5F8FA] lg:px-[120px] lg:py-[160px] ">
      <BookingInfo />
      <WhyBook />
    </div>
  );
};

export default booking;

import BookingInfo from "./bookingInfo";
import WhyBook from "./WhyBook";

const booking = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[264px] bg-[#F5F8FA] px-[120px] py-[160px] ">
      <BookingInfo />
      <WhyBook />
    </div>
  );
};

export default booking;

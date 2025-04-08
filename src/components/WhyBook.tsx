import { MdOutlineCurrencyRupee } from "react-icons/md";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { PiFarmLight } from "react-icons/pi";
import { LuCalendarX } from "react-icons/lu";

const items = [
  {
    id: 1,
    icon: (
      <MdOutlineCurrencyRupee className="text-[64px] md:text-[93px]" />
    ),
    title: "Best rates guaranteed",
  },
  {
    id: 2,
    icon: (
      <RiCheckboxMultipleLine className="text-[64px] md:text-[93px]" />
    ),
    title: "Flexible cancellation",
  },
  {
    id: 3,
    icon: <PiFarmLight className="text-[64px] md:text-[93px]" />,
    title: "Complimentary farm tour",
  },
  {
    id: 4,
    icon: <LuCalendarX className="text-[64px] md:text-[93px]" />,
    title: "Early check-in (when available)",
  },
];

const WhyBook = () => {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Heading */}
      <h1 className="font-cormorant font-semibold text-3xl md:text-[48px] text-center capitalize mb-10 z-[50] relative">
        Why Book Direct?
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[444px] h-auto md:h-[232px] flex flex-col items-center justify-center gap-6 
                     py-10 px-6 md:px-[118px] rounded-[16px] shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {item.icon}
            <h3 className="text-lg md:text-xl font-normal font-inter text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBook;

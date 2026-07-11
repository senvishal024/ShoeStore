import {
  FaTruck,
  FaLock,
  FaUndo,
  FaAward,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaTruck className="text-xl md:text-3xl" />,
      title: "Free Shipping",
      desc: "Enjoy free delivery on all orders above ₹999 across India.",
    },
    {
      icon: <FaLock className="text-xl md:text-3xl"/>,
      title: "Secure Payment",
      desc: "Your transactions are protected with safe and encrypted payments.",
    },
    {
      icon: <FaUndo className="text-xl md:text-3xl" />,
      title: "Easy Returns",
      desc: "Not satisfied? Return your order easily within 7 days.",
    },
    {
      icon: <FaAward className="text-xl md:text-3xl" />,
      title: "Premium Quality",
      desc: "We offer only authentic, premium-quality footwear.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F6F2] to-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4E220F]">
            Why Choose Us
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#7A7A7A] max-w-2xl mx-auto">
            Experience premium quality, trusted service, and unmatched comfort
            with every pair you purchase.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 text-center lg:grid-cols-4 gap-4 md:gap-6"
>

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ">

              {/* Icon */}
              <div
                className="w-full h-14 rounded-xl text-[#9D6638] flex items-center justify-center mb-5 group-hover:bg-[#9D6638] group-hover:text-white transition-all duration-300
"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#4E220F]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-6 mt-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
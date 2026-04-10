import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import { FaStar } from "react-icons/fa";

const CustomerFeedback = () => {
  const feedback = [
    {
      id: 1,
      name: "Nusrat Jhan",
      role: "Microfinance officer",
      image: "https://i.ibb.co.com/1J79hB5X/nusrat-jhan.jpg",
      feedback:
        "Previously, we handled everythings manually. with FundStack, our entire workflow is now automated.",
      rating: 5,
    },
    {
      id: 2,
      name: "Karim Hasan",
      role: "Small business Owner",
      image: "https://i.ibb.co.com/Sw4Ybk9B/karim-hasan.jpg",
      feedback:
        "The loan application process is now simple and seamless. the EMI tracking feature is extremely helpful.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sadia Islam",
      role: "Finance officer",
      image: "https://i.ibb.co.com/Rk6Q0W9w/sadia-islam.jpg",
      feedback:
        "The Deshboard is clean and intuitive. it significantly reduces our workload and improves overall efficiency.",
      rating: 3,
    },
    {
      id: 4,
      name: "Megna Menodona",
      role: "Student Loan Owner",
      image: "https://i.ibb.co.com/5XkvCBQd/megna-mukherjee.jpg",
      feedback:
        "Bank provide student loans because they view education as an investment, expecting repayment with interest.",
      rating: 5,
    },
  ];
  return (
    <section className="bg-gray-200 dark:bg-gray-600 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          What Our Users Say
        </h2>
        <p className="mt-6 text-gray-500 dark:text-gray-100 max-w-2xl mx-auto">
          Trusted by microfinance organizations and businesses across the
          country.
        </p>
        {/* slider */}
        <Swiper
          slidesPerView={2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, EffectCoverflow]}
          className="mt-12 mySwiper"
        >
          {feedback.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-2 object-cover border-indigo-500"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    "{item.feedback}"
                  </p>
                  <div className="flex justify-center mt-4 text-yellow-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedback;

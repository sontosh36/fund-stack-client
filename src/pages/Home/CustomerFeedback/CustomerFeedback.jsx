import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

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
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-10 md:py-14 lg:py-17">
  {/* Background Blur */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-14">
      <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5">
        Testimonials
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
        Trusted By
        <span className="block text-blue-600">
          Thousands Of Customers
        </span>
      </h2>

      <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-400">
        Discover why organizations and borrowers choose LoanLink to
        streamline loan management and approvals.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
          25K+
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Customers
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
          4.9/5
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Rating
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
          98%
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Satisfaction
        </p>
      </div>
    </div>

    {/* Swiper */}
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2,
        slideShadows: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="pb-14"
    >
      {feedback.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="h-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            {/* Quote */}
            <FaQuoteLeft className="text-3xl text-blue-600 mb-5" />

            {/* Rating */}
            <div className="flex gap-1 text-yellow-400 mb-5">
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 min-h-[120px]">
              "{item.feedback}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-14 h-14
                  rounded-full
                  object-cover
                  border-2 border-blue-500
                "
              />

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.role}
                </p>
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

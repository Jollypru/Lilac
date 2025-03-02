"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Marketing Manager",
    image: "https://i.ibb.co.com/QJfFQp9/aiony-haust-3-TLl-97-HNJo-unsplash.jpg", // Replace with actual image
    quote:
      "I absolutely love the skincare products! My skin feels so much softer and hydrated. Highly recommended!",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Fitness Coach",
    image: "https://i.ibb.co.com/Hh4WZw9/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    quote:
      "I've been using these products for over a month now, and the results are fantastic! My skin looks fresher and more youthful.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Fashion Blogger",
    image: "https://i.ibb.co.com/FHHYZZf/jimmy-fermin-bqe0-J0b26-RQ-unsplash.jpg",
    quote:
      "The quality is amazing! I appreciate the natural ingredients used. It’s gentle yet effective. Will definitely buy again!",
  },
  {
    id: 4,
    name: "David Lee",
    role: "Photographer",
    image: "https://i.ibb.co.com/3TfFX3j/alex.jpg",
    quote:
      "I was skeptical at first, but after using the moisturizer and serum, I can see a real difference in my skin tone.",
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "Makeup Artist",
    image: "https://i.ibb.co.com/WGjvvgd/cute-young-caucasian-brunette-female-with-loose-hairstyle-resting-hands-table-while-enjoying-her-day.jpg",
    quote:
      "The best skincare products I have ever used! They give my skin a natural glow without any irritation.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fdfaf3] py-20 relative">
      <div className="text-center">
        <h3 className="text-gray-600 tracking-widest uppercase text-sm">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          What Our Clients Say
        </h2>
      </div>

      {/* Swiper Carousel */}
      <div className="relative max-w-4xl mx-auto mt-10 px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          // navigation={true}
          pagination={{clickable: true}}
          spaceBetween={50}
          slidesPerView={1}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="pb-10 text-center text-gray-700 text-lg leading-relaxed">
                <p className="italic">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* <button className=" absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-black text-white rounded-full">
          <FaChevronLeft />
        </button>
        <button className=" absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-black text-white rounded-full">
          <FaChevronRight />
        </button> */}
      </div>
    </section>
  );
}

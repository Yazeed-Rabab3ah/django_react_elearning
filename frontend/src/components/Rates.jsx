import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";


export default function TestimonialSlider() {

    const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/rates/")
      .then((response) => setRates(response.data))
      .catch((error) => console.error("Error fetching rates:", error));
  }, []);
  return (
    <div className="max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {rates.map((rate, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg p-6 rounded-xl border border-black">
              <div className="flex gap-1 text-black">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 my-4">{rate.body}</p>
              <div className="flex items-center gap-3">
                <img
                  src={rate.image}
                  alt={rate.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{rate.name}</p>
                  <p className="text-sm text-gray-500">{rate.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React, { useRef, useState } from "react";
import Service1 from "../images/service-1.png";
import Service2 from "../images/service-2.png";
import Service3 from "../images/service-3.png";
import Service4 from "../images/service-4.png";
import Service5 from "../images/service-5.png";
import Service6 from "../images/service-6.png";
import Service7 from "../images/service-7.png";
import Service8 from "../images/service-8.png";
import Service9 from "../images/service-9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const serviceInfo = [
  {
    id: 1,
    title: "Integrated Marketing",
    content1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium culpa animi quasi cupiditate a mollitia!",
    image: Service1,
  },
  {
    id: 2,
    title: "Branding & Design",
    content1:
      "Lorem ipsum dolor sit, Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. iure aperiam ea deleniti, voluptatem soluta quis ducimus enim mollitia!",
    image: Service2,
  },
  {
    id: 3,
    title: "eCommerce Development",
    content1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium culpa animi quasi cupiditate a mollitia!",
    image: Service3,
  },
  {
    id: 4,
    title: "Web Design",
    content1:
      "Lorem ipsum dolor sit, Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. iure aperiam ea deleniti, voluptatem soluta quis ducimus enim mollitia!",
    image: Service4,
  },
  {
    id: 5,
    title: "Video Production",
    content1:
      "Lorem ipsum dolor sit, Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. iure aperiam ea deleniti, voluptatem soluta quis ducimus enim mollitia!",
    image: Service5,
  },
  {
    id: 6,
    title: "Digital Marketing",
    content1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium culpa animi quasi cupiditate a mollitia!",
    image: Service6,
  },
  {
    id: 7,
    title: "Social Media Marketing",
    content1:
      "Lorem ipsum dolor sit, Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. iure aperiam ea deleniti, voluptatem soluta quis ducimus enim mollitia!",
    image: Service7,
  },
  {
    id: 8,
    title: "Paid Promotions",
    content1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Accusantium culpa animi quasi cupiditate a mollitia!",
    image: Service8,
  },
  {
    id: 9,
    title: "Video Marketing",
    content1:
      "Lorem ipsum dolor sit, Incidunt provident facere quidem, iure aperiam ea deleniti, voluptatem soluta quis ducimus enim itaque vero. Accusantium culpa animi quasi cupiditate a mollitia!",
    content2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. iure aperiam ea deleniti, voluptatem soluta quis ducimus enim mollitia!",
    image: Service9,
  },
];

const Services = () => {
  return (
    <div id="service" className="md:py-24 pt-12 pb-24 px-4 overflow-hidden">
      <div className="text-center w-full max-w-[600px] mx-auto md:mb-24 mb-12 wow animate__fadeInDown">
        <h1 className="md:text-4xl text-2xl py-3 ">
          We Provide Different
          <span className="text-primary-color"> Services</span> For Your Agency{" "}
        </h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nisi
          voluptates dolorem nihil quos soluta, accusamus ut delectus possimus
          odit amet fuga unde saepe mollitia qui assumenda blanditiis alias
          molestiae.
        </p>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper sm:h-[500px] h-[650px] w-full max-w-[1200px] mx-auto wow animate__fadeInUp"
      >
        {serviceInfo.map((item) => (
          <SwiperSlide className="">
            <div className="service-bg w-full mx-auto bg-cover bg-no-repeat overflow-hidden bg-secondary-blur rounded-lg">
              <div className="flex flex-col sm:flex-row">
                <div className="md:w-[50%] sm:w-[45%] w-full sm:h-[500px] h-[200px]">
                  <img
                    src={item.image}
                    className="sm:h-[500px] h-[200px] object-cover sm:w-[750px] w-full"
                    alt=""
                  />
                </div>
                <div className="sm:w-[50%] w-full md:p-12 p-6 flex items-center">
                  <div className="">
                    <h3 className="sm:text-4xl text-xl sm:mb-8 mb-4">
                      {item.title}
                    </h3>
                    <p>{item.content1}</p>
                    <p className="pt-5">{item.content2}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;

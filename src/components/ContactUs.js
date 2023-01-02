import React from "react";
import { Link } from "react-router-dom";
import contactUsImg from "../images/contact-us.svg";
import { useRef } from "react";

const ContactUs = () => {
  
  return (
    <div id="contactus">
      <div className="text-white" >
        <div className="text-center w-full max-w-[600px] mx-auto  mb-12 wow animate__fadeInDown">
          <h1 className="md:text-4xl text-2xl py-3 ">
            Contact<span className="text-primary-color"> Us</span>
          </h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            sit quam harum. Laborum minus sapiente itaque magni quia at,
            accusantium eos excepturi est dicta rem enim similique repudiandae
            blanditiis et!
          </p>
        </div>
        <div className="container mt-24 grid gap-8 grid-cols-1 md:grid-cols-2 md:py-16 pb-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col justify-between md:text-left text-center wow animate__fadeInLeft">
            <div>
              <h1 className="md:text-4xl text-2xl pb-3 ">
                Lets <span className="text-primary-color">talk about</span>{" "}
                everything!{" "}
              </h1>
              <div className="mt-4">
                Hate forms? Send us an <span className="underline">email</span>{" "}
                instead.
              </div>
            </div>
            <div className="mt-8 text-center">
              <img
                src={contactUsImg}
                alt=""
                className="xl:-translate-x-24 md:-translate-x-12"
              />
            </div>
          </div>
          <div className="wow animate__fadeInRight">
            <div>
              <span className="uppercase text-sm">Full Name</span>
              <input
                className="w-full card-bg mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-primary-color"
                type="text"
                placeholder=""
              />
            </div>
            <div className="md:mt-8 mt-4">
              <span className="uppercase text-sm">Email</span>
              <input
                className="w-full card-bg mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-primary-color"
                type="text"
              />
            </div>
            <div className="md:mt-8 mt-4">
              <span className="uppercase text-sm">Message</span>
              <textarea className="w-full h-32 card-bg mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-primary-color"></textarea>
            </div>
            <div className="md:mt-8 mt-4 text-center">
              <Link
                href="#_"
                className="px-5 py-2.5 font-medium bg-primary-color button-shadow hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm inline-block mt-6 hover:-translate-y-1 duration-300 sm:max-w-[140px] max-w-[138px] w-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

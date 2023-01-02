import React from "react";
import { Link } from "react-router-dom";
import Portfolio1 from "../images/portfolio-1.png";
import Portfolio2 from "../images/portfolio-2.png";
import Portfolio3 from "../images/portfolio-3.png";
import Portfolio4 from "../images/portfolio-4.png";
import Portfolio5 from "../images/portfolio-5.png";
import Portfolio6 from "../images/portfolio-6.png";

const portfolioInfo = [
  {
    id: 1,
    image: Portfolio1,
    title: "Lion - The King",
    name: "Founder & CEO",
  },
  {
    id: 2,
    image: Portfolio2,
    title: "Tiger - The Runner",
    name: "Founder & CEO",
  },
  {
    id: 3,
    image: Portfolio3,
    title: "Elephant - The Big Animal",
    name: "Founder & CEO",
  },
  {
    id: 4,
    image: Portfolio4,
    title: "Monkeys",
    name: "Founder & CEO",
  },
  {
    id: 5,
    image: Portfolio5,
    title: "Cranes",
    name: "Founder & CEO",
  },
  {
    id: 6,
    image: Portfolio6,
    title: "Squirrel",
    name: "Founder & CEO",
  },
];
const portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-1 py-6 md:pt-36 pb-20">
        <div className="container px-4 mx-auto">
          <div className="text-center  max-w-[600px] mx-auto wow animate__fadeInDown">
            <h1 className="md:text-4xl text-2xl py-3 ">
              Our Awesome <span className="text-primary-color">Work</span>
            </h1>
            <p className="">
              The most important feature of FWR Blocks is that they are plug and
              play, reusable blocks of code that make frontend development
              extremely quick and easy.
            </p>
          </div>
          <div className="md:flex md:flex-wrap md:-mx-4 mt-6 pt-6 md:mt-12">
            {portfolioInfo.map((item) => (
              <div className="px-4 md:w-1/2 lg:w-1/3 wow animate__fadeInUp">
                <div className="max-w-sm mx-auto mb-4">
                  <div className="portfolio-img relative rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="max-w-full rounded-full w-[250px] h-[250px] mx-auto"
                    />
                    <Link
                      to="#0"
                      className="portfolio-hover flex items-center justify-center absolute left-0 top-0 right-0 bottom-0` transform scale-75 opacity-0 text-white transition-transform w-[250px] h-[250px] mx-auto rounded-full"
                    >
                      <i className="far fa-plus-square text-3xl"></i>
                    </Link>
                  </div>
                  <div className="portfolio-meta text-center p-4 md:px-6">
                    <h5 className="text-lg font-medium">{item.title}</h5>
                    <p className="text-gray-600 uppercase">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;

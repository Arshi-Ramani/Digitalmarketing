import React from "react";
import { Link } from "react-router-dom";
import Member1 from "../images/member-1.webp";
import Member2 from "../images/member-2.jpg";
import Member3 from "../images/member-3.jpg";
import Member4 from "../images/member-4.jpg";

const teamCard = [
  {
    id: 1,
    image: Member1,
    title: "Olivia Rhye",
    info: "Founder & CEO",
    content:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    id: 2,
    image: Member2,
    title: "Olivia Rhye",
    info: "Founder & CEO",
    content:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    id: 3,
    image: Member3,
    title: "Olivia Rhye",
    info: "Founder & CEO",
    content:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    id: 4,
    image: Member4,
    title: "Olivia Rhye",
    info: "Founder & CEO",
    content:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
];
const Team = () => {
  return (
    <div id="team" className="lg:py-24 pt-0 pb-12 wave bg-no-repeat bg-bottom">
      <div className="container">
        <div className="text-center w-full max-w-[600px] mx-auto md:mb-24 mb-12 wow animate__fadeInDown">
          <h1 className="md:text-4xl text-2xl py-3 ">
            Some of the <span className="text-primary-color"> people</span>{" "}
            you'll be working with{" "}
          </h1>
          <p className="">
            Tailus prides itself not only on award-winning technology, but also
            on the talent of its people of some of the brightest minds and most
            experienced executives in business.
          </p>
        </div>
        <div className="flex items-center lg:justify-between justify-center flex-wrap gap-6 gap-y-8">
          {teamCard.map((item) => (
            <div className="card lg:w-[23%] md:w-[30%] sm:w-[45%] max-w-[450px] w-full bg-primary-color p-4 rounded-xl card-bg text-center wow animate__fadeInUp">
              <img
                src={item.image}
                className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110 mx-auto mb-4"
                alt=""
              />
              <div className="text-gray-900 text-lg font-bold mb-3">
                {item.title}
              </div>
              <p className="text-purple-600">{item.info}</p>
              <p className="text-gray-600 max-w-[250px] w-full mx-auto">
                {item.content}
              </p>
              <div className="flex items-center justify-center gap-3 mt-8 w-auto text-gray-600">
                <Link
                  to="#"
                  className="bg-white w-6 h-6 rounded-full flex justify-center items-center"
                >
                  {" "}
                  <i className="fab fa-instagram text-primary-color"></i>
                </Link>
                <Link
                  to="#"
                  className="bg-white w-6 h-6 rounded-full flex justify-center items-center"
                >
                  <i className="fab fa-linkedin-in text-primary-color"></i>
                </Link>
                <Link
                  to="#"
                  className="bg-white w-6 h-6 rounded-full flex justify-center items-center"
                >
                  <i className="fab fa-facebook-f text-primary-color"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

import React from "react";
// import { Link } from "react-router-dom";
import SearchIcon from '../images/search-icon.png'
import Menu from '../images/menu.png'
import HeaderLogo from '../images/header-logo.png'
import { useState } from "react";
import { Link } from 'react-scroll'
 
const Header = () => {
  
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="relative z-50">
      <div className="fixed w-full left-[50%] translate-x-[-50%] bg-dark-blue z-[999]">
        <div className="container flex max-w-[1500px] w-full mx-auto justify-between pt-6 pb-6  px-3 items-center">
        <div className=""><Link to='#' className="font-semibold text-2xl"><img className="w-12 h-w-12" src={HeaderLogo} alt="" /></Link></div>
        <div className="">
          <div className={` ${menuOpen ? "block" : "lg:block hidden"}`}>
              <ul className="flex lg:flex-row flex-col xl:gap-[50px] gap-6 lg:static absolute lg:w-auto w-full lg:h-auto top-0 left-0 z-[999] text-white bg-dark-blue lg:pt-0 pt-8">
              <div className="lg:hidden block text-right w-full" onClick={() => setmenuOpen(false)}>
                <img className="ml-auto mr-3 mt-4" src={Menu} alt="" />
              </div>
                  <li className="lg:pl-0 pl-6">
                      <Link to='herosecion'activeClass="active"  spy={true} smooth={true} offset={50} duration={500} className="font-light md:text-base text-sm hover:text-primary-color duration-300 border-b-none hover:border-b-[1px] hover:border-primary-color">Home</Link>
                  </li>
                  <li className="lg:pl-0 pl-6">
                      <Link to='features' activeClass="active"  spy={true} smooth={true} offset={-100} duration={500} className="font-light md:text-base text-sm hover:text-primary-color duration-300 border-b-none hover:border-b-[1px] hover:border-primary-color">Features</Link>
                  </li>
                  <li className="lg:pl-0 pl-6">
                      <Link to='service' activeClass="active"  spy={true} smooth={true} offset={-100} duration={500} className="font-light md:text-base text-sm hover:text-primary-color duration-300 border-b-none hover:border-b-[1px] hover:border-primary-color">Service</Link>
                  </li>
                  <li className="lg:pl-0 pl-6">
                      <Link to='team' activeClass="active"  spy={true} smooth={true} offset={-100} duration={500} className="font-light md:text-base text-sm hover:text-primary-color duration-300 border-b-none hover:border-b-[1px] hover:border-primary-color">Team</Link>
                  </li>
                  <li className="lg:pl-0 pl-6">
                      <Link to='portfolio' activeClass="active"  spy={true} smooth={true} offset={-100} duration={500} className="font-light md:text-base text-sm hover:text-primary-color duration-300 border-b-none hover:border-b-[1px] hover:border-primary-color">Portfolio
                      </Link>
                  </li>
                  <li className="lg:pl-0 pl-6 lg:pb-0 pb-5">
                      <Link to='contactus' activeClass="active"  spy={true} smooth={true} offset={-100} duration={500} className="font-light md:text-base text-sm hover:text-primary-color duration-300 border-b-none hover:border-b-[1px] hover:border-primary-color ">Contact Us
                      </Link>
                  </li>
              </ul>
          </div>
        </div>
        <div className="relative flex">
          <input type="text" placeholder="Search" className="bg-dark-blue p-1 border-b border-b-primary-color focus:outline-none md:w-auto w-28" />
           <img src={SearchIcon} alt="" className="absolute top-2 -left-7" />     
          <div className="lg:hidden ml-4" onClick={setmenuOpen}>
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="absolute lg:left-[2%] left-[10px] top-[270px] md:block hidden">
        <div className="">
          <p className="rotate-90 ml-[-25px] mb-9">Follow us</p>
          <ul>
            <li className="mb-[20px]">
              <Link to="#"> <i className="fab fa-instagram text-primary-color"></i></Link>
            </li>
            <li className="mb-[20px]">
              <Link to="#"><i className="fab fa-linkedin-in text-primary-color"></i></Link>
            </li>
            <li className="mb-[20px]">
              <Link to="#"><i className="fab fa-facebook-f text-primary-color"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

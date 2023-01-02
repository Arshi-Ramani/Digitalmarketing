import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../images/hero-img.svg'

const Hero = () => {
  return (
    <div id='herosecion' className='pt-[126px] min-h-[80vh] flex items-center justify-center z-20 before:top-[20%] xl:before:left-[5%] before:left-[-20%] before:bg-no-repeat relative before:content md:before:w-[95%] before:w-[100%] before:!z-0 before:h-full before:absolute blur-round'>
      <div className="container px-4">
        <div className="md:flex-row flex-col flex items-center justify-between lg:pt-0 pt-12 relative z-50">
          <div className="lg:w-1/2 md:w-[75%] wow animate__fadeInLeft">
            <h4 className='uppercase md:text-xl text-lg text-primary-color'>DIGITAL AGENCY</h4>
            <h1 className='md:text-6xl text-4xl py-3  max-w-[500px]'>Fly <span className='text-primary-color'> Into The Sky</span> World With Us</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur similique sit odio reiciendis amet dolorum voluptatem, odit beatae animi. Debitis amet maiores corporis aspernatur perferendis praesentium nulla nostrum quisquam deleniti.</p>
            <Link href="#_" className="px-5 py-2.5 font-medium bg-primary-color button-shadow hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm inline-block mt-12 hover:-translate-y-1 duration-300 mr-6 sm:max-w-[140px] max-w-[138px] w-full text-center">
            Discover More
            </Link>
            <Link href="#_" className="px-5 py-2.5 font-medium bg-primary-color button-shadow hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm inline-block mt-6 hover:-translate-y-1 duration-300 sm:max-w-[140px] max-w-[138px] w-full text-center">
            Contact Us
            </Link>
          </div>
          <div className="wow animate__fadeInRight"><img src={HeroImg} alt="" className='w-[80%] md:ml-auto mx-auto hero-animation relative top-0 ' /></div>
        </div>
      </div>
      </div>
    )
  }

export default Hero

import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Portfolio from '../components/Portfolio'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import WOW from 'wow.js';
import 'animate.css';

const Home = () => {
  new WOW().init();
  return (
    <div className='bg-black text-white'>
        <Header/>
        <Hero  />
        <Features/>
        <Services/>
        <Team/>
        <Portfolio/>
        <ContactUs />
        <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../Components/HeroSection/Hero'
import Headline from '../Components/Headline/Headline'
import OfferCarousel from '../Components/Offer/OfferCarousel'
import Specialization from '../Components/Specialization/Specialization'
import './Homepage.css' 
import DoctorCarousel from '../Components/DoctorsCarousel/DoctorCarousel'

function Homepage() {
  return (
    <div className='homepage'>
      <Headline></Headline>
      <Hero></Hero>
      <OfferCarousel></OfferCarousel>
      <Specialization></Specialization>
      <DoctorCarousel></DoctorCarousel>
    </div>
  )
}

export default Homepage

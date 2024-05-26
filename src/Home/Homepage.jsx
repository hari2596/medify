import React from 'react'
import Hero from '../Components/HeroSection/Hero'
import Headline from '../Components/Headline/Headline'
import OfferCarousel from '../Components/Offer/OfferCarousel'
import Specialization from '../Components/Specialization/Specialization'
import DoctorCarousel from '../Components/DoctorsCarousel/DoctorCarousel'
import PatientCare from '../Components/PatientCare/PatientCare'

function Homepage() {
  return (
    <div className='homepage'>
      <Headline></Headline>
      <Hero></Hero>
      <OfferCarousel></OfferCarousel>
      <Specialization></Specialization>
      <DoctorCarousel></DoctorCarousel>
      <PatientCare></PatientCare>
    </div>
  )
}

export default Homepage

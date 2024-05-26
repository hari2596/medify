import React from 'react'
import './Faq.css'
import Accordian from '../Accordian/Accordian'
import faq from '../../Assets/faq.png'

function Faq() {
  return (
    <div className='faq'>
    <p>Get Your Answer</p>
    <h1>Frequently Asked Questions</h1>
    <div className='faqwrapper'>
        <img src={faq} alt="img"/>
        <Accordian/>
    </div>
</div>
  )
}

export default Faq

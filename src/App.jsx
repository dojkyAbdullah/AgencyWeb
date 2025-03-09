import React from 'react'
import HeroSection from './Components/HeroSection'
import WhyUs from './Components/WhyUs'
import DevelopmentProcess from './Components/DevelopmentProcess'
import CustomCursor from './Components/CustomCursor'
import Services from './Components/Services'
import ConsultationSection from './Components/ConsultationSection'
import Footer from './Components/Footer'

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
      <>
     <Router>
        <div className='w-full'>
          <CustomCursor/>
        <HeroSection/>
        <WhyUs/>
        <DevelopmentProcess/>
        <Services/>
        <ConsultationSection/>
        <Footer/>
        </div>
        </Router>
    
      </>
  )
}

export default App
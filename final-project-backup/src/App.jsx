import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Hero from './Components/Hero.jsx'
import Stats from './Components/Stats.jsx'
import About from './Components/About.jsx'
import Features from './Components/Features.jsx'
import Sections from './Components/Sections.jsx'
import Footer from './Components/Footer.jsx'
import Testimonials from './Components/Testimonials.jsx'
import NewServices from './Components/NewServices.jsx'
import Discount from './Components/Discount.jsx'




function App() {
  return (
   <div>
   
      <Hero />
      <Stats />
      <About />
      <NewServices />
      <Features/>
      <Sections/>
      <Testimonials />
      <Discount />
      <Footer />
      
    
   </div>
  );
}

export default App;

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
// import About from './About'
import Services from './Services'
import Education from './Education'

// import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
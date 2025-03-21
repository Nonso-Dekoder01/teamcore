import React from 'react'
import Navbar from './Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'

// import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
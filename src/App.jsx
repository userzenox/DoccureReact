import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'

import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Service from './Pages/Service/Service.jsx'
import Contact from './Pages/Contact.jsx'
import Appointment from './Pages/Appointment.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Header />
     
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Service' element={<Service />} />
         <Route path='/contact' element={<Contact />} />
         {/* <Route path='/Appoitment' element={<Appointment />} /> */}
     </Routes>

     <Footer />
     
     </>
  )
}

export default App

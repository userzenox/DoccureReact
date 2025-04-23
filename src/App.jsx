import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'

import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Services from './Pages/Service/Service.jsx'
import Appointment from './Pages/Appointment.jsx'
import Footer from './components/Footer/Footer.jsx'
import BmiCheck from './Pages/Service/links/BmiCheck.jsx'
import QuickCheckUps from './Pages/Service/QuickCheckup.jsx'
import Doctor from './Pages/Doctor.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Header />
     
     <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Services' element={<Services />} />
         <Route path='/Doctor' element={<Doctor />} />
         <Route path='/BmiCheck' element={<BmiCheck />} />
         {/* <Route path='/Appoitment' element={<Appointment />} /> */}
     </Routes>

     <Footer />
     
     </>
  )
}

export default App

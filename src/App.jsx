import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import Booking from './pages/Booking'
import Experience from './pages/experience'
import About from './pages/About'

function App() {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />        
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App

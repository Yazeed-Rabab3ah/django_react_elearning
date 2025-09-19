import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

import NotFound from "./pages/NotFound"
import CoursesPage from "./pages/CoursesPage"
import CourseDetails from './pages/CourseDetails'
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"
import HomeHero from "./components/HomeHero"
import AboutHero from "./components/AboutHero"
import ContactHero from "./components/ContactHero"
import Rates from "./components/Rates"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import CourseDetailsHero from "./components/CourseDetailsHero"



function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            
              <Home />
            
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/CourseDetails/:id" element={<CourseDetails/>}/>
        <Route path="/navbar" element={<Navbar/>}/> {/* for testing  */}
        <Route path="/HomeHero" element={<HomeHero/>}/> {/* for testing  */}
        <Route path="/AboutHero" element={<AboutHero/>}/> {/* for testing  */}
        <Route path="/courses" element={<CoursesPage />} /> 
        <Route path="/ContactHero" element={<ContactHero/>} /> {/* for testing  */}
        <Route path="/rate" element={<Rates/>} /> {/* for testing  */}
        <Route path="/Footer" element={<Footer/>} /> {/* for testing  */}
        <Route path="CourseDetailsHero/:id" element={<CourseDetailsHero/>}/>

        





        <Route path="*" element={<NotFound />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
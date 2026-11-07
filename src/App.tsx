import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Admissions from "./pages/Admissions"
import Staff from "./pages/Staff"
import Contact from "./pages/Contact"
import Academics from "./pages/Academics"
import { Routes, Route, Navigate } from "react-router-dom"
function App() {
  document.title = "Divine Heritage Academy Best School Oritamerin Bako, Ibadan"
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about-us" element={<About/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/admissions" element={<Admissions/>}/>
        <Route path="/our-staff" element={<Staff/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

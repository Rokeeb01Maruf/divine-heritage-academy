import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Header (){
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const path = location.pathname
    useEffect(()=>{
        setOpen(false)
    }, [path])
    return(
        <header className="fixed z-100 top-0 left-0 w-screen flex transition-all duration-300 ease-in-out font-secondary text-base font-semibold justify-between items-center px-18 max-[1089px]:px-14 max-[1023px]:px-10 text-dark py-2.5 bg-white shadow shadow-[0 0 5px 0 rgb(0 0 0 / .5)]">
           <div className={`max-[952px]:${open ? "flex" : "hidden"} hidden w-screen h-screen bg-black/50 absolute top-0 left-0`}></div>
           <a href="">
            <img src="/images/logo.webp" className="w-[67.21px]" alt="divine heritage academy's logo" />
           </a>
           <nav className={` max-[952px]:${open ? "flex" : "hidden"} max-[952px]:right-0 z-5 flex items-center max-[952px]:absolute max-[952px]:top-0 max-[952px]:w-[50%] max-[952px]:h-screen max-[952px]:bg-white max-[952px]:flex-col max-[952px]:justify-start max-[952px]:pt-20 max-[952px]:items-start px-10 max-[420px]:px-8 gap-2.5`}>
            <Link to={"/"} className={`${path === "/" && " border-b-4"} h-11.5 hover:border-b-4 border-deep-red max-[990px]:px-2.5 px-5 py-3.25 hover:text-deep-red`}>Home</Link>
            <Link to={"/about-us"} className={`${path === "/about-us" && " border-b-4"} h-11.5 hover:border-b-4 border-deep-red max-[990px]:px-2.5 px-5 py-3.25 hover:text-deep-red`}>About Us</Link>
            <Link to={"/academics"} className={`${path === "/academics" && " border-b-4"} h-11.5 hover:border-b-4 border-deep-red max-[990px]:px-2.5 px-5 py-3.25 hover:text-deep-red`}>Academics</Link>
            <Link to={"/admissions"} className={`${path === "/admissions" && " border-b-4"} h-11.5 hover:border-b-4 border-deep-red max-[990px]:px-2.5 px-5 py-3.25 hover:text-deep-red`}>Admissions</Link>
            <Link to={"/our-staff"} className={`${path === "/our-staff" && "border-b-4"} h-11.5 hover:border-b-4 border-deep-red max-[990px]:px-2.5 px-5 py-3.25 hover:text-deep-red`}>Our Staff</Link>
            <Link to={"/contact-us"} className={`${path === "/contact-us" && " border-b-4"} h-11.5 hover:border-b-4 border-deep-red max-[990px]:px-2.5 px-5 py-3.25 hover:text-deep-red`}>Contact Us</Link>
            <Link to={"/contact-us"} className="px-6 hidden max-[952px]:flex py-2 rounded-sm bg-secondary hover:bg-deep-red transition-all duration-300 text-white">Apply Now</Link>
            <img onClick={()=>setOpen(false)} src="/images/close.svg" className="hidden cursor-pointer max-[952px]:absolute max-[952px]:top-5 max-[952px]:right-5 max-[952px]:flex" alt="menu close" width="24" height="24" />
           </nav>
           <Link to={"/contact-us"} className="px-6 py-2 rounded-sm hover:bg-deep-red transition-all duration-300 bg-secondary max-[952px]:hidden text-white">Apply Now</Link>
           <img src="/images/burger-bar.webp" onClick={()=>setOpen(true)} className="hidden max-[952px]:flex" alt="" width="36" height="36" /> 
        </header>
    )
}
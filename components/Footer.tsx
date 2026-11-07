import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className="px-18 py-8 bg-deep-blue text-white max-[1089px]:px-14 max-[1023px]:px-10">
            <section className="flex justify-between max-[1013px]:flex-col max-[1013px]:gap-y-5">
                <div className="max-[1013px]:max-w-[90%] max-w-104.75 max-[1187px]:max-w-100 max-[1160px]:max-w-85 max-[1039px]-max-w-60">
                    <a href="">
                        <img src="/images/logo.webp" alt="" className="w-[113.16px] h-[113.16px]"/>
                    </a>
                    <p>A private school in Ibadan providing quality education from Playgroup to Senior Secondary.</p>
                </div>
                <div>
                    <h2 className="font-primary font-semibold text-xl mb-1">Quick Links</h2>
                    <nav className="flex flex-col">
                        <Link to={"/"} className="py-1">Home</Link>
                        <Link to={"/about-us"} className="py-1">About Us</Link>
                        <Link to={"/academics"}>Academics</Link>
                        <Link to={"/admissions"} className="py-1">Admissions</Link>
                        <Link to={"/our-staff"} className="py-1">Our Staff</Link>
                        <Link to={"/contact-us"} className="py-1">Contact Us</Link>
                    </nav>
                </div>
                <div>
                    <h2 className="font-primary font-semibold text-xl mb-1">Contact</h2>
                    <nav className="flex flex-col">
                        <a href="https://www.google.com/maps/search/?api=1&query=Divine+Heritage+Academy%2C+Ayonitemi+Community%2C+Orita+Merin%2C+Bako%2C+Ibadan%2C+Oyo+State" target="_blank" className="flex items-start gap-x-1 py-1">
                            <img width={18} src="/images/location.svg" alt="" />
                            <span>Zone 4, No. 26, Ayonitemi Oritamerin Bako, Ibadan, Oyo State</span>
                        </a>
                        <a href="tel:+2348055219625" className="flex items-center gap-x-1 py-1">
                            <img width={18} src="/images/call.svg" alt="" />
                            <span>+234 805 521 9625</span>
                        </a>
                        <a href="tel:+2348102681552" className="flex items-center gap-x-1 py-1">
                            <img width={18} src="/images/call.svg" alt="" />
                            <span>+234 810 268 1552</span>
                        </a>
                        <a href="mailto:info@divineheritageacademy.com" className="flex items-center gap-x-1 py-1">
                            <img width={18} src="/images/mail.svg" alt="" />
                            <span>info@divineheritageacademy.com</span>
                        </a>
                    </nav>
                </div>
            </section>
            <section className="flex justify-between border-t-2 mt-5 border-white pt-1 max-[574px]:flex-col max-[574px]:gap-y-5">
                <p>&copy; 2026 Divine Heritage Academy. All rights reserved.</p>
                <p>Privacy · Terms</p>
            </section>
        </footer>
    )
}
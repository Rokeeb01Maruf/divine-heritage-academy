import { Link } from "react-router-dom";
export default function About() {
    return (
        <main className="mt-[87.21px] relative font-secondary text-base">
            <section className="flex flex-col gap-y-5 bg-primary text-white py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <p><Link to={"/"}>Home</Link> / About Us</p>
                <h2 className="text-5xl max-lg:text-2xl font-primary font-bold">About Divine Heritage Academy</h2>
                <p className="w-[60%] text-lg max-lg:w-full">A private school in Ibadan providing quality education from Playgroup to Senior Secondary, in a safe and supportive environment.</p>
            </section>
            <section className="flex max-[867px]:flex-col gap-10 px-18 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <div className="flex flex-col flex-1/2 gap-y-5">
                    <h3 className="mb-2 font-primary text-4xl text-primary font-bold">Training for a Glorious Future</h3>
                    <p className="text-lg">Divine Heritage Academy provides a comprehensive educational programme from early childhood to senior secondary level. We equip every child with the knowledge, skills, values and confidence needed for a glorious future.</p>
                    <p className="text-lg">Students are nurtured academically, morally, socially and creatively. They are prepared for national examinations including BECE, WAEC and NECO, and supported through JAMB registration and the tertiary admission process.</p>
                    <Link to={"/academics"} className="w-fit bg-deep-blue hover:bg-deep-red transition-all duration-300 text-white px-5 py-2.5 rounded-lg">View Our Academics</Link>
                </div>
                <div className="mt-2 rounded-lg h-fit w-fit flex-1/2 shadow-md shadow-gray-700">
                    <img src="/images/about-senior.webp" className="rounded-lg" alt="" />
                </div>
            </section>
            <section className="px-18 bg-gray py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <h3 className="mb-4 font-primary text-4xl text-primary font-bold">Our Vision and Mission</h3>
                <div className="flex gap-10 max-[767px]:flex-col">
                    <div className="flex bg-white rounded-lg border-t-2 border-secondary p-9 flex-col gap-x-10">
                        <h4 className="text-3xl text-primary font-primary font-bold">Vision</h4>
                        <p className="text-lg text-gray-700">To raise academically excellent, morally upright, confident, and responsible students who will become successful leaders and positive contributors to society.</p>
                    </div>
                    <div className="flex bg-white rounded-lg border-t-2 border-tertiary p-9 flex-col gap-x-10">
                        <h4 className="text-3xl text-primary font-primary font-bold">Mision</h4>
                        <p className="text-lg text-gray-700">To provide quality education in a safe and supportive environment, while nurturing students academically, morally, socially, and creatively, and preparing them for a glorious future.</p>
                    </div>
                </div>
            </section>
            <section className="px-18 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <div className="flex gap-10 max-lg:flex-col">
                    <div className="rounded-lg h-fit w-fit flex-1/2 shadow-md shadow-gray-700">
                        <img src="/images/offer.webp" className="rounded-lg" alt="" />
                    </div>
                    <div className="flex flex-col flex-1/2 mt-5">
                        <h3 className="mb-4 font-primary text-4xl text-primary font-bold">What We Offer</h3>
                        <p className="mb-3">Our classes run from early childhood to senior secondary:</p>
                        <ul className="list-disc text-lg">
                            <li className="ml-10">Playgroup and Pre-Nursery</li>
                            <li className="ml-10">Nursery 1 to 3</li>
                            <li className="ml-10">Primary 1 to 5</li>
                            <li className="ml-10">Junior Secondary School (JSS 1 to 3)</li>
                            <li className="ml-10">Senior Secondary School (SS 1 to 3)</li>
                        </ul>
                        <p className="mb-7">We welcome students into all classes, subject to availability of space.</p>
                        <Link to={"/admissions"} className="w-fit font-semibold bg-deep-blue hover:bg-deep-red transition-all duration-300 text-white px-5 py-2.5 rounded-lg">Admission Requirements</Link>
                    </div>
                </div>
            </section>
            <section className="bg-primary flex flex-col items-center py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-4xl max-lg:text-2xl text-center text-white font-primary font-bold mb-4">Visit Us or Ask a Question</h2>
                <p className="text-md text-center leading-relaxed mb-4 max-w-[50%] max-lg:max-w-full text-white">
                    Call the school office or send a message and we will respond.
                </p>
                <Link className="px-7 font-semibold text-white py-3 bg-secondary hover:bg-deep-red transition-all duration-300 rounded-sm mt-5 inline-block" to={"/contact"}>Contact Us</Link>
            </section>
        </main>
    )
}
import { Link } from "react-router-dom";

export default function Admissions() {
    return (
        <main className="mt-[87.21px] relative font-secondary text-base">
            <section className="flex flex-col gap-y-5 bg-primary text-white py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <p><Link to={"/"}>Home</Link> / Admissions</p>
                <h2 className="text-5xl max-lg:text-2xl font-primary font-bold">Admissions</h2>
                <p className="w-[50%] text-lg max-lg:w-full">Divine Heritage Academy welcomes students into all classes, subject to availability of space.</p>
            </section>
            <section className="px-18 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <h3 className="text-3xl font-primary font-bold text-primary">Admission Requirements</h3>
                <div className="flex gap-10 max-lg:flex-col mt-5">
                    <div className="text-gray-700 flex-1/2 text-lg mt-5">
                        <p className="mb-4">Please prepare the following when applying:</p>
                        <ul className="text-base">
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">1</span>Completed admission/application form.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">2</span>Recent passport photograph.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">3</span>Copy of the child’s birth certificate or age declaration.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">4</span>Previous school report card/result, where applicable.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">5</span>Transfer/withdrawal certificate for students transferring from another school.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">6</span>Relevant examination results for students seeking admission into JSS or SS classes.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">7</span>Placement assessment/interview where required.</li>
                            <li className="flex py-1 border-b border-gray-200 items-center gap-2"><span className="font-bold bg-primary font-primary text-white px-3.5 py-1.75 rounded-full">8</span>Payment of the applicable admission and school fees.</li>
                        </ul>
                    </div>
                    <div className="mt-10 flex-1/2 shadow-md shadow-gray-700 border-t-2 border-deep-red p-5 rounded-lg">
                        <h4 className="text-xl font-primary mb-2 font-bold text-primary mt-8">Start Your Application</h4>
                        <p className="text-lg mb-3">Contact the school office to collect an admission form, ask about available places or arrange a visit.</p>
                        <b className="text-primary font-primary">Phone</b>
                        <p className="text-lg mb-2 py-1 border-b border-gray-200"><a className="hover:text-deep-blue" href="tel:+2348055219625">+234 805 521 9625</a> | <a className="hover:text-deep-blue" href="tel:+2348102681552">+234 810 268 1552</a></p>
                        <b className="text-primary font-primary">Email</b>
                        <p className="text-lg mb-2 py-1 border-b border-gray-200"><a className="hover:text-deep-blue" href="mailto:info@divineheritageacademy.com">info@divineheritageacademy.com</a></p>
                        <b className="text-primary font-primary">Address</b>
                        <p className="text-lg mb-2 py-1 border-b hover:text-deep-blue border-gray-200">Zone 4, No. 26, Ayonitemi Oritamerin Bako, Ibadan, Oyo State, Nigeria</p>
                        <Link className="px-7 font-semibold text-white py-3 bg-secondary hover:bg-deep-red transition-all duration-300 rounded-sm mt-5 inline-block" to={"/contact-us"}>Contact the School</Link>
                    </div>
                </div>
            </section>
            <section className="flex max-md:flex-col gap-5 px-18 max-lg:pt-10 bg-gray py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <div className="flex flex-1/2 flex-col gap-y-4 text-gray-700 text-base mt-5">
                    <h3 className="text-2xl font-primary font-bold text-primary mb-2">School Fees</h3>
                    <p>Fees are structured according to the student’s class and level of study. Parents and guardians receive a detailed breakdown of fees at the point of admission.</p>
                    <p>For current admission fees and a complete breakdown of charges, please contact the school administration.</p>
                </div>
                <div className="flex flex-1/2 bg-white rounded-lg border-t-2 border-tertiary p-9 flex-col gap-x-10">
                    <h3 className="text-2xl text-primary font-primary font-bold">Fees may include</h3>
                    <ul className="list-disc pl-10 text-gray-700 text-lg mt-5">
                        <li>Tuition fees</li>
                        <li>Registration/admission fee</li>
                        <li>Examination fees</li>
                        <li>Books and learning materials</li>
                        <li>Uniforms</li>
                        <li>Other approved school charges</li>
                    </ul>
                </div>
            </section>
            <section className="flex gap-5 max-md:flex-col px-18 max-md:pt-10 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <div className="flex-1/2 flex flex-col gap-y-4 text-gray-700 text-base">
                    <h2 className="text-4xl mt-15 max-md:mt-0 font-primary font-bold text-primary mb-2">Visit the School</h2>
                    <p>Divine Heritage Academy is at Zone 4, No. 26, Ayonitemi Oritamerin Bako, Ibadan. Landmark: Ayonitemi Community, Orita Merin, via Oke Hala, Bako.</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Divine+Heritage+Academy%2C+Ayonitemi+Community%2C+Orita+Merin%2C+Bako%2C+Ibadan%2C+Oyo+State" className="px-7 font-semibold text-white py-3 bg-primary w-fit hover:bg-deep-blue transition-all duration-300 rounded-sm mt-5 inline-block">Open in Google Maps</a>
                </div>
                <div className="flex-1/2 h-fit shadow-md shadow-gray-700 rounded-lg">
                    <img src="/images/early.webp" className="rounded-lg" alt="" />
                </div>
            </section>
            <section className="bg-primary flex flex-col items-center py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-4xl max-lg:text-2xl text-center text-white font-primary font-bold mb-4">Training for a Glorious Future</h2>
                <p className="text-md text-center leading-relaxed mb-4 max-w-[50%] max-lg:max-w-full text-white">
                    Call or write to the school office to begin your child’s admission.
                </p>
                <Link className="px-7 font-semibold text-white py-3 bg-secondary hover:bg-deep-red transition-all duration-300 rounded-sm mt-5 inline-block" to={"/contact"}>Contact Us</Link>
            </section>
        </main>
    )
}
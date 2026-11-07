import { Link } from "react-router-dom"
export default function Academics() {
    return (
        <main className="mt-[87.21px] relative font-secondary text-base">
            <section className="flex flex-col gap-y-5 bg-primary text-white py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <p><Link to={"/"}>Home</Link> / Academics</p>
                <h2 className="text-5xl max-lg:text-2xl font-primary font-bold">Learning Designed for Excellence</h2>
                <p className="w-[50%] text-lg max-lg:w-full">Quality education from the foundation stage to senior secondary level, equipping every child with the knowledge, skills, values and confidence needed for a glorious future.</p>
            </section>
            <section className="px-18 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <h3 className="mb-2 font-primary text-4xl text-primary font-bold">Classes and Programmes</h3>
                <p className="text-lg w-[60%] max-lg:w-full">Divine Heritage Academy offers a complete programme from early childhood to Senior Secondary School.</p>
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 mt-5">
                    <div className="flex flex-col gap-y-2.5 shadow-md shadow-gray-700 rounded-lg pb-5 mt-5">
                        <img src="/images/early.webp" className="rounded-t-lg" alt="" />
                        <h4 className="text-xl px-2.5 font-primary text-primary font-bold mt-4">Early Years</h4>
                        <h5 className="px-2.5 font-primary text-secondary font-bold">Playgroup, Pre-Nursery, Nursery 1 to 3</h5>
                        <p className="px-2.5 text-base text-gray-700">The foundation stage, where children begin their education in a safe and caring setting that builds knowledge, skills, values and confidence.</p>
                    </div>
                    <div className="flex flex-col gap-y-2.5 shadow-md shadow-gray-700 rounded-lg pb-5 mt-5">
                        <img src="/images/about-primary.webp" className="rounded-t-lg" alt="" />
                        <h4 className="text-xl px-2.5 font-primary text-primary font-bold mt-4">Primary Education</h4>
                        <h5 className="px-2.5 font-primary text-secondary font-bold">Primary 1 to 5</h5>
                        <p className="px-2.5 text-base text-gray-700">A continuing programme that develops each child academically, morally, socially and creatively.</p>
                    </div>
                    <div className="flex flex-col gap-y-2.5 shadow-md shadow-gray-700 rounded-lg pb-5 mt-5">
                        <img src="/images/about-junior.webp" className="rounded-t-lg" alt="" />
                        <h4 className="text-xl px-2.5 font-primary text-primary font-bold mt-4">Junior Secondary School</h4>
                        <h5 className="px-2.5 font-primary text-secondary font-bold">JSS 1 to 3</h5>
                        <p className="px-2.5 text-base text-gray-700">Students are prepared for and registered for the Basic Education Certificate Examination (BECE), also known as Junior WAEC.</p>
                    </div>
                    <div className="flex flex-col gap-y-2.5 shadow-md shadow-gray-700 rounded-lg pb-5 mt-5">
                        <img src="/images/about-senior.webp" className="rounded-t-lg" alt="" />
                        <h4 className="text-xl px-2.5 font-primary text-primary font-bold mt-4">Senior Secondary School</h4>
                        <h5 className="px-2.5 font-primary text-secondary font-bold">SSS 1 to 3</h5>
                        <p className="px-2.5 text-base text-gray-700">Students are prepared for and registered for WAEC and NECO, with JAMB registration and guidance on tertiary admission.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray px-18 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <h3 className="mb-2 font-primary text-4xl text-primary font-bold">Examinations</h3>
                <div className="flex gap-10 max-lg:flex-col">
                    <div className="flex-1/2 mt-4 flex flex-col gap-y-2.5">
                        <p>Our students are prepared for and registered for the major national examinations:</p>
                        <ul className="list-disc pl-10">
                            <li><b>BECE</b> (Basic Education Certificate Examination), also known as Junior WAEC</li>
                            <li><b>WAEC</b> (West African Senior School Certificate Examination)</li>
                            <li><b>NECO</b> (National Examinations Council)</li>
                        </ul>
                    </div>
                    <div className="flex flex-1/2 bg-white rounded-lg border-t-2 border-tertiary p-9 flex-col gap-x-10">
                        <h4 className="text-3xl text-primary font-primary font-bold">Mission</h4>
                        <p className="text-lg text-gray-700">To provide quality education in a safe and supportive environment, while nurturing students academically, morally, socially, and creatively, and preparing them for a glorious future.</p>
                    </div>
                </div>
            </section>
            <section className="bg-primary flex flex-col items-center py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-4xl max-lg:text-2xl text-center text-white font-primary font-bold mb-4">Give Your Child a Stronger Foundation for the Future</h2>
                <p className="text-md text-center leading-relaxed mb-4 max-w-[50%] max-lg:max-w-full text-white">
                    We welcome students into all classes, subject to availability of space.
                </p>
                <Link className="px-7 font-semibold text-white py-3 bg-secondary hover:bg-deep-red transition-all duration-300 rounded-sm mt-5 inline-block" to={"/admissions"}>Admission Requirements</Link>
            </section>
        </main>
    )
}
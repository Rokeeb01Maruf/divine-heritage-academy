import { Link } from "react-router-dom"
export default function Home() {
    return (
        <main className="mt-[87.21px] relative font-secondary text-base">
            <section className="py-12 max-[496px]:py-6 max-[405px]:h-fit h-115.25 min-h-115.25 max-h-115.25 relative max-[1089px]:px-14 max-[1023px]:px-10 px-18 text-white bg-[url('/images/bg-image.png')] bg-center bg-cover w-full min-[1100px]:h-[80vh]">
                <h2 className="font-primary mb-2 font-bold text-[3.5rem]/[1.2] max-lg:text-[2.5rem] max-md:text-[2rem]">Where Every Child Is Prepared to Excel</h2>
                <p className="w-[55%] text-lg max-lg:w-full">Divine Heritage Academy provides a supportive and engaging learning environment where students develop academically, socially and personally.</p>
                <div className="mt-5 max-[413px]:flex-col max-[413px]:items-left max-[413px]:text-left  max-[413px]:gap-y-2.5 flex gap-x-2.5 w-fit max-[400px]:gap-y-2.5">
                    <Link className="px-5 py-3 border border-deep-red bg-secondary hover:bg-deep-red transition-all duration-300 rounded-sm" to={"/academics"}>Explore Our School</Link>
                    <Link className="px-7 py-3 transition-all duration-300 hover:bg-white/50 border-2 border-white rounded-sm" to={"contact-us"}>Contact Us</Link>
                </div>
                <p className="text-xs mt-6 italic">Inspiring Excellence, Building Character, Shaping the Future</p>
                <div className="max-[413px]:grid-cols-1 max-[413px]:top-100 max-[881px]:grid-cols-2 max-md:text-xs max-h-77.5 max-[498px]:p-2.5 max-[1023px]:top-[calc(100%-120px)] gap-g absolute top-[calc(100%-80px)] bg-white w-[calc(100%-144px)] max-[1089px]:w-[calc(100%-112px)] max-[1023px]:w-[calc(100%-80px)] shadow-md shadow-[5px 5px 5px 20px rgb(0 0 0 / .5)] text-black grid grid-cols-4 justify-between rounded-lg p-5">
                    <div className="flex max-[413px]:border-b-2 max-[413px]:border-r-0 flex-col gap-y-2.5 p-2.5 border-r-2 border-primary/20">
                        <p className="font-primary text-primary max-md:text-sm font-semibold text-xl">Experienced Educators</p>
                        <p>Qualified, caring teachers</p>
                    </div>
                    <div className="flex max-[413px]:border-b-2 flex-col gap-y-2.5 p-2.5 border-r-2 border-primary/20 max-[881px]:border-r-0">
                        <p className="font-primary text-primary max-md:text-sm font-semibold text-xl">Dedicated Learning Environment</p>
                        <p>Focused, well-equipped classrooms</p>
                    </div>
                    <div className="flex max-[413px]:border-b-2 max-[413px]:border-r-0 max-[413px]:border-t-0 flex-col gap-y-2.5 p-2.5 border-r-2 border-primary/20 max-[881px]:border-t-2">
                        <p className="font-primary text-primary font-semibold text-xl">Academic Excellence</p>
                        <p>High standards in every subject</p>
                    </div>
                    <div className="flex max-[413px]:border-b-0 max-[413px]:border-t-0 flex-col gap-y-2.5 p-2.5 max-[881px]:border-t-2 border-primary/20">
                        <p className="font-primary text-primary max-md:text-sm font-semibold text-xl">Strong Character Development</p>
                        <p>Discipline, values and leadership</p>
                    </div>
                </div>
            </section>
            <section className="max-[767px]:flex-col pb-15 max-[767px]:gap-y-10 max-[767px]:mt-60 mt-40 max-[1089px]:px-14 gap-x-10 max-[1023px]:px-10 px-18 flex">
                <div className="flex1/2 w-[50%] max-[767px]:w-full">
                    <h2 className="text-3xl text-primary font-primary font-bold mb-4">Welcome to Divine Heritage Academy</h2>
                    <p className="text-lg leading-relaxed mb-2">
                        Divine Heritage Academy is a private school in Ibadan committed to academic excellence and the formation of good character. We believe every child can achieve more when learning is structured, supportive and rooted in strong values.
                    </p>
                    <p className="text-lg leading-relaxed mb-5">
                        Our teachers combine discipline with creativity, helping students think critically, communicate confidently and prepare for the opportunities ahead, in school and beyond.
                    </p>
                    <h3 className="text-xl pl-2 border-l-3 border-deep-red font-primary font-bold text-primary mb-8">Training for a Glorious Future</h3>
                    <Link className="px-7 font-bold text-white py-3 bg-deep-blue hover:bg-deep-red transition-all duration-300 rounded-sm" to={"/academics"}>Learn More About Us</Link>
                </div>
                <div className="w-[50%] max-[767px]:w-full">
                    <img className="rounded-lg shadow-md shadow-gray-700" src="/images/cover.webp" alt="" />
                </div>
            </section>
            <section className="bg-gray py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-3xl text-primary font-primary font-bold mb-4">Learning Designed for Excellence</h2>
                <p className="text-lg leading-relaxed mb-8">
                    A clear path from the first day of school to graduation, with each stage building on the last.
                </p>
                <div className="grid max-[500px]:grid-cols-1 max-[1089px]:gap-y-10 max-[1089px]:grid-cols-2 gap-x-10 grid-cols-4">
                    <div className="bg-white rounded-lg shadow-md shadow-gray-700">
                        <img src="/images/about-early.webp" className="rounded-t-lg" alt="" />
                        <h3 className="text-xl text-primary font-primary font-semibold mx-2.5 mt-5 mb-2">Early Years</h3>
                        <p className="text-md text-gray-700 leading-relaxed mb-8 mx-2.5">
                            Play-based learning that builds early literacy, numeracy, curiosity and confidence.
                        </p>
                        <Link className="mx-2.5 font-semibold py-1 text-deep-blue border-primary hover:border-b-2 transition-all duration-300" to={"/academics"}>Learn More</Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md shadow-gray-700">
                        <img src="/images/about-primary.webp" className="rounded-t-lg" alt="" />
                        <h3 className="text-xl text-primary font-primary font-semibold mx-2.5 mt-5 mb-2">Primary Education</h3>
                        <p className="text-md text-gray-700 leading-relaxed mb-8 mx-2.5">
                            A solid grounding in core subjects, reading, creativity and good study habits.
                        </p>
                        <Link className="mx-2.5 font-semibold py-1 text-deep-blue border-primary hover:border-b-2 transition-all duration-300" to={"/academics"}>Learn More</Link>
                    </div>
                    <div className="bg-white rounded-lg pb-2 shadow-md shadow-gray-700">
                        <img src="/images/about-junior.webp" className="rounded-t-lg" alt="" />
                        <h3 className="text-xl text-primary font-primary font-semibold mx-2.5 mt-5 mb-2">Junior Secondary</h3>
                        <p className="text-md text-gray-700 leading-relaxed mb-8 mx-2.5">
                            A broad curriculum that develops independent thinking and prepares students for senior years.
                        </p>
                        <Link className="mx-2.5 font-semibold py-1 text-deep-blue border-primary hover:border-b-2 transition-all duration-300" to={"/academics"}>Learn More</Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md shadow-gray-700">
                        <img src="/images/about-senior.webp" className="rounded-t-lg" alt="" />
                        <h3 className="text-xl text-primary font-primary font-semibold mx-2.5 mt-5 mb-2">Senior Secondary</h3>
                        <p className="text-md text-gray-700 leading-relaxed mb-8 mx-2.5">
                            Focused preparation for WAEC and NECO examinations and for university pathways.
                        </p>
                        <Link className="mx-2.5 font-semibold py-1 text-deep-blue border-primary hover:border-b-2 transition-all duration-300" to={"/academics"}>Learn More</Link>
                    </div>

                </div>
            </section>
            <section className="py-20 max-[1089px]:px-14 border-b-2 border-deep-blue max-[1023px]:px-10 px-18">
                <h2 className="text-3xl text-primary font-primary font-bold mb-4">Meet Our Dedicated Team</h2>
                <p className="text-lg leading-relaxed mb-8">
                    Our teachers and administrators are committed to every student’s progress
                </p>
                <div className="grid max-sm:grid-cols-1 max-[1089px]:gap-y-10 max-[1089px]:grid-cols-2 gap-x-10 grid-cols-3">
                    <div className="px-2.5 shadow-md shadow-gray-700 rounded-lg py-5 flex flex-col">
                        <img src="/images/staff-1.webp" alt="" />
                        <h3 className="text-2xl text-primary font-primary font-bold mt-5">Mrs. Adenike Alao</h3>
                        <h4 className="text-xl mb-2 font-semibold text-deep-red font-primary">Proprietress</h4>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">Email</h4>
                        <a className="hover:text-primary transition-all duration-300 mb-2" href="mailto:proprietress@divineheritageacademy.com">proprietress@divineheritageacademy.com</a>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">About</h4>
                        <p className="mb-2">Mrs. Adenike Alao is the Proprietress of Divine Heritage Academy, providing strategic leadership and overseeing the overall development and administration of the school.</p>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">Qualifications</h4>
                        <p>B.Sc. Ed. Mathematics; PGDS Statistics</p>
                    </div>
                    <div className="px-2.5 shadow-md shadow-gray-700 rounded-lg py-5 flex flex-col">
                        <img src="/images/staff-2.webp" alt="" />
                        <h3 className="text-xl text-primary font-primary font-bold mt-5">Miss Ayegbeso Racheal Opeyemi</h3>
                        <h4 className="text-xl mb-2 font-semibold text-deep-red font-primary">Principal</h4>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">Email</h4>
                        <a className="hover:text-primary transition-all duration-300 mb-2" href="mailto:principal@divineheritageacademy.com">principal@divineheritageacademy.com</a>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">About</h4>
                        <p className="mb-2">Miss Ayegbeso Racheal Opeyemi serves as the Principal of Divine Heritage Academy. She provides academic and administrative leadership, promotes effective teaching and learning, and ensures that the school’s vision, mission, and standards are upheld.</p>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">Qualifications</h4>
                        <p>B.Sc. Economics</p>
                    </div>
                    <div className="px-2.5 shadow-md shadow-gray-700 rounded-lg py-5 flex flex-col">
                        <img src="/images/staff-3.webp" alt="" />
                        <h3 className="text-2xl text-primary font-primary font-bold mt-5">Mrs. Adeleye Oluwabunmi</h3>
                        <h4 className="text-xl mb-2 font-semibold text-deep-red font-primary">Vice Principal (Academics)</h4>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">Email</h4>
                        <a className="hover:text-primary transition-all duration-300 mb-2" href="mailto:viceprincipal@divineheritageacademy.com">viceprincipal@divineheritageacademy.com</a>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">About</h4>
                        <p className="mb-2">Mrs. Adeleye Oluwabunmi serves as the Vice Principal (Academics), supporting the Principal in maintaining academic standards, coordinating teaching and learning activities, and promoting students’ academic development.</p>
                        <h4 className="text-xl font-semibold text-deep-red font-primary">Qualifications</h4>
                        <p>B.Sc. Agricultural and Extension</p>
                    </div>
                </div>
            </section>
            <section className="my-10 px-18 max-[1089px]:px-14 max-[1023px]:px-10">
                <h2 className="text-3xl mt-2 font-primary font-bold text-deep-blue mb-10">Why Parents Choose Divine Heritage Academy</h2>
                <div className="grid max-[500px]:grid-cols-1 max-[500px]:gap-x-5 max-[1089px]:gap-y-10 max-[1089px]:grid-cols-2 gap-x-10 grid-cols-4">
                    <div className="flex rounded-lg shadow-md px-5 py-10 shadow-gray-700 flex-col gap-y-2.5">
                        <h3 className="text-xl text-primary font-primary font-bold">Experienced & Dedicated Teachers</h3>
                        <p className="text-gray-700">Qualified teachers who know each student and give clear, regular feedback.</p>
                    </div>
                    <div className="flex rounded-lg shadow-md px-5 py-10 shadow-gray-700 flex-col gap-y-2.5">
                        <h3 className="text-xl text-primary font-primary font-bold">Strong Academic Foundation</h3>
                        <p className="text-gray-700">A structured curriculum with regular assessment and extra support where needed.</p>
                    </div>
                    <div className="flex rounded-lg shadow-md px-5 py-10 shadow-gray-700 flex-col gap-y-2.5">
                        <h3 className="text-xl text-primary font-primary font-bold">Experienced & Dedicated Teachers</h3>
                        <p className="text-gray-700">Qualified teachers who know each student and give clear, regular feedback.</p>
                    </div>
                    <div className="flex rounded-lg shadow-md px-5 py-10 shadow-gray-700 flex-col gap-y-2.5">
                        <h3 className="text-xl text-primary font-primary font-bold">Experienced & Dedicated Teachers</h3>
                        <p className="text-gray-700">Qualified teachers who know each student and give clear, regular feedback.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-3xl text-primary font-primary font-bold mb-4">More Than a Classroom</h2>
                <p className="text-lg leading-relaxed mb-8">
                    Learning at Divine Heritage Academy extends to the laboratory, the field and the stage.
                </p>
                <div className="flex gap-x-5 max-[767px]:flex-col max-[767px]:gap-y-5">
                    <div className="relative flex-1 hover:bg-black/30 bg-blend-multiply bg-[url('/images/about-junior.webp')] bg-cover bg-center min-h-60 rounded-lg">
                        <p className="absolute bottom-2 left-2 font-primary text-white bg-primary p-2.5 rounded-lg">Classroom Learning</p>
                    </div>
                    <div className="flex flex-1 flex-col gap-y-5">
                        <div className="relative hover:bg-black/30 bg-blend-multiply flex-1 bg-[url('/images/laboratory.jpg')] bg-cover bg-center min-h-28 rounded-lg">
                            <p className="absolute bottom-2 left-2 font-primary text-white bg-primary p-2.5 rounded-lg">Science &amp; Technology</p>
                        </div>
                        <div className="relative hover:bg-black/30 bg-blend-multiply flex-1 bg-[url('/images/cultural.jpg')] bg-cover bg-center min-h-28 rounded-lg">
                            <p className="absolute bottom-2 left-2 font-primary text-white bg-primary p-2.5 rounded-lg">Cultural activities</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-4xl text-primary font-primary font-bold mb-4">What Parents Say</h2>
                <div className="flex gap-x-5 max-[767px]:flex-col max-[767px]:gap-y-5">
                    <div className="rounded-lg shadow-md shadow-gray-700 p-5 w-full">
                        <p className="text-md leading-relaxed mb-6">
                            “Our son has grown in confidence and discipline since joining. His teachers keep us informed and respond quickly.”
                        </p>
                        <h3 className="text-xl font-primary font-bold text-primary">Mrs. Folake Adeyemi</h3>
                        <p className="text-gray-600">Parent of a Junior Secondary student</p>
                    </div>
                    <div className="rounded-lg shadow-md shadow-gray-700 p-5 w-full">
                        <p className="text-md leading-relaxed mb-6">
                            “The school balances strong academics with good values. We see the difference in how our daughter speaks and studies.”
                        </p>
                        <h3 className="text-xl font-primary font-bold text-primary">Mr. Tunde Ogunleye</h3>
                        <p className="text-gray-600">Parent of a Primary student</p>
                    </div>
                    <div className="rounded-lg shadow-md shadow-gray-700 p-5 w-full">
                        <p className="text-md leading-relaxed mb-6">
                            “The staff are approachable and genuinely care about each child. We are glad we chose Divine Heritage Academy.”
                        </p>
                        <h3 className="text-xl font-primary font-bold text-primary">Mrs. Ngozi Okafor</h3>
                        <p className="text-gray-600">Parent of a Senior Secondary student</p>
                    </div>
                </div>
            </section>
            <section className="bg-primary flex flex-col items-center py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <h2 className="text-4xl max-lg:text-2xl text-center text-white font-primary font-bold mb-4">Give Your Child a Stronger Foundation for the Future</h2>
                <p className="text-md text-center leading-relaxed mb-4 max-w-[50%] max-lg:max-w-full text-white">
                    Discover a learning environment designed to help every student grow, learn and thrive.
                </p>
                <Link className="px-7 font-semibold text-white py-3 bg-secondary hover:bg-deep-red transition-all duration-300 rounded-sm mt-5 inline-block" to={"/admissions"}>Start Your Admission Journey</Link>
            </section>
        </main>
    )
}
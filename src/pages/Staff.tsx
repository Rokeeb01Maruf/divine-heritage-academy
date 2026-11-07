import { Link } from "react-router-dom";

export default function Staff(){
    return(
        <main className="mt-[87.21px] relative font-secondary text-base">
            <section className="flex flex-col gap-y-5 bg-primary text-white py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <p><Link to={"/"}>Home</Link> / Our Staff</p>
                <h2 className="text-5xl max-lg:text-2xl font-primary font-bold">Meet Our Dedicated Team</h2>
                <p className="text-lg">The people who lead, teach and support students at Divine Heritage Academy. Select a name to read more.</p>
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
        </main>
    )
}
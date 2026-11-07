import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <main className="mt-[87.21px] relative font-secondary text-base">
            <section className="flex flex-col gap-y-5 bg-primary text-white py-20 max-[1089px]:px-14 max-[1023px]:px-10 px-18">
                <p><Link to={"/"}>Home</Link> / Contact Us</p>
                <h2 className="text-5xl max-lg:text-2xl font-primary font-bold">Contact Us</h2>
                <p className="text-lg">Call, write or visit the school office for admissions, enquiries and appointments.</p>
            </section>
            <section className="flex max-lg:flex-col gap-x-10 px-18 py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <div className="flex-1/2">
                    <b className="text-primary font-primary">Address</b>
                    <p className="text-lg mb-2 py-1 border-b hover:text-deep-blue border-gray-200">Zone 4, No. 26, Ayonitemi Oritamerin Bako, Ibadan, Oyo State, Nigeria</p>
                    <b className="text-primary font-primary">Landmark</b>
                    <p className="text-lg mb-2 py-1 border-b hover:text-deep-blue border-gray-200">Ayonitemi Community, Orita Merin, via Oke Hala, Bako, Ibadan</p>
                    <b className="text-primary font-primary">Phone</b>
                    <p className="text-lg mb-2 py-1 border-b border-gray-200"><a className="hover:text-deep-blue" href="tel:+2348055219625">+234 805 521 9625</a> | <a className="hover:text-deep-blue" href="tel:+2348102681552">+234 810 268 1552</a></p>
                    <b className="text-primary font-primary">Email</b>
                    <p className="text-lg mb-2 py-1 border-b border-gray-200"><a className="hover:text-deep-blue" href="mailto:info@divineheritageacademy.com">info@divineheritageacademy.com</a></p>
                    <b className="text-primary font-primary">Opening hours</b>
                    <p className="text-lg mb-2 py-1 border-b hover:text-deep-blue border-gray-200">Monday to Friday, 7:30 am to 4:00 pm</p>
                    <b className="text-primary font-primary">Plus Code</b>
                    <p className="text-lg mb-2 py-1 border-b hover:text-deep-blue border-gray-200">CQ9F+H79</p>
                </div>
                <div className="flex-1/2 rounded-lg shadow-md shadow-gray-700 p-5">
                    <form action="" method="POST">
                        <h3 className="font-primary text-2xl text-primary mb-4 font-bold">Send us a message</h3>
                        <div className="flex w-full gap-x-5 mb-4">
                            <label htmlFor="full-name" className="w-full">
                                <p className="cursor-pointer font-semibold">Full name</p>
                                <input type="text" name="full-name" id="full-name" required className="w-full p-2 rounded-sm border border-gray-300 outline-0"/>
                            </label>
                            <label htmlFor="phone-number" className="w-full">
                                <p className="cursor-pointer font-semibold">Phone Number</p>
                                <input type="tel" name="phone-number" id="phone-number" required className="w-full p-2 rounded-sm border border-gray-300 outline-0"/>
                            </label>
                        </div>
                        <label htmlFor="email" className="w-full mb-4">
                            <p className="cursor-pointer font-semibold">Email</p>
                            <input type="email" name="email" id="email" required className="w-full p-2 rounded-sm border border-gray-300 outline-0"/>
                        </label>
                        <label htmlFor="subject" className="w-full mb-4">
                            <p className="cursor-pointer mt-4 font-semibold">Subject</p>
                            <select name="subject" id="subject" required className="w-full p-2 text-primary rounded-sm border border-gray-300 outline-0">
                                <option value="Admission Enquiry">Admission Enquiry</option>
                                <option value="General Enquiry">General Enquiry</option>
                                <option value="Visit the School">Visit the School</option>
                            </select>
                        </label>
                        <label htmlFor="message" className="w-full mb-4">
                            <p className="cursor-pointer mt-4 font-semibold">Message</p>
                            <textarea rows={4} name="message" id="message" required className="w-full p-2 rounded-sm border border-gray-300 outline-0"></textarea>
                        </label>
                        <button type="submit" className="bg-primary font-primary text-lg font-semibold mt-4 text-white py-2 px-4 rounded-sm hover:bg-deep-blue">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <section className="px-18 w-full max-w-full py-20 max-[1089px]:px-14 max-[1023px]:px-10 max-[767px]:px-5">
                <iframe className="max-w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7912.835754038971!2d3.7708014254557343!3d7.418918899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398b3f700a97b9%3A0x3364668bb593e083!2sDivine%20Heritage%20Academy!5e0!3m2!1sen!2sng!4v1793973359812!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </section>
        </main>
    )
}
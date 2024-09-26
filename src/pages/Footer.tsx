const footer = () => {
    return (
        <div id='about' className='bg-[#dadbe1] text-black flex items-center h-70 justify-center mt-[10rem] w-screen' >
            <footer className='flex md:items-start items-center md:flex-row flex-col py-12 md:px-[7rem] px-[4rem] h-full justify-between md:gap-12 gap-[4.5rem] w-full flex-wrap '>

                <div className="flex flex-col md:items-start items-center justify-center md:text-left text-center gap-6 md:w-[400px] w-full">
                    <h1 className="font-semibold">About</h1>
                    <p className="text-[1rem]">Welcome to Apple Montessori, where students are encouraged to excel in both academics and extracurricular activities.</p>
                    <div className="flex items-center gap-7">
                        <i className="cursor-pointer fa-brands fa-facebook text-3xl"></i>
                        <i className="cursor-pointer fa-brands fa-tiktok text-3xl"></i>
                    </div>
                </div>

                <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center gap-6">
                    <h1 className="font-semibold">Quick Links</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a className="hover:underline transition-all" href="#home">Home</a></li>
                        <li><a className="hover:underline transition-all" href="#gallery">Gallery</a></li>
                        <li><a className="hover:underline transition-all" href="#faqs">FAQs</a></li>
                        <li><a className="hover:underline transition-all" href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center gap-6">
                    <h1 className="font-semibold">Helpful Links</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a className="hover:underline transition-all" href="#program">Programs</a></li>
                        <li><a className="hover:underline transition-all" href="#testimonial">Testimonials</a></li>
                        <li><a className="hover:underline transition-all" href="#">Enroll Now</a></li>
                        <li><a className="hover:underline transition-all" href="#program">Admissions</a></li>
                    </ul>
                </div>

                <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center gap-2">
                    <h1 className="font-semibold">Contact Us</h1>
                    <p className="text-[1rem] opacity-60">Feel free to reach out for any queries or support</p>
                    <ul className="flex flex-col md:items-start items-center gap-2 pt-4">
                        <li className="flex gap-3 items-center"><i className="text-green-700 fa-solid fa-phone"></i><a className="hover:underline transition-all"href="#">+977 9846569628</a></li>
                        <li className="flex gap-3 items-center"><i className="text-slate-600 fa-solid fa-envelope"></i><a className="hover:underline transition-all" href="#">appleacademy@gmail.com</a></li>
                        <li className="flex gap-3 items-center"><i className="text-red-800 fa-solid fa-location-dot"></i><a href="#" className="hover:underline transition-all">Ghorahi-10, Narayanpur</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default footer;
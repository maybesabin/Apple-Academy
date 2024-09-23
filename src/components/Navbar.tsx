// import Logo from '../assets/images/apple.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState , useEffect } from "react"

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 z-[999] transition duration-200 transition-du ${isScrolling ? 'shadow' : ''}`}>
            <div className="flex items-center lg:justify-between justify-between md:px-12 px-4 w-screen md:h-24 h-[4rem] text-xl bg-white" id='navbar'>
                <div className='flex items-center justify-center gap-4'>
                    {/* <img className='opacity-90' src={Logo} width={'70px'} alt="Apple Academy Logo" /> */}
                    <p className='text-3xl font-bold'>Apple</p>
                </div>

                <ul className='items-center justify-center gap-12 lg:flex hidden'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-center gap-2">Programs
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
                                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="z-[1000]">
                                <a href="#programs"><DropdownMenuLabel>Our Programs</DropdownMenuLabel></a>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Toddler Program</DropdownMenuItem>
                                <DropdownMenuItem>Elementary School</DropdownMenuItem>
                                <DropdownMenuItem>Middle School</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <button className='bg-black text-white lg:flex hidden px-6 py-2 text-[1rem] rounded-full'>Enroll Now</button>

                <svg className="lg:hidden flex cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="none">
                    <path d="M10 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 19L14 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default Navbar
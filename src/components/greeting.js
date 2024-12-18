import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const scrollPop = () => {
    const popularDiv = document.getElementById("popular");
    window.scrollTo({
        top: popularDiv.scrollHeight,
        behavior: 'smooth'
    })
}
// Functional Component
const Greeting = () => {
    const route = useLocation();
    return (
        <div className="fixed top-0 left-0 w-full bg-[#B22222] flex justify-between px-3 py-3 items-center z-[999] shadow-lg">
            <div className="lg:hidden">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
            </div>
            <div className="logo w-[33%] lg:w-[20%]">
                <Link to="/">
                    <img src={Logo} className="w-[100%] lg:w-[30%]" alt="logo" />
                </Link>
            </div>
            <div className="hidden lg:flex text-[16px] text-[white] gap-6 w-[60%] justify-center">
                <Link to="/" className="transition-all hover:text-[black]">Home</Link>
                {
                    route.pathname=='/'? (<span className="transition-all hover:text-[black]" onClick={scrollPop}>Popular</span>):(<Link to="/#popular" className="transition-all hover:text-[black]">Popular</Link>)
                }
                <a href="https://aryasaputra.my.id" className="transition-all hover:text-[black]">Explore</a>
                <a href="https://github.com/arya-saputra/movie-web-react" className="transition-all hover:text-[black]">Repo</a>
                <a href="https://github.com/arya-saputra" className="transition-all hover:text-[black]">Github</a>
            </div>
            <div className="header-search hidden lg:block lg:w-[20%]">
                <input type="text" placeholder="Search" className="bg-[#5E1914] border-0 p-2 outline-0 text-white w-full rounded-lg" />
            </div>
            <svg class="lg:hidden w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>

        </div>
    );
};

export default Greeting;
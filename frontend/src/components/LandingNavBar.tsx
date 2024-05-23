import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import BankingLogo from "../assets/BankingLogo.png"

function LandingNavBar(){
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <header className="py-0.1 px-2 flex justify-between items-center bg-white shadow-md sticky top-0 z-40">
            <Link to="#home" className="cursor-pointer" onClick={() => scrollToSection('home')}>
            <motion.div
                className="flex items-center"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <motion.img
                    src={BankingLogo}
                    alt="Basti Bank Logo"
                    className="h-20 mr-10 block"
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                />
                <motion.h1
                    className="text-3xl font-extrabold text-indigo-600"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Basti Bank
                </motion.h1>
            </motion.div>
            </Link>
            <div className="flex items-center space-x-6">
                <Link to="#home" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('home')}>
                    Home
                </Link>
                <Link to="#service" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('service')}>
                    Service
                </Link>
                <Link to="#about" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('about')}>
                    Über uns
                </Link>
                <Link to="#team" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('team')}>
                    Unser Team
                </Link>
                <Link to="#contact" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('contact')}>
                    Kontakt
                </Link>
                <Link to="#testimonials" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('testimonials')}>
                    Kundenstimmen
                </Link>
                <Link to="#faqs" className="text-gray-700 font-bold hover:text-indigo-600" onClick={() => scrollToSection('faqs')}>
                    FAQs
                </Link>
            </div>
            <Link to="/login"
                  className="bg-indigo-600 text-white px-6 py-2 mr-32 ml-20 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
                Login
            </Link>
        </header>
            </>
    )
}

export default LandingNavBar
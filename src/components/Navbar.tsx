import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (

    <nav
        className={`fixed top-0 left-0 w-full px-4 md:px-12 py-4 md:py-6 z-50 flex justify-between items-center ${
            theme === "light"
            ? "bg-white/70 border-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.12)]"
            : "bg-zinc-900/70 border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.25)]"
        }`}
    >
        <h1 className="font-bold text-xl">
            Monique.
        </h1>

        <div className="flex gap-6 items-center">

        <a  
            href="#about" 
            className="hover:text-violet-500 transition duration-300"
        >
            About
        </a>

        <a 
            href="#projects"
            className="hover:text-violet-500 transition duration-300"
        >
            Projects
        </a>
        <a 
            href="#contact"
            className="hover:text-violet-500 transition duration-300"
        >
            Contact
        </a>

        <button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
        </button>

        </div>

    </nav>
  );
}

export default Navbar;
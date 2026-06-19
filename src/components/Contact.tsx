import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="px-6 md:px-20 py-32">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-3">
        Contact
      </h2>

      {/* Purple Accent Line */}
      <div className="w-20 h-1 bg-violet-600 rounded-full mb-12"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <h3 className="text-3xl font-bold mb-6">
            Let’s Connect.
          </h3>

          <p className="text-lg leading-8 max-w-lg">
            Whether it’s building great software, discussing new ideas, or exploring exciting opportunities, I’m always happy to connect.
          </p>

        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5">

          {/* Email Card */}
          <a
            href="mailto:your.email@gmail.com"
            className={`
              p-5
              rounded-xl
              border
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500
              ${
                theme === "light"
                  ? "bg-white border-gray-200"
                  : "bg-zinc-800 border-zinc-700"
              }
            `}
          >
            <p className="text-violet-600 font-semibold">
              Email
            </p>

            <p className="mt-1">
              moniquevith1@gmail.com
            </p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/moniquevith/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-5
              rounded-xl
              border
              transition-all
              duration-300
              hover:scale-105
              hover:border-violet-500
              ${
                theme === "light"
                  ? "bg-white border-gray-200"
                  : "bg-zinc-800 border-zinc-700"
              }
            `}
          >
            <p className="text-violet-600 font-semibold">
              LinkedIn
            </p>

            <p className="mt-1">
              Connect professionally
            </p>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
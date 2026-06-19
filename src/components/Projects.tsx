import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="px-6 md:px-20 py-32">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-3">
        Projects
      </h2>

      {/* Accent Line */}
      <div className="w-20 h-1 bg-violet-600 rounded-full mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              p-8
              rounded-xl
              border
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:-translate-y-1
              hover:border-violet-500
              ${
                theme === "light"
                  ? "bg-white border-gray-200"
                  : "bg-zinc-800 border-zinc-700"
              }
            `}
          >

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-5">

              {project.tech.map((item) => (
                <span
                  key={item}
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    ${
                      theme === "light"
                        ? "bg-violet-100 text-black"
                        : "bg-violet-200 text-black"
                    }
                  `}
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Description */}
            <p className="mb-6 leading-7">
              {project.desc}
            </p>

            {/* GitHub Link */}
            {/* <a
              href={project.github}
              className="text-violet-600 font-semibold hover:text-violet-400 transition"
            >
              View Project →
            </a> */}
            <p className="text-violet-600 font-semibold hover:text-violet-400 transition"> 
                {project.status}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
import { skills } from "../data/skills";
import { useTheme } from "../context/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="px-6 md:px-20 py-32">

      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              p-6
              rounded-xl
              border
              shadow-sm
              hover:scale-105
              hover:-translate-y-1
              transition-all
              duration-300
              ${
                theme === "light"
                  ? "bg-white border-violet-200"
                  : "bg-zinc-800 border-violet-500"
              }
            `}
          >

            {/* Category Heading */}
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === "light"
                  ? "text-violet-600"
                  : "text-violet-400"
              }`}
            >
              {skill.category}
            </h3>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2">

              {skill.items.map((item) => (
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

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
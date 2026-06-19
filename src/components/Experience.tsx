import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-20 md:py-32">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      {experience.map((job, index) => (
        <div
          key={index}
          className="
            grid
            grid-cols-1
            md:grid-cols-[180px_1fr]
            gap-4
            md:gap-8
            mb-12
          "
        >

          {/* Year */}
          <div className="font-semibold text-white-600 md:pt-1">
            {job.year}
          </div>

          {/* Timeline Content */}
          <div
            className="
              relative
              border-l-2
              border-violet-500
              pl-6
              md:pl-8
            "
          >

            {/* Dot */}
            <div
              className="
                absolute
                -left-[7px]
                top-2
                w-3
                h-3
                md:w-4
                md:h-4
                rounded-full
                bg-violet-600
              "
            />

            {/* Company + Logo */}
            <div className="flex items-center gap-3 mb-2">

              <img
                src={job.logo}
                alt={job.company}
                className="w-8 h-8 object-contain"
              />

              <h3 className="font-bold text-lg md:text-xl">
                {job.company}
              </h3>

            </div>

            {/* Role */}
            <p className="italic text-gray-500 mb-3 text-sm md:text-base">
              {job.role}
            </p>

            {/* Description */}
            <p className="leading-7 text-sm md:text-base">
              {job.desc}
            </p>

          </div>

        </div>
      ))}

    </section>
  );
}

export default Experience;
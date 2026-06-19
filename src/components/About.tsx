function About() {
    return (
      <section id="about" className="px-6 md:px-20 py-32">
  
        <div className="grid md:grid-cols-2 gap-16 items-center">
  
          {/* LEFT SIDE PHOTO */}
          <div className="flex justify-center">
  
            <div
              className="
                p-3
                rounded-2xl
                border
                border-violet-500
                shadow-xl
                hover:scale-[1.02]
                transition
                duration-300
              "
            >
  
              <img
                src="/profile.jpg"
                alt="Monique"
                className="
                  w-[600px]
                  h-[520px]
                  object-cover
                  rounded-xl
                "
              />
  
            </div>
  
          </div>
  
          {/* RIGHT SIDE TEXT */}
          <div>
  
            <h2 className="text-4xl font-bold">
              About Me
            </h2>
  
            {/* Purple Accent Line */}
            <div className="w-20 h-1 bg-violet-600 mt-3 rounded-full mb-8"></div>
  
            <p className="text-lg leading-8 max-w-3xl">
  
              I’m a Software Engineer with experience building
              production-grade software and solving technical
              challenges across both engineering and business
              environments.
  
              <br />
              <br />
  
              During my internship at Atlassian, I worked on
              frontend development within Jira, gaining hands-on
              experience building and shipping software at scale
              while learning how high-performing engineering teams
              design, maintain, and improve complex products.
  
              <br />
              <br />
  
              Today, I work as a Technical Consultant where I design
              automations and build integrations between software
              platforms to help businesses streamline workflows and
              operate more efficiently.
  
              <br />
              <br />
  
              I enjoy working at the intersection of engineering and
              business - combining technical problem-solving with a
              client-facing approach to create solutions that deliver
              real impact.
  
            </p>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default About;
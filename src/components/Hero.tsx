function Hero() {
    return (
      <section
        id="hero"
        className="min-h-screen px-6 md:px-20 pt-24 md:pt-8 flex items-center"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center w-full">
  
          {/* LEFT SIDE */}
          <div>
  
            <p className="text-lg mb-3">
              Software Engineer by Trade
            </p>
  
            <h1 className="text-7xl font-bold">
              Hi, I’m Mon
            </h1>
  
            <div className="w-24 h-1 bg-violet-600 mt-3 rounded-full"></div>
  
            <p className="mt-6 text-xl max-w-2xl text-gray-500 leading-8">
              I’m a technical consultant who enjoys building products,
              integrating systems, and helping businesses streamline
              the way they work.
            </p>
  
            <div className="flex gap-4 mt-8">
  
              <a
                href="#projects"
                className="
                  border px-6 py-3 rounded-lg
                  hover:bg-purple-600
                  hover:text-white
                  hover:border-purple-600
                  transition duration-300
                "
              >
                View Projects
              </a>
  
              <a
                href="#contact"
                className="
                  border px-6 py-3 rounded-lg
                  hover:bg-purple-600
                  hover:text-white
                  hover:border-purple-600
                  transition duration-300
                "
              >
                Contact Me
              </a>
  
            </div>
  
          </div>
  
          {/* RIGHT SIDE */}
          <div className="flex justify-center">
  
            <div
              className="
                max-w-lg w-full
                rounded-2xl
                shadow-xl
                border
                border-violet-400
                overflow-hidden
              "
            >
  
              {/* Fake top bar */}
              <div className="flex gap-2 px-4 py-3 border-b">
  
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
  
              </div>
  
              {/* Code section */}
              <div
                className="
                  p-6
                  font-mono
                  text-sm
                  leading-8
                "
              >
                <p>
                  <span className="text-violet-500">const</span>{" "}
                  monique = {"{"}
                </p>
  
                <p className="ml-6">
                  role: <span className="text-green-500">"Technical Consultant"</span>,
                </p>
  
                <p className="ml-6">
                  strengths: <span className="text-green-500">"pretending bugs don't scare her"</span>,
                </p>
                <p className="ml-6">
                  weaknesses: <span className="text-green-500">"yaps too much"</span>,
                </p>
  
                <p className="ml-6">
                  hobbies: [
                  <span className="text-green-500">
                    "Gym", "Learning new tech", "Eating"
                  </span>
                  ],
                </p>
                <p className="ml-6">
                  matchaLevel: <span className="text-green-500">"infinite"</span>,
                </p>
  
                <p>{"}"}</p>
  
                {/* Blinking cursor */}
                <span className="animate-pulse text-violet-500 text-xl">
                  |
                </span>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Hero;
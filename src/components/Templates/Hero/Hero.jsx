import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <p className="text-lg md:text-xl uppercase tracking-widest mb-4">
              Hello, my name is
            </p>

            <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">
              <span>Aymane</span>
              <br />
              <span className="text-amber-700">Guelbaoui</span>
            </h1>

            <h2 className="text-2xl md:text-3xl uppercase mb-8">
              I am a <span className="text-amber-700">Web Developer</span>
            </h2>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
              <button
                className="w-30 h-10 bg-amber-700 rounded-md hover:bg-amber-800"
              >
                View My Work
              </button>
              </Link>
              <Link to="/contact">
              <button
                className="w-30 h-10 bg-amber-700 rounded-md hover:bg-amber-800"
              >
                Get In Touch
              </button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-amber-700 flex items-center justify-center">
              <span className="text-6xl md:text-7xl font-bold text-amber-700">
                AG
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

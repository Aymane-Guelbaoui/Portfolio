const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
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
              <button
                onClick={() => scrollToSection('#projects')}
                className="w-30 h-10 bg-amber-700 rounded-md hover:bg-amber-800 transition"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="w-30 h-10 bg-amber-700 rounded-md hover:bg-amber-800 transition"
              >
                Get In Touch
              </button>
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

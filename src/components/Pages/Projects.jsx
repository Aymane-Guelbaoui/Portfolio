import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    img: "/Images/Ecom-img.png",
    title: 'Clothing website',
    description: 'An online store for women’s clothing',
    technologies: ['React'],
    liveUrl: 'https://ecom-project-phi.vercel.app/',
    githubUrl: 'https://github.com/Aymane-Guelbaoui/Ecom-Project',
  },
  {
    id: 2,
    img: "/Images/Ecom-img.png",
    title: 'Social media app',
    description: 'A social platform with posts, comments, likes, real-time chat, and user authentication.',
    technologies: ['React','Django'],
    liveUrl: 'https://social-media-website-ten-snowy.vercel.app/login',
    githubUrl: 'https://github.com/Aymane-Guelbaoui/social_media_website',
  },
  {
    id: 3,
    img: "/Images/Ecom-img.png",
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with 7-day forecasts, location search, and interactive maps.',
    technologies: ['React', 'OpenWeather API', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-4xl font-bold text-center mb-2">
          My <span className="text-amber-700">Projects</span>
        </h2>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="relative hidden md:block">
          {/* Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 rounded-full shadow hover:text-amber-700"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 rounded-full shadow hover:text-amber-700"
          >
            <ChevronRight />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-0">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 rounded-full transition-all ${
                  i === currentIndex
                    ? 'w-8 bg-amber-700'
                    : 'w-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= MOBILE SCROLL ================= */}
        <div className="md:hidden flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="rounded-lg overflow-hidden shadow">
    <div className="aspect-video">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>

      <p className="text-gray-600 mb-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-amber-700 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          className="px-5 py-2 bg-amber-700 text-white rounded-sm flex items-center gap-2 hover:bg-amber-800"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>

        <a
          href={project.githubUrl}
          className="px-5 py-2 bg-amber-700 text-white rounded-sm flex items-center gap-2 hover:bg-amber-800"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Projects;

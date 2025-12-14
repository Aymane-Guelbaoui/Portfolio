import React, { useState } from "react";

const certificates = [
  { id: 1, issuer: "Coursera", img: "/Images/Certificates/Coursera-Cert-2.png" },
  { id: 2, issuer: "Coursera", img: "/Images/Certificates/Coursera-Cert-2.png" },
  { id: 3, issuer: "Coursera", img: "/Images/Certificates/Coursera-Cert-2.png" },
  { id: 4, issuer: "Coursera", img: "/Images/Certificates/Coursera-Cert-2.png" }
];

const About = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="about" className="min-h-screen flex flex-col items-center py-10 px-6">
      <div className="max-w-4xl w-full text-center mb-5">
        <h2 className="text-4xl font-bold mb-8">
          About <span className="text-amber-600">Me</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
          I'm a passionate web developer with a keen eye for design and a love for creating 
          seamless user experiences. With expertise in modern web technologies including 
          React, TypeScript, and Tailwind CSS, I build responsive, performant, and visually 
          stunning web applications. My goal is to transform ideas into digital reality, 
          crafting solutions that not only look great but also deliver exceptional functionality.
        </p>
      </div>

      {/* Certificates */}
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide text-center mb-8">
          Certifications
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`
                relative cursor-pointer transition-transform duration-300
                ${hoveredId === cert.id ? "scale-125 z-20" : "scale-90"}
              `}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-110 h-105 object-contain rounded-lg shadow-lg "
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-lg font-semibold">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


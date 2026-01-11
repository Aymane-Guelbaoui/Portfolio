import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const certificates = [
  { id: 1, issuer: "Alx", img: "/Images/Certificates/Alx-Cert-1.png" },
  { id: 2, issuer: "Alx", img: "/Images/Certificates/Alx-Cert-2.png" },
  { id: 3, issuer: "Coursera", img: "/Images/Certificates/Coursera-Cert-4.png" },
  { id: 4, issuer: "Coursera", img: "/Images/Certificates/Coursera-Cert-3.png" }
];

export default function About() {
  const [hoveredId, setHoveredId] = useState(null);


  const [activeCert, setActiveCert] = useState(null);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col items-center py-10 px-6">
      <h2 className="text-4xl font-bold mb-8">
        About <span className="text-amber-600">Me</span>
      </h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="relative flex justify-center border border-amber-600 rounded-2xl">
          <div className="w-50 h-100 rounded-2xl flex items-center justify-center">
            <span className="text-7xl font-bold text-amber-600">AG</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Passionate about <br />
            <span className="text-amber-600">Building the Web</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            I'm a full-stack developer with a passion for creating seamless digital experiences.
          </p>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl " style={{boxShadow: "var(--case-shadow)"}}>
              <h4 className="font-semibold mb-1">Development</h4>
              <p className="text-sm text-gray-400">JavaScript, Php, Python</p>
            </div>

            <div className="p-4 rounded-xl " style={{boxShadow: "var(--case-shadow)"}}>
              <h4 className="font-semibold mb-1">Design</h4>
              <p className="text-sm text-gray-400">UI/UX, Figma, Tailwind</p>
            </div>

            <div className="p-4 rounded-xl " style={{boxShadow: "var(--case-shadow)"}}>
              <h4 className="font-semibold mb-1">Performance</h4>
              <p className="text-sm text-gray-400">Optimization & Speed</p>
            </div>

            <div className="p-4 rounded-xl " style={{boxShadow: "var(--case-shadow)"}}>
              <h4 className="font-semibold mb-1">Quality</h4>
              <p className="text-sm text-gray-400">Clean & Tested Code</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="w-full mt-12 flex flex-col items-center">
        <h3 className="text-lg font-semibold uppercase tracking-wider text-center mb-4 text-gray-300">
          Certifications
        </h3>

        <div className="relative overflow-hidden w-full flex justify-center">
          <div className="flex w-max marquee gap-8 items-center">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
              >
                <img
                  src={cert.img}
                  alt={cert.issuer}
                  onClick={() => setActiveCert(cert)}
                  className="w-58 h-33 object-contain rounded-xl bg-gray-900 cursor-pointer"
                />
                <p className="absolute w-full text-center text-xs text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            <img
              src={activeCert.img}
              alt={activeCert.issuer}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />

            <p className="mt-4 text-center text-sm text-gray-300">
              {activeCert.issuer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

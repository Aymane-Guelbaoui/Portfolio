import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";



import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Contact';
import About from '../../Pages/About/About';
import Theme from '../Theme/Theme';
import Projects from '../../Pages/Projects';


function Layout() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const [theme, setTheme] = useState(
    document.body.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => {
      setTheme(document.body.getAttribute("data-theme"));
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <nav className="w-full relative h-16" style={{ boxShadow: "var(--nav-shadow)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          
          
          <div className="absolute top-3 left-4">
            <NavLink to="/">
              <h1 className="text-4xl font-extrabold hover:text-amber-600 active:text-amber-600">AG</h1>
            </NavLink>
          </div>

          
          <div className="hidden md:block flex-1"></div>

          
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <NavLink
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="relative group text-base hover:text-amber-700"
              >
                {({ isActive }) => (
                  <>
                    {link}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-amber-600 transition-all ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          
          <div className="hidden md:flex absolute top-3 right-4">
            <Theme />
          </div>

          
          <button 
            className="md:hidden z-50 focus:outline-none absolute top-3 right-3 active:text-amber-600"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg> 
          </button>
        </div>
       <AnimatePresence>
          {isMobile && open && (
              <>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />

                {/* Sidebar */}
                <motion.div
            className="fixed top-0 right-0 h-full z-50 flex flex-col px-6 py-8"
            style={{ 
              width: "75vw",
              backgroundColor: "var(--nav-bg)",
              boxShadow: "-10px 0 25px rgba(0,0,0,0.25)"
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            {/* Close X */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 left-4 text-2xl font-bold hover:text-amber-600"
            >
              ✕
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-16">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <NavLink
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-lg font-medium active:text-amber-600"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </NavLink>
              ))}
            </div>

            {/* Theme switch */}
            <div className="mt-auto pt-6">
              <Theme />
            </div>
          </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      <div className="">
        <Outlet/>
      </div>
    </div>
  );
}

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

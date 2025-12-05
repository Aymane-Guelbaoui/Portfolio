import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from "react-router-dom";

import { Home as HomeIcon } from 'lucide-react';
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Contact';
import About from '../../Pages/About';
import Theme from '../Theme/Theme';

import LogoLight from "/Images/logo1.png"; 
import LogoDark from "/Images/logo2.png";

function Layout() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [theme, setTheme] = useState(
    document.body.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
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
    <div className="flex flex-col w-full ">
      <nav className="w-full relative" style={{ boxShadow: "var(--nav-shadow)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">

          <NavLink to="/" className="w-12">
            <img
              src={theme === "dark" ? LogoDark : LogoLight}
              alt="Logo"
              className="w-12 h-auto transition-all duration-300"style={{paddingLeft:"15px"}}
            />
          </NavLink>

          <div className="hidden md:flex gap-8 justify-center flex-1 md:py-4 py-4">
            <NavLink to="/" className="hover:text-gray-300 text-base">Home</NavLink>
            <NavLink to="/about" className="hover:text-gray-300 text-base">About</NavLink>
            <NavLink to="/contact" className="hover:text-gray-300 text-base">Contact</NavLink>
          </div>

          <div className="hidden md:block ">
            <Theme />
          </div>

          <button 
            className="md:hidden z-50 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

    
        {isMobile && open && (
            <div 
              className="flex flex-col gap-1 px-4 py-4 absolute top-full left-0 right-0 z-40"
              style={{ 
                backgroundColor: "var(--nav-bg)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <NavLink to="/" className="hover:text-gray-300 text-m py-2" onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/about" className="hover:text-gray-300 text-m py-2" onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/contact" className="hover:text-gray-300 text-m py-2" onClick={() => setOpen(false)}>Contact</NavLink>
              <div className="pt-2">
                <Theme />
              </div>
            </div>
          )}
      </nav>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default function NavBar() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

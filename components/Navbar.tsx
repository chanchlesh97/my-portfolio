"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          &lt;Dev /&gt;
        </Link>

        <div className="nav-links">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? "active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </div>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

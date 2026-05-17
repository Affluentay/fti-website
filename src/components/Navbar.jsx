import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" }
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "#2C3E50" : "rgba(44,62,80,0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: scrolled ? "2px solid #18BC9C" : "none",
      padding: "0 40px", height: 70,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <img src="/images/17c78463-0a35-4e4c-b5b8-63389157f295.png" alt="FTI Logo" style={{ height: 120, width: 100, }} />

      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {links.map((link) => (
          <Link key={link.path} to={link.path} style={{
            textDecoration: "none", color: pathname === link.path ? "#18BC9C" : "rgba(255,255,255,0.85)",
            fontSize: 13, fontWeight: 600, padding: "6px 14px", borderRadius: 8,
            background: pathname === link.path ? "rgba(24,188,156,0.15)" : "transparent",
            borderBottom: pathname === link.path ? "2px solid #18BC9C" : "2px solid transparent",
            transition: "all 0.2s",
          }}>
            {link.name}
        
          </Link>
        ))}
        <Link to="/donate" style={{
          textDecoration: "none", background: "#18BC9C", color: "#fff",
          padding: "9px 22px", borderRadius: 25, fontSize: 13, fontWeight: 700,
          marginLeft: 12, transition: "all 0.3s",
          boxShadow: "0 4px 15px rgba(24,188,156,0.4)",
        }}>
          Donate 
        </Link>
      </div>
    </nav>
  );
}
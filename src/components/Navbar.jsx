import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "Blog", path: "/blog" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Contact", path: "/contact" },
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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "#2C3E50" : "rgba(44,62,80,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled ? "2px solid #18BC9C" : "none",
        padding: "0 24px", height: 65,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.3s ease",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/images/17c78463-0a35-4e4c-b5b8-63389157f295.png" alt="FTI Logo"
            style={{ height: 40, width: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid #18BC9C" }} />
          <div>
            <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 14, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>First Thought</div>
            <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 11, fontWeight: 600, color: "#18BC9C", lineHeight: 1.1 }}>Initiative</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {links.map((link) => (
            <Link key={link.path} to={link.path} style={{
              textDecoration: "none",
              color: pathname === link.path ? "#18BC9C" : "rgba(255,255,255,0.85)",
              fontSize: 13, fontWeight: 600, padding: "6px 12px", borderRadius: 8,
              background: pathname === link.path ? "rgba(24,188,156,0.15)" : "transparent",
              borderBottom: pathname === link.path ? "2px solid #18BC9C" : "2px solid transparent",
              transition: "all 0.2s",
            }}>{link.name}</Link>
          ))}
          <Link to="/donate" style={{
            textDecoration: "none", background: "#18BC9C", color: "#fff",
            padding: "9px 20px", borderRadius: 25, fontSize: 13, fontWeight: 700,
            marginLeft: 8, boxShadow: "0 4px 15px rgba(24,188,156,0.4)",
          }}>Donate 🧡</Link>
        </div>

        {/* Hamburger button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          display: "none", flexDirection: "column", gap: 5,
          background: "none", border: "none", cursor: "pointer", padding: 8,
        }}>
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 65, left: 0, right: 0, zIndex: 999,
          background: "#2C3E50", padding: "20px 24px",
          display: "flex", flexDirection: "column", gap: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}>
          {links.map((link) => (
            <Link key={link.path} to={link.path} style={{
              textDecoration: "none",
              color: pathname === link.path ? "#18BC9C" : "rgba(255,255,255,0.85)",
              fontSize: 15, fontWeight: 600, padding: "12px 16px", borderRadius: 10,
              background: pathname === link.path ? "rgba(24,188,156,0.15)" : "transparent",
            }}>{link.name}</Link>
          ))}
          <Link to="/donate" style={{
            textDecoration: "none", background: "#18BC9C", color: "#fff",
            padding: "12px 20px", borderRadius: 25, fontSize: 15, fontWeight: 700,
            marginTop: 8, textAlign: "center",
          }}>Donate 🧡</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
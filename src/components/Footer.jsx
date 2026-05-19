import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#2C3E50", color: "#fff", paddingTop: 60 }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 40px 40px",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40,
      }}>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <img src="/images/17c78463-0a35-4e4c-b5b8-63389157f295.png" alt="FTI Logo"
    style={{ height: 120, width: "70", }} /> 
            <div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
            A non-governmental organization dedicated to supporting underprivileged children, teenagers, and youths in Benin City, Nigeria.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
  {[
  { name: "Facebook", href: "#", color: "#1877f2", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { name: "Instagram", href: "https://www.instagram.com/firstthoughtinitiative", color: "#e4405f", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg> },
  { name: "X (Twitter)", href: "#", color: "#000", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.956l4.266 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "WhatsApp", href: "https://wa.me/2349075075070", color: "#25d366", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
].map(s => (
  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" style={{
    width: 36, height: 36, borderRadius: 10,
    background: s.color,
    display: "flex", alignItems: "center", justifyContent: "center",
    textDecoration: "none",
  }} title={s.name}>{s.svg}</a>
))}
</div>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 16, borderBottom: "2px solid #18BC9C", paddingBottom: 8 }}>Quick Links</h4>
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Programs", path: "/programs" },
            { name: "Our Impact", path: "/impact" },
            { name: "Volunteer", path: "/volunteer" },
            { name: "Contact", path: "/contact" },
          ].map(link => (
            <Link key={link.path} to={link.path} style={{
              display: "block", color: "rgba(255,255,255,0.6)",
              fontSize: 13, marginBottom: 8, transition: "color 0.2s",
            }}>{link.name}</Link>
          ))}
        </div>

        <div>
          <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 16, borderBottom: "2px solid #18BC9C", paddingBottom: 8 }}>Get Involved</h4>
          {[
            { name: "Make a Donation", path: "/donate" },
            { name: "Become a Volunteer", path: "/volunteer" },
            { name: "Partner With Us", path: "/contact" },
            { name: "Our Programs", path: "/programs" },
          ].map(link => (
            <Link key={link.path} to={link.path} style={{
              display: "block", color: "rgba(255,255,255,0.6)",
              fontSize: 13, marginBottom: 8,
            }}>{link.name}</Link>
          ))}
        </div>

        <div>
          <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 16, borderBottom: "2px solid #18BC9C", paddingBottom: 8 }}>Contact Us</h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>📧 info@firstthoughtinitiative.org</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>📍 Benin City, Edo State, Nigeria</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>🕐 Mon - Fri: 9am - 5pm</p>
          <Link to="/donate" style={{
            display: "inline-block", background: "#18BC9C", color: "#fff",
            padding: "10px 24px", borderRadius: 25, fontSize: 13,
            fontWeight: 700, boxShadow: "0 4px 15px rgba(24,188,156,0.4)",
          }}>Donate Now 🧡</Link>
        </div>

      </div>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "20px 40px",
        display: "flex", justifyContent: "space-between",
        fontSize: 12, color: "rgba(255,255,255,0.4)",
      }}>
        <p>© 2025 First Thought Initiative. All rights reserved.</p>
        <p style={{ color: "#18BC9C" }}>Founded with love in Benin City </p>
      </div>
    </footer>
  );
}
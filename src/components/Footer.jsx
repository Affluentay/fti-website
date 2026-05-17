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
              style={{ height: 50, width: 50, borderRadius: "50%", objectFit: "cover", border: "2px solid #18BC9C" }} />
            <div>
              <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 18, fontWeight: 800, color: "#fff" }}>First Thought Initiative</div>
              <div style={{ fontSize: 12, color: "#18BC9C" }}>Dressing hearts, sharing hope…</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 20 }}>
            A non-governmental organization dedicated to supporting underprivileged children, teenagers, and youths in Benin City, Nigeria.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {["Facebook", "Instagram", "Twitter"].map(s => (
              <a key={s} href="#" style={{
                padding: "6px 14px", borderRadius: 20,
                border: "1px solid rgba(24,188,156,0.4)",
                color: "#18BC9C", fontSize: 12, fontWeight: 600,
              }}>{s}</a>
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
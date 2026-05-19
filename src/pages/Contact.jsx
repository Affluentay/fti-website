import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    try {
      await emailjs.send(
        "service_34p0rro",
        "template_pm2wdpu",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "33mkqMOStbsw5KdNr"
      );
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div style={{ paddingTop: 70 }}>

      {/* PAGE HERO */}
      <section style={{
        background: "linear-gradient(135deg, #2C3E50 0%, #1a252f 100%)",
        padding: "80px 40px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(24,188,156,0.08) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(24,188,156,0.15)", border: "1px solid rgba(24,188,156,0.4)",
            color: "#18BC9C", padding: "6px 18px", borderRadius: 25,
            fontSize: 13, fontWeight: 600, marginBottom: 20,
          }}>Get In Touch</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>Contact Us</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            Have a question, want to partner with us, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ padding: "100px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "start" }}>

          {/* LEFT - Contact Info */}
          <div className="scroll-reveal">
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 28, fontWeight: 800, color: "#2C3E50", marginBottom: 8 }}>
              Let's Talk
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 36 }}>
              Whether you want to donate, volunteer, partner with us, or just learn more about what we do — we're always happy to connect.
            </p>

            {[
              { icon: "📧", label: "Email", value: "info@firstthoughtinitiative.org", color: "#18BC9C" },
              { icon: "📍", label: "Location", value: "Benin City, Edo State, Nigeria", color: "#2C3E50" },
              { icon: "🕐", label: "Available", value: "Monday – Friday, 9am – 5pm", color: "#f39c12" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                marginBottom: 28, padding: 20,
                background: "#fff", borderRadius: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                borderLeft: `4px solid ${item.color}`,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${item.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: 12, color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{item.label}</p>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#2C3E50" }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2C3E50", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 16 }}>
                Follow Us
              </p>
              <div style={{ display: "flex", gap: 12 }}>
 {[
  { name: "Facebook", href: "#", color: "#1877f2", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { name: "Instagram", href: "https://www.instagram.com/firstthoughtinitiative", color: "#e4405f", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg> },
  { name: "X (Twitter)", href: "#", color: "#000", svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.956l4.266 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "WhatsApp", href: "https://wa.me/2349075075070", color: "#25d366", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
].map(s => (
  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" style={{
    width: 48, height: 48, borderRadius: 10,
    background: s.color,
    display: "flex", alignItems: "center", justifyContent: "center",
    textDecoration: "none",
  }} title={s.name}>{s.svg}</a>
))}
</div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="scroll-reveal">
            {submitted ? (
              <div style={{
                background: "#fff", borderRadius: 24, padding: 60,
                textAlign: "center", boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
              }}>
                <div style={{ fontSize: 60, marginBottom: 20 }}>🧡</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 28, fontWeight: 800, color: "#2C3E50", marginBottom: 12 }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                  Thank you <strong>{form.name}</strong> for reaching out. We'll get back to you at <strong>{form.email}</strong> as soon as possible. 🙏
                </p>
              </div>
            ) : (
              <div style={{
                background: "#fff", borderRadius: 24, padding: 48,
                boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
              }}>
                <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 24, fontWeight: 800, color: "#2C3E50", marginBottom: 6 }}>
                  Send a Message
                </h2>
                <p style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>We typically respond within 24 hours.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name" },
                    { label: "Email Address *", name: "email", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#2C3E50", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type} name={field.name} placeholder={field.placeholder}
                        value={form[field.name]} onChange={handleChange}
                        style={{
                          width: "100%", padding: "13px 16px", borderRadius: 12,
                          border: "2px solid #e0e0e0", fontSize: 14, color: "#2C3E50",
                          outline: "none", fontFamily: "Montserrat, sans-serif",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#2C3E50", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Subject
                  </label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    style={{
                      width: "100%", padding: "13px 16px", borderRadius: 12,
                      border: "2px solid #e0e0e0", fontSize: 14, color: "#2C3E50",
                      outline: "none", fontFamily: "Montserrat, sans-serif",
                      background: "#fff", cursor: "pointer",
                    }}>
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Donation Inquiry</option>
                    <option>Volunteer Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#2C3E50", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    Message *
                  </label>
                  <textarea name="message" placeholder="Write your message here..."
                    value={form.message} onChange={handleChange} rows={5}
                    style={{
                      width: "100%", padding: "13px 16px", borderRadius: 12,
                      border: "2px solid #e0e0e0", fontSize: 14, color: "#2C3E50",
                      outline: "none", fontFamily: "Montserrat, sans-serif",
                      resize: "vertical", lineHeight: 1.7,
                    }}
                  />
                </div>

                <button onClick={handleSubmit} style={{
                  width: "100%", padding: "15px", borderRadius: 30,
                  background: "linear-gradient(135deg, #18BC9C, #0fa880)",
                  color: "#fff", fontFamily: "Raleway, sans-serif",
                  fontSize: 16, fontWeight: 800, border: "none", cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(24,188,156,0.4)",
                  transition: "all 0.3s",
                }}>
                  Send Message 🧡
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PARTNER BANNER */}
      <section style={{
        padding: "80px 40px", textAlign: "center",
        background: "linear-gradient(135deg, #18BC9C, #0fa880)",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }} className="scroll-reveal">
          <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Partner With Us 🤝
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.9, marginBottom: 12 }}>
            Are you an organization, church, business, or individual looking to make a difference? Let's work together.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>
            Reach out to us at <strong style={{ color: "#fff" }}>info@firstthoughtinitiative.org</strong>
          </p>
        </div>
      </section>

    </div>
  );
}

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

export default function Volunteer() {
  useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xvzyzbdz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
    setLoading(false);
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
          }}>Join Us</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>Become a Volunteer</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            You don't need money to make a difference — sometimes all a child needs is your time, your presence, and your love.
          </p>
        </div>
      </section>

      {/* WHY VOLUNTEER */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Why Volunteer</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>
              Why Join Our Team?
            </h2>
            <p style={{ fontSize: 15, color: "#666", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              Volunteering with FTI is more than an activity — it's a calling.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "❤️", title: "Make Real Impact", desc: "You'll see the direct difference your presence makes in the life of a child — no middleman, no delay.", color: "#e74c3c" },
              { icon: "🌱", title: "Personal Growth", desc: "Volunteering builds empathy, leadership, and purpose. You'll grow as much as the children you serve.", color: "#18BC9C" },
              { icon: "👨‍👩‍👧‍👦", title: "Join a Family", desc: "FTI volunteers are a tight-knit community of passionate people. You'll find friendship and belonging here.", color: "#2C3E50" },
              { icon: "✝️", title: "Faith in Action", desc: "Put your faith to work. Serving these children is one of the most powerful expressions of God's love.", color: "#9b59b6" },
              { icon: "📸", title: "Create Memories", desc: "The moments you'll share with these children are ones you'll carry forever. It's an experience like no other.", color: "#f39c12" },
              { icon: "🎯", title: "Use Your Skills", desc: "Whether you're a photographer, teacher, musician or cook — there's a role for every skill at FTI.", color: "#27ae60" },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal" style={{
                background: "#f4f6f8", borderRadius: 20, padding: 32,
                borderLeft: `4px solid ${item.color}`,
                transition: "all 0.3s",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 20, fontWeight: 700, color: "#2C3E50", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER ROLES */}
      <section style={{ padding: "80px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Roles Available</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#2C3E50" }}>
              How You Can Help
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {[
              { icon: "🎭", title: "Outreach Volunteer", desc: "Join us at our outreaches — interact with children, distribute items, lead games and activities.", tag: "Most Needed" },
              { icon: "📸", title: "Photography & Media", desc: "Capture our moments of impact through photos and videos to share our story with the world.", tag: "Creative" },
              { icon: "📖", title: "Mentorship & Teaching", desc: "Lead motivational talks, tutoring sessions, or faith-based teachings for older children and teens.", tag: "Skills Based" },
              { icon: "🍳", title: "Food & Logistics", desc: "Help with meal preparation, packaging, and distribution during our outreach events.", tag: "Hands On" },
              { icon: "📱", title: "Social Media & PR", desc: "Help us grow our online presence, create content, and spread our mission to more people.", tag: "Digital" },
              { icon: "💼", title: "Fundraising & Partnerships", desc: "Help us identify donors, write proposals, and build partnerships that sustain our programs.", tag: "Strategic" },
            ].map((role, i) => (
              <div key={i} className="scroll-reveal" style={{
                background: "#fff", borderRadius: 20, padding: 28,
                display: "flex", gap: 20, alignItems: "flex-start",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "rgba(24,188,156,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, flexShrink: 0,
                }}>{role.icon}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 18, fontWeight: 700, color: "#2C3E50" }}>{role.title}</h3>
                    <span style={{
                      background: "rgba(24,188,156,0.1)", color: "#18BC9C",
                      padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                    }}>{role.tag}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGN UP FORM */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Sign Up</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#2C3E50" }}>
              Ready to Volunteer?
            </h2>
            <p style={{ fontSize: 15, color: "#666", marginTop: 12 }}>
              Fill the form below and we'll be in touch with next steps.
            </p>
          </div>

          {submitted ? (
            <div className="scroll-reveal" style={{
              background: "rgba(24,188,156,0.08)", border: "2px solid #18BC9C",
              borderRadius: 24, padding: 60, textAlign: "center",
            }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
              <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 28, fontWeight: 800, color: "#2C3E50", marginBottom: 12 }}>
                Thank You, {form.name}!
              </h3>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                We've received your volunteer application. A member of our team will reach out to you at <strong>{form.email}</strong> shortly. Welcome to the FTI family! 🧡
              </p>
            </div>
          ) : (
            <div className="scroll-reveal" style={{
              background: "#fff", borderRadius: 24, padding: 48,
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
            }}>
              {[
                { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name" },
                { label: "Email Address *", name: "email", type: "email", placeholder: "your@email.com" },
                { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+234 000 000 0000" },
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2C3E50", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type} name={field.name} placeholder={field.placeholder}
                    value={form[field.name]} onChange={handleChange}
                    style={{
                      width: "100%", padding: "14px 16px", borderRadius: 12,
                      border: "2px solid #e0e0e0", fontSize: 15, color: "#2C3E50",
                      outline: "none", fontFamily: "Montserrat, sans-serif",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2C3E50", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Preferred Role
                </label>
                <select name="role" value={form.role} onChange={handleChange}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: 12,
                    border: "2px solid #e0e0e0", fontSize: 15, color: "#2C3E50",
                    outline: "none", fontFamily: "Montserrat, sans-serif",
                    background: "#fff", cursor: "pointer",
                  }}>
                  <option value="">Select a role</option>
                  <option>Outreach Volunteer</option>
                  <option>Photography & Media</option>
                  <option>Mentorship & Teaching</option>
                  <option>Food & Logistics</option>
                  <option>Social Media & PR</option>
                  <option>Fundraising & Partnerships</option>
                  <option>Open to Any Role</option>
                </select>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2C3E50", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  Why do you want to volunteer?
                </label>
                <textarea name="message" placeholder="Tell us a little about yourself and why you'd like to join FTI..."
                  value={form.message} onChange={handleChange} rows={4}
                  style={{
                    width: "100%", padding: "14px 16px", borderRadius: 12,
                    border: "2px solid #e0e0e0", fontSize: 15, color: "#2C3E50",
                    outline: "none", fontFamily: "Montserrat, sans-serif",
                    resize: "vertical", lineHeight: 1.7,
                  }}
                />
              </div>

             <button onClick={handleSubmit} disabled={loading} style={{
  width: "100%", padding: "15px", borderRadius: 30,
  background: loading ? "#aaa" : "linear-gradient(135deg, #18BC9C, #0fa880)",
  color: "#fff", fontFamily: "Raleway, sans-serif",
  fontSize: 16, fontWeight: 800, border: "none",
  cursor: loading ? "not-allowed" : "pointer",
  boxShadow: "0 8px 25px rgba(24,188,156,0.4)",
}}>
  {loading ? "Submitting... " : "submit application 🧡"}
</button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

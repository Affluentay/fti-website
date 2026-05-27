import { useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function About() {
  useScrollReveal();

  return (
    <div style={{ paddingTop: 70 }}>

      {/* PAGE HERO */}
      <section style={{
        background: "linear-gradient(135deg, #2C3E50 0%, #1a252f 100%)",
        padding: "80px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
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
            fontSize: 13, fontWeight: 600, marginBottom: 20, letterSpacing: 1,
          }}>Our Story</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>About First Thought Initiative</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            A movement of love, hope, and compassion — born in Benin City, growing across Nigeria.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center",
        }}>
          <div className="scroll-reveal">
            <img
              src="/images/crolax.png"
              alt="FTI Outreach"
              style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
            />
          </div>
          <div className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", marginBottom: 16,
            }}>Who We Are</span>
            <h2 style={{
              fontFamily: "Raleway, sans-serif", fontSize: 38,
              fontWeight: 800, color: "#2C3E50", lineHeight: 1.2, marginBottom: 20,
            }}>
              Born From a Heart<br />
              <span style={{ color: "#18BC9C" }}>of Compassion</span>
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              First Thought Initiative (FTI) was founded in 2023 in Benin City, Edo State, Nigeria by Iwinosa Favour Omobude. It was born from a deep desire to reflect God's love to the most vulnerable — orphaned children, teenagers, and underprivileged youth.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              We believe that every child deserves to feel loved, valued, and seen — regardless of their circumstances. Our work goes beyond giving items; we invest in emotional wellbeing, spiritual care, and personal empowerment.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9 }}>
              From our first outreach in 2023 where we reached 38 children, to our 2024 outreach touching 67 lives — FTI is growing, and we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ padding: "80px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>What Drives Us</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>
              Our Mission & Vision
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* Mission */}
            <div className="scroll-reveal" style={{
              background: "#2C3E50", borderRadius: 24, padding: 48,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 120, height: 120, borderRadius: "50%",
                background: "rgba(24,188,156,0.1)",
              }} />
              <div style={{ fontSize: 48, marginBottom: 20 }}>🎯</div>
              <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 26, fontWeight: 800, color: "#18BC9C", marginBottom: 16 }}>Our Mission</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.9 }}>
                To reflect God's love by nurturing, empowering, and restoring hope to underprivileged children, teenagers, and youth through compassionate outreach and faith-driven mentorship.
              </p>
            </div>

            {/* Vision */}
            <div className="scroll-reveal" style={{
              background: "#18BC9C", borderRadius: 24, padding: 48,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 120, height: 120, borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
              }} />
              <div style={{ fontSize: 48, marginBottom: 20 }}>🌟</div>
              <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Our Vision</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.9 }}>
                A Nigeria where no child grows up feeling forgotten, unloved, or without hope — where every young person has access to the support, mentorship, and care they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>What We Stand For</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>Our Core Values</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              { icon: "🧡", title: "Compassion", desc: "We lead with love in everything we do — treating every child with dignity, warmth, and genuine care." },
              { icon: "✝️", title: "Faith", desc: "Our work is rooted in the belief that every life has divine purpose and infinite worth before God." },
              { icon: "🤝", title: "Community", desc: "We believe lasting change happens when communities come together to lift those who cannot lift themselves." },
              { icon: "💪", title: "Empowerment", desc: "We don't just give — we equip. Every interaction is designed to build capacity and confidence in young lives." },
              { icon: "🌱", title: "Hope", desc: "No matter the circumstances, we carry a message of hope — that a better future is always possible." },
              { icon: "🎯", title: "Excellence", desc: "We are committed to doing everything with intentionality, quality, and a heart of service." },
            ].map((val, i) => (
              <div key={i} className="scroll-reveal" style={{
                background: "#f4f6f8", borderRadius: 20, padding: 32,
                borderLeft: "4px solid #18BC9C",
                transition: "all 0.3s",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{val.icon}</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 20, fontWeight: 700, color: "#2C3E50", marginBottom: 10 }}>{val.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding: "100px 40px", background: "#f4f6f8" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "center",
        }}>
          <div className="scroll-reveal" style={{ textAlign: "center" }}>
            <div style={{
              width: 220, height: 220, borderRadius: "50%",
              overflow: "hidden", margin: "0 auto 20px",
              border: "5px solid #18BC9C",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}>
              <img
                src="/images/founder.jpeg"
                alt="Founder"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#2C3E50" }}>
              Iwinosa Favour Omobude
            </h3>
            <p style={{ color: "#18BC9C", fontWeight: 600, fontSize: 14, marginTop: 4 }}>Founder & Executive Director</p>
          </div>

          <div className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", marginBottom: 16,
            }}>Founder's Note</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 34, fontWeight: 800, color: "#2C3E50", marginBottom: 24, lineHeight: 1.3 }}>
              "Every child deserves to know they are loved."
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              When I started First Thought Initiative, I had one simple conviction — that the first thought in the heart of every child should be that they are loved, valued, and not alone in this world.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              Growing up, I witnessed children around me who had no one to celebrate them, no one to invest in their dreams. That broke my heart — and it became my calling.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9 }}>
              FTI is not just an organization. It is a promise — that as long as we exist, no child within our reach will feel forgotten.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Our Journey</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>How We Got Here</h2>
          </div>

          {[
            { year: "2023", title: "FTI is Founded", desc: "First Thought Initiative is established in Benin City by Iwinosa Favour Omobude with a vision to serve underprivileged children." },
            { year: "2023", title: "First Outreach", desc: "Our first Christmas outreach successfully reaches 38 children at a local orphanage — providing clothing, food, and spiritual care." },
            { year: "2024", title: "Growing Impact", desc: "Our 2024 outreaches reach 67 children across multiple programs including Easter, Children's Day, and our Beyond Limits Summer Camp." },
            { year: "2025+", title: "The Future", desc: "We are expanding our reach, building partnerships, and working towards a permanent support centre for underprivileged children in Benin City." },
          ].map((item, i) => (
            <div key={i} className="scroll-reveal" style={{
              display: "flex", gap: 24, marginBottom: 40,
              paddingBottom: 40,
              borderBottom: i < 3 ? "1px solid #eee" : "none",
            }}>
              <div style={{
                minWidth: 80, height: 80, borderRadius: "50%",
                background: i % 2 === 0 ? "#2C3E50" : "#18BC9C",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "Raleway, sans-serif", fontSize: 13, fontWeight: 800,
                color: "#fff", flexShrink: 0,
              }}>{item.year}</div>
              <div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 20, fontWeight: 700, color: "#2C3E50", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* TEAM SECTION */}
      <section style={{ padding: "100px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Our People</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>
              Meet the Team
            </h2>
            <p style={{ fontSize: 15, color: "#666", marginTop: 12 }}>
              The hearts behind First Thought Initiative.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {[
              { img: "/images/founder.jpeg", name: "Iwinosa Omobude", role: "Founder & Executive Director", pos: "center 40%" },
{ img: "/images/Flourish.jpeg", name: "Flourish Omobude", role: "Communications & Social Media Manager", pos: "center 40%" },
{ img: "/images/ayomide.png", name: "Ayomide Lawal", role: "Creative Design, Branding & Web Developer", pos: "center 10%" },
{ img: "/images/benjamin.jpeg", name: "Benjamin Ibeh", role: "Prayer & Team Care Coordinator", pos: "center 10%" },
            ].map((member, i) => (
              <div key={i} className="scroll-reveal" style={{
  background: "#fff", borderRadius: 20,
  padding: "32px 20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
  textAlign: "center",
}}>
  <div style={{
    width: 140, height: 140, borderRadius: "50%",
    overflow: "hidden", margin: "0 auto 16px",
    border: "4px solid #18BC9C",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  }}>
    <img src={member.img} alt={member.name}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.pos }} />
  </div>
  <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 17, fontWeight: 800, color: "#2C3E50", marginBottom: 6 }}>
    {member.name}
  </h3>
  <p style={{ fontSize: 13, color: "#18BC9C", fontWeight: 600, lineHeight: 1.5 }}>{member.role}</p>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 40px", textAlign: "center",
        background: "linear-gradient(135deg, #2C3E50, #1a252f)",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }} className="scroll-reveal">
          <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Join Our Movement 🧡
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 36 }}>
            Whether you donate, volunteer, or simply share our story — you are part of giving a child hope.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/donate" style={{
              padding: "14px 36px", borderRadius: 30, background: "#18BC9C",
              color: "#fff", fontWeight: 700, fontSize: 15, display: "inline-block",
              boxShadow: "0 8px 25px rgba(24,188,156,0.4)",
            }}>Donate Now</Link>
            <Link to="/volunteer" style={{
              padding: "14px 36px", borderRadius: 30,
              background: "transparent", color: "#fff",
              fontWeight: 600, fontSize: 15, display: "inline-block",
              border: "2px solid rgba(255,255,255,0.3)",
            }}>Volunteer With Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
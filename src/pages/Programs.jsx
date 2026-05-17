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

export default function Programs() {
  useScrollReveal();

  const programs = [
    {
      icon: "🎄",
      title: "Christmas Outreach",
      color: "#e74c3c",
      light: "#fdf2f2",
      img: "/images/Untitled design.png",
      desc: "Every December, we visit orphanages and homes for underprivileged children in Benin City to celebrate Christmas with them. We provide new clothing, food, gifts, and most importantly — love and spiritual care.",
      what: [
        "Distribution of new clothes and shoes",
        "Christmas meals and refreshments",
        "Prayers and worship sessions",
        "Games, music and celebrations",
        "Personal one-on-one time with each child",
      ],
      impact: "38 children reached in our first Christmas outreach (2023)",
    },
    {
      icon: "🐣",
      title: "Easter Outreach",
      color: "#18BC9C",
      light: "#f0fdf9",
      img: "/images/crolax.png",
      desc: "Easter is a season of resurrection and hope. We celebrate with children who need that message of hope the most — reminding them that just as Christ rose, they too can rise above their circumstances.",
      what: [
        "Easter gifts and hampers",
        "Storytelling and faith teachings",
        "Fun activities and games",
        "Meals and refreshments",
        "Encouragement and mentorship talks",
      ],
      impact: "Part of our 67 children reached across all 2024 programs",
    },
    {
      icon: "🎈",
      title: "Children's Day Outreach",
      color: "#f39c12",
      light: "#fffbf0",
      img: "/images/Untitled design (2).png",
      desc: "On Children's Day (May 27th), we dedicate an entire day to celebrating every child's worth, dignity, and God-given potential. It's a day of pure joy, laughter, and affirmation for children who rarely get celebrated.",
      what: [
        "Special celebration and performances",
        "Gifts and souvenirs",
        "Motivational talks for teenagers",
        "Fun games and competitions",
        "Food, snacks and refreshments",
      ],
      impact: "Growing yearly as one of our most impactful programs",
    },
  ];

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
          }}>What We Do</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>Our Programs</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            Every program we run is designed with one goal — to make every child feel loved, seen, and valued.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      {programs.map((program, i) => (
        <section key={i} style={{
          padding: "100px 40px",
          background: i % 2 === 0 ? "#fff" : "#f4f6f8",
        }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80, alignItems: "center",
            direction: i % 2 === 0 ? "ltr" : "rtl",
          }}>
            {/* Image */}
            <div className="scroll-reveal" style={{ direction: "ltr" }}>
              <div style={{ position: "relative" }}>
                <img src={program.img} alt={program.title}
                  style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }} />
                <div style={{
                  position: "absolute", top: 24, left: 24,
                  background: program.color, color: "#fff",
                  padding: "8px 20px", borderRadius: 25,
                  fontSize: 13, fontWeight: 700,
                }}>{program.icon} {program.title}</div>
              </div>
            </div>

            {/* Content */}
            <div className="scroll-reveal" style={{ direction: "ltr" }}>
              <span style={{
                display: "inline-block", background: `${program.color}20`,
                color: program.color, padding: "6px 16px", borderRadius: 20,
                fontSize: 12, fontWeight: 700, letterSpacing: 1,
                textTransform: "uppercase", marginBottom: 16,
              }}>Program</span>
              <h2 style={{
                fontFamily: "Raleway, sans-serif", fontSize: 36,
                fontWeight: 800, color: "#2C3E50", lineHeight: 1.2, marginBottom: 20,
              }}>{program.title}</h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 28 }}>
                {program.desc}
              </p>

              <h4 style={{ fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 700, color: "#2C3E50", marginBottom: 16 }}>
                What we do:
              </h4>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
                {program.what.map((item, j) => (
                  <li key={j} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    marginBottom: 10, fontSize: 14, color: "#555",
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: program.color, color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 2,
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{
                background: program.light, border: `1px solid ${program.color}30`,
                borderLeft: `4px solid ${program.color}`,
                borderRadius: 12, padding: "16px 20px",
                fontSize: 14, color: "#555", lineHeight: 1.7,
              }}>
                📊 <strong>Impact:</strong> {program.impact}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* UPCOMING */}
      <section style={{ padding: "80px 40px", background: "#2C3E50" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.15)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Coming Soon</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#fff" }}>
              Upcoming Program
            </h2>
          </div>

          <div className="scroll-reveal" style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(24,188,156,0.3)",
            borderRadius: 24, padding: 48,
            display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "center",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 80, marginBottom: 16 }}>⛺</div>
              <div style={{
                background: "#18BC9C", color: "#fff",
                padding: "8px 20px", borderRadius: 25,
                fontSize: 13, fontWeight: 700, display: "inline-block",
              }}>Coming Soon</div>
            </div>
            <div>
              <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 28, fontWeight: 800, color: "#18BC9C", marginBottom: 16 }}>
                Beyond Limits Summer Camp
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 20 }}>
                A transformational summer empowerment camp designed for teenagers and youth — equipping them with life skills, mentorship, faith-based teaching, and the confidence to rise above their circumstances.
              </p>
              <p style={{ fontSize: 14, color: "#18BC9C", fontWeight: 600 }}>
                Stay tuned for dates and registration details!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 40px", textAlign: "center",
        background: "linear-gradient(135deg, #18BC9C, #0fa880)",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }} className="scroll-reveal">
          <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            Support Our Programs 🧡
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.9, marginBottom: 36 }}>
            Your donation helps us run these programs and reach more children every year.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/donate" style={{
              padding: "14px 36px", borderRadius: 30, background: "#fff",
              color: "#18BC9C", fontWeight: 800, fontSize: 15, display: "inline-block",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}>Donate Now</Link>
            <Link to="/volunteer" style={{
              padding: "14px 36px", borderRadius: 30,
              background: "transparent", color: "#fff",
              fontWeight: 600, fontSize: 15, display: "inline-block",
              border: "2px solid rgba(255,255,255,0.5)",
            }}>Volunteer</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

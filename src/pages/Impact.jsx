import { useEffect, useRef, useState } from "react";
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

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 80);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Impact() {
  useScrollReveal();

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
          }}>Our Impact</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>Lives We Have Touched</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            Every number represents a child who felt loved, a life that was touched, a hope that was restored.
          </p>
        </div>
      </section>

      {/* BIG STATS */}
      <section style={{ background: "#18BC9C", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {[
            { number: 105, suffix: "+", label: "Total Children Reached", icon: "👧" },
            { number: 2, suffix: "+", label: "Years of Service", icon: "📅" },
            { number: 3, suffix: "", label: "Active Programs", icon: "🎯" },
            { number: 1, suffix: "", label: "City Reached", icon: "📍" },
          ].map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 16, padding: "32px 20px", textAlign: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{stat.icon}</div>
              <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 52, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 10, fontWeight: 600 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YEAR BY YEAR */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Year by Year</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>
              Our Growing Impact
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* 2023 */}
            <div className="scroll-reveal" style={{
              background: "#f4f6f8", borderRadius: 24, padding: 40,
              borderTop: "4px solid #2C3E50",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: "#2C3E50", display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 800, color: "#fff",
                }}>2023</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 24, fontWeight: 800, color: "#2C3E50" }}>
                  Our First Year
                </h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  { num: 38, label: "Children Reached" },
                  { num: 1, label: "Outreach Program" },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "#fff", borderRadius: 12, padding: 20, textAlign: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  }}>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#2C3E50" }}>
                      <Counter target={s.num} />
                    </div>
                    <p style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>
                Our inaugural Christmas outreach reached 38 children at a local orphanage in Benin City — providing clothing, food, prayers, and heartfelt care to each child.
              </p>
            </div>

            {/* 2024 */}
            <div className="scroll-reveal" style={{
              background: "#f4f6f8", borderRadius: 24, padding: 40,
              borderTop: "4px solid #18BC9C",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: "#18BC9C", display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 800, color: "#fff",
                }}>2024</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 24, fontWeight: 800, color: "#2C3E50" }}>
                  Expanding Our Reach
                </h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[
                  { num: 67, label: "Children Reached" },
                  { num: 3, label: "Programs Run" },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "#fff", borderRadius: 12, padding: 20, textAlign: "center",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  }}>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#18BC9C" }}>
                      <Counter target={s.num} />
                    </div>
                    <p style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>
                In 2024 we expanded to 3 programs — Easter Outreach, Children's Day, and Christmas — reaching 67 children and growing our volunteer base significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IMPACT LOOKS LIKE */}
      <section style={{ padding: "100px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>What We Provide</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>
              What Your Support Does
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "👗", title: "Clothing", desc: "We provide brand new clothes and shoes to children who often have very little to wear.", color: "#e74c3c" },
              { icon: "🍱", title: "Food & Meals", desc: "Hot meals and refreshments are shared during every outreach — many children look forward to this most.", color: "#f39c12" },
              { icon: "📖", title: "Spiritual Care", desc: "We pray with children, share the Word, and remind them that God loves them deeply.", color: "#9b59b6" },
              { icon: "🎭", title: "Fun & Joy", desc: "Games, music, performances and celebrations — because every child deserves to laugh and play.", color: "#18BC9C" },
              { icon: "💬", title: "Mentorship", desc: "One-on-one time, motivational talks, and encouragement from our volunteers and leaders.", color: "#2C3E50" },
              { icon: "🌱", title: "Hope", desc: "Beyond material things, we plant seeds of hope — reminding each child their life has purpose.", color: "#27ae60" },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal" style={{
                background: "#fff", borderRadius: 20, padding: 32,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                borderBottom: `4px solid ${item.color}`,
                transition: "all 0.3s",
              }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: `${item.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, marginBottom: 20,
                }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 20, fontWeight: 700, color: "#2C3E50", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Gallery</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 38, fontWeight: 800, color: "#2C3E50" }}>
              Moments of Impact
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "250px 250px", gap: 12 }}>
            <div style={{ gridRow: "1 / 3", borderRadius: 20, overflow: "hidden" }}>
              <img src="/images/crolax.png" alt="FTI Outreach"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="/images/Untitled design.png" alt="FTI Outreach"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="/images/Untitled design (2).png" alt="FTI Outreach"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80" alt="Children"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80" alt="Children"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
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
            Help Us Reach More Children 🧡
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 36 }}>
            With your support we can double our impact — reaching more children, running more programs, and changing more lives.
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
            }}>Volunteer</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

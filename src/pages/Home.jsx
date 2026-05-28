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

function HexGrid() {
  const imgs = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=300&q=80",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=300&q=80",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=300&q=80",
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=300&q=80",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=300&q=80",
  ];

  const S = 100;
  const W = S;
  const H = S * 1.15;
  const colGap = W * 1.06;
  const rowGap = H * 0.76;

  const positions = [
    { col: 0.5, row: 0 }, { col: 1.5, row: 0 }, { col: 2.5, row: 0 },
    { col: 0, row: 1 }, { col: 1, row: 1 }, { col: 2, row: 1 },
    { col: 0.5, row: 2 }, { col: 1.5, row: 2 }, { col: 2.5, row: 2 },

  ];

  return (
    <div style={{ position: "relative", width: 420, height: 420, flexShrink: 0 }}>
      {positions.map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          left: pos.col * colGap,
          top: pos.row * rowGap,
          width: W, height: H,
          overflow: "hidden",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          border: "2px solid rgba(24,188,156,0.7)",
        }}>
          <img src={imgs[i % imgs.length]} alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  const programs = [
    {
      title: "Christmas Outreach",
      desc: "Bringing joy, new clothing and spiritual care to orphanage children every Christmas season.",
      color: "#e74c3c",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80",
    },
    {
      title: "Easter Outreach",
      desc: "Celebrating resurrection with children who need hope and love the most.",
      color: "#18BC9C",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    },
    {
      title: "Children's Day",
      desc: "A full day dedicated to celebrating every child's worth, dignity and God-given potential.",
      color: "#f39c12",
      img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=400&q=80",
    },
  ];

  return (
    <div style={{ paddingTop: 70 }}>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2C3E50 0%, #1a252f 60%, #0d1b2a 100%)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
        padding: "80px 80px", gap: 40, flexWrap: "nowrap",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(24,188,156,0.08) 0%, transparent 50%)",
        }} />

        <div style={{ maxWidth: 520, position: "relative", zIndex: 2, animation: "fadeUp 0.8s ease forwards" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(24,188,156,0.15)", border: "1px solid rgba(24,188,156,0.4)",
            color: "#18BC9C", padding: "8px 18px", borderRadius: 25,
            fontSize: 13, fontWeight: 600, marginBottom: 28,
          }}>
            🌟 First Thought Initiative — Benin City, Nigeria
          </div>

          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(38px, 5vw, 64px)",
            fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
          }}>
            Dressing Hearts,<br />
            <span style={{ color: "#18BC9C" }}>Sharing Hope</span>
          </h1>

          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.65)",
            lineHeight: 1.9, marginBottom: 40, maxWidth: 460,
          }}>
            We exist to give every underprivileged child the love, care, and attention they deserve — restoring dignity and hope, one life at a time.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/donate" style={{
              padding: "14px 36px", borderRadius: 30, background: "#18BC9C",
              color: "#fff", fontWeight: 700, fontSize: 15, display: "inline-block",
              boxShadow: "0 8px 25px rgba(24,188,156,0.4)",
            }}>Donate Now </Link>
            <Link to="/about" style={{
              padding: "14px 36px", borderRadius: 30, background: "transparent",
              color: "#fff", fontWeight: 600, fontSize: 15, display: "inline-block",
              border: "2px solid rgba(255,255,255,0.25)",
            }}>Our Story →</Link>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
          <HexGrid />
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: "#18BC9C", padding: "50px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {[
            { number: 105, suffix: "+", label: "Children Reached",  },
            { number: 2, suffix: "+", label: "Years of Impact",  },
            { number: 3, suffix: "", label: "Active Programs", },
            { number: 67, suffix: "+", label: "Children in 2024", },
          ].map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
              borderRadius: 16, padding: "28px 20px", textAlign: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
              <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 46, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginTop: 8, fontWeight: 600 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="scroll-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <img src="/images/Untitled design.png" alt="FTI Outreach"
              style={{ width: "100%", height: 230, objectFit: "cover", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
            <img src="/images/crolax.png" alt="FTI Outreach"
              style={{ width: "100%", height: 230, objectFit: "cover", borderRadius: 16,  boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
            <img src="/images/Untitled design (2).png" alt="Children"
              style={{ width: "100%", height: 230, objectFit: "cover", borderRadius: 16,  boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
            <div style={{
              background: "#2C3E50", borderRadius: 16, height: 230,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", padding: 20,
            }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>🧡</div>
              <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 18, fontWeight: 800, color: "#18BC9C", textAlign: "center" }}>Founded 2023</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", textAlign: "center", marginTop: 4 }}>Benin City, Nigeria</div>
            </div>
          </div>

          <div className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1,
              textTransform: "uppercase", marginBottom: 16,
            }}>Who We Are</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 40, fontWeight: 800, color: "#2C3E50", lineHeight: 1.2, marginBottom: 20 }}>
              More Than Charity —<br /><span style={{ color: "#18BC9C" }}>It's a Movement</span>
            </h2>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 16 }}>
              Founded in 2023 in Benin City, First Thought Initiative was born from a shared desire to fill the emotional and spiritual gap in the lives of orphaned and underprivileged children.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 32 }}>
              We go beyond material donations — we bring personalized attention, mentorship, prayers, and empowerment to every child we meet. Reflecting God's love to those who need it most.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/about" style={{ padding: "12px 28px", borderRadius: 25, background: "#2C3E50", color: "#fff", fontWeight: 700, fontSize: 14, display: "inline-block" }}>Our Full Story →</Link>
              <Link to="/programs" style={{ padding: "12px 28px", borderRadius: 25, background: "transparent", color: "#18BC9C", fontWeight: 700, fontSize: 14, display: "inline-block", border: "2px solid #18BC9C" }}>Our Programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section style={{ padding: "100px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }} className="scroll-reveal">
            <span style={{ display: "inline-block", background: "rgba(24,188,156,0.1)", color: "#18BC9C", padding: "6px 16px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>What We Do</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 40, fontWeight: 800, color: "#2C3E50" }}>Our Programs</h2>
            <p style={{ fontSize: 15, color: "#666", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>Every program is designed to touch hearts, restore hope and empower lives.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {programs.map((program, i) => (
              <div key={i} className="scroll-reveal" style={{
                background: "#fff", borderRadius: 20, overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)", transition: "all 0.3s",
              }}>
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img src={program.img} alt={program.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, left: 16, background: program.color, color: "#fff", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
                    Program
                  </div>
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 20, fontWeight: 700, color: "#2C3E50", marginBottom: 12 }}>{program.title}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{program.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/programs" style={{ padding: "14px 36px", borderRadius: 30, background: "transparent", color: "#2C3E50", fontWeight: 700, fontSize: 15, display: "inline-block", border: "2px solid #2C3E50" }}>View All Programs →</Link>
          </div>
        </div>
      </section>

      {/* DONATE BANNER */}
      <section style={{ padding: "100px 40px", background: "linear-gradient(135deg, #2C3E50, #1a252f)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(24,188,156,0.1) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }} className="scroll-reveal">
          <span style={{ display: "inline-block", background: "rgba(24,188,156,0.15)", color: "#18BC9C", padding: "6px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 20, letterSpacing: 1, textTransform: "uppercase" }}>Make a Difference</span>
          <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 46, fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>Every Naira Counts</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 16 }}>
            Your donation goes directly to providing clothing, food, mentorship, and spiritual care to children who need it most.
          </p>
          <p style={{ fontSize: 15, color: "#18BC9C", fontWeight: 600, marginBottom: 40 }}>No child should feel forgotten. 🧡</p>
          <Link to="/donate" style={{ padding: "16px 52px", borderRadius: 35, background: "#18BC9C", color: "#fff", fontWeight: 800, fontSize: 17, display: "inline-block", boxShadow: "0 10px 30px rgba(24,188,156,0.4)" }}>Donate Today 🧡</Link>
        </div>
      </section>

    </div>
  );
}

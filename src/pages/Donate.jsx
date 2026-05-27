import { useEffect, useState } from "react";
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

export default function Donate() {
  useScrollReveal();
  const [copied, setCopied] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("");

  const bankDetails = {
  bankName: "Access Bank",
  accountName: "Omobude Iwinosa Favour",
  accountNumber: "1832086808",
};

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const amounts = [1000, 5000, 10000, 25000, 50000];

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
          }}>Make a Difference</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>Donate Today</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            Every naira you give goes directly to a child who needs it. No child should feel forgotten. 🧡
          </p>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section style={{ padding: "100px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          {/* LEFT - Amount selector + bank details */}
          <div className="scroll-reveal">
            <div style={{ background: "#fff", borderRadius: 24, padding: 40, boxShadow: "0 4px 30px rgba(0,0,0,0.08)", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 26, fontWeight: 800, color: "#2C3E50", marginBottom: 8 }}>
                Choose an Amount
              </h2>
              <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Select or enter how much you'd like to donate</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
                {amounts.map((amount) => (
                  <button key={amount} onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                    style={{
                      padding: "14px 8px", borderRadius: 12, border: "2px solid",
                      borderColor: selectedAmount === amount ? "#18BC9C" : "#e0e0e0",
                      background: selectedAmount === amount ? "rgba(24,188,156,0.08)" : "#fff",
                      color: selectedAmount === amount ? "#18BC9C" : "#555",
                      fontFamily: "Raleway, sans-serif", fontSize: 15, fontWeight: 700,
                      cursor: "pointer", transition: "all 0.2s",
                    }}>
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Enter custom amount (₦)"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                style={{
                  width: "100%", padding: "14px 16px", borderRadius: 12,
                  border: "2px solid", borderColor: customAmount ? "#18BC9C" : "#e0e0e0",
                  fontSize: 15, fontFamily: "Raleway, sans-serif", color: "#2C3E50",
                  outline: "none", marginBottom: 24,
                }}
              />

              <div style={{
                background: "rgba(24,188,156,0.08)", border: "1px solid rgba(24,188,156,0.2)",
                borderRadius: 12, padding: "16px 20px", marginBottom: 8,
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 14, color: "#555" }}>Selected Amount:</span>
                <span style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#18BC9C" }}>
                  ₦{(customAmount || selectedAmount || 0).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Bank Details */}
            <div style={{ background: "#fff", borderRadius: 24, padding: 40, boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>
              <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#2C3E50", marginBottom: 6 }}>
                Bank Transfer Details
              </h2>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 28 }}>
                Transfer your donation to the account below and send us proof of payment.
              </p>

              {[
                { label: "Bank Name", value: bankDetails.bankName },
                { label: "Account Name", value: bankDetails.accountName },
                { label: "Account Number", value: bankDetails.accountNumber },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 0", borderBottom: "1px solid #f0f0f0",
                }}>
                  <div>
                    <p style={{ fontSize: 12, color: "#aaa", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{item.label}</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#2C3E50" }}>{item.value}</p>
                  </div>
                  <button onClick={() => handleCopy(item.value, item.label)}
                    style={{
                      padding: "7px 16px", borderRadius: 20, border: "1px solid",
                      borderColor: copied === item.label ? "#18BC9C" : "#e0e0e0",
                      background: copied === item.label ? "rgba(24,188,156,0.1)" : "#fff",
                      color: copied === item.label ? "#18BC9C" : "#888",
                      fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                    }}>
                    {copied === item.label ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              ))}

              <div style={{
                background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)",
                borderRadius: 12, padding: "14px 18px", marginTop: 24,
                fontSize: 13, color: "#555", lineHeight: 1.7,
              }}>
                📧 After transferring, please send proof of payment to <strong>info@firstthoughtinitiative.org</strong> with your name and amount.
              </div>
            </div>
          </div>

          {/* RIGHT - What your donation does */}
          <div className="scroll-reveal">
            <div style={{ background: "#fff", borderRadius: 24, padding: 40, boxShadow: "0 4px 30px rgba(0,0,0,0.08)", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#2C3E50", marginBottom: 24 }}>
                What Your Donation Does
              </h2>
              {[
                { amount: "₦1,000", desc: "Provides a nutritious meal and snacks for one child during an outreach", icon: "🍱", color: "#f39c12" },
                { amount: "₦5,000", desc: "Buys a complete outfit (clothing + shoes) for one child", icon: "👗", color: "#18BC9C" },
                { amount: "₦10,000", desc: "Sponsors one child's full outreach experience including feeding, clothing and gifts", icon: "🎁", color: "#e74c3c" },
                { amount: "₦25,000", desc: "Funds an entire activity session for a group of children at an outreach", icon: "🎭", color: "#9b59b6" },
                { amount: "₦50,000", desc: "Helps fund an entire outreach program reaching 10+ children with full care", icon: "🌟", color: "#2C3E50" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "16px 0", borderBottom: i < 4 ? "1px solid #f0f0f0" : "none",
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${item.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 800, color: item.color, marginBottom: 4 }}>{item.amount}</p>
                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div style={{
              background: "linear-gradient(135deg, #2C3E50, #1a252f)",
              borderRadius: 24, padding: 36,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 100, height: 100, borderRadius: "50%",
                background: "rgba(24,188,156,0.1)",
              }} />
              <div style={{ fontSize: 40, marginBottom: 16 }}>"</div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.9, marginBottom: 20, fontStyle: "italic" }}>
                Seeing the smile on a child's face when they receive something as simple as a new pair of shoes — that is why we do this. Your donation makes those smiles possible.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  overflow: "hidden", border: "2px solid #18BC9C",
                }}>
                  <img src="/images/founder.jpeg" alt="Founder"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Iwinosa Favour Omobude</p>
                  <p style={{ fontSize: 12, color: "#18BC9C" }}>Founder, First Thought Initiative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO GIVE */}
      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }} className="scroll-reveal">
            <span style={{
              display: "inline-block", background: "rgba(24,188,156,0.1)",
              color: "#18BC9C", padding: "6px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16,
            }}>Other Ways to Help</span>
            <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#2C3E50" }}>
              More Ways to Give
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "👕", title: "Donate Items", desc: "Clothing, shoes, food items, school supplies and hygiene products are always needed for our outreaches.", color: "#18BC9C" },
              { icon: "🤝", title: "Volunteer", desc: "Give your time and skills. Join us at our outreaches and make a direct impact in a child's life.", color: "#2C3E50", link: "/volunteer" },
              { icon: "📢", title: "Spread the Word", desc: "Share our work on social media, tell your friends and family — awareness is the first step to impact.", color: "#f39c12" },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal" style={{
                background: "#f4f6f8", borderRadius: 20, padding: 36,
                textAlign: "center", transition: "all 0.3s",
                borderBottom: `4px solid ${item.color}`,
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 20, fontWeight: 700, color: "#2C3E50", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: item.link ? 20 : 0 }}>{item.desc}</p>
                {item.link && (
                  <Link to={item.link} style={{
                    display: "inline-block", padding: "10px 24px", borderRadius: 25,
                    background: item.color, color: "#fff", fontSize: 13, fontWeight: 700,
                  }}>Learn More →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

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

export default function Blog() {
  useScrollReveal();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Outreach Updates", "Stories", "News", "Announcements"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

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
          }}>Our Blog</span>
          <h1 style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#fff", marginBottom: 16,
          }}>Stories & Updates</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto" }}>
            Read about our outreaches, the lives we've touched, and the stories that keep us going.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section style={{ padding: "80px 40px", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Category Filter */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48, justifyContent: "center" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "9px 20px", borderRadius: 25, border: "2px solid",
                borderColor: activeCategory === cat ? "#18BC9C" : "#e0e0e0",
                background: activeCategory === cat ? "#18BC9C" : "#fff",
                color: activeCategory === cat ? "#fff" : "#555",
                fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
              }}>{cat}</button>
            ))}
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>⏳</div>
              <p style={{ color: "#888", fontSize: 15 }}>Loading posts...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>📝</div>
              <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 24, fontWeight: 700, color: "#2C3E50", marginBottom: 12 }}>
                No posts yet
              </h3>
              <p style={{ color: "#888", fontSize: 15 }}>
                {activeCategory === "All" ? "Check back soon — our first blog post is coming!" : `No posts in "${activeCategory}" yet.`}
              </p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {filtered.map((post, i) => (
                <Link key={post.id} to={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
                  <div className="scroll-reveal" style={{
                    background: "#fff", borderRadius: 20, overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)", transition: "all 0.3s",
                    cursor: "pointer",
                  }}>
                    {/* Post Image */}
                    <div style={{ height: 200, overflow: "hidden", background: "#2C3E50", position: "relative" }}>
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{
                          width: "100%", height: "100%",
                          background: "linear-gradient(135deg, #2C3E50, #18BC9C)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 48,
                        }}>📝</div>
                      )}
                      <span style={{
                        position: "absolute", top: 16, left: 16,
                        background: "#18BC9C", color: "#fff",
                        padding: "4px 12px", borderRadius: 20,
                        fontSize: 11, fontWeight: 700,
                      }}>{post.category || "Update"}</span>
                    </div>

                    <div style={{ padding: 24 }}>
                      <p style={{ fontSize: 12, color: "#aaa", marginBottom: 8 }}>
                        {post.createdAt?.toDate?.()?.toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" }) || ""}
                      </p>
                      <h3 style={{
                        fontFamily: "Raleway, sans-serif", fontSize: 18,
                        fontWeight: 700, color: "#2C3E50", marginBottom: 10, lineHeight: 1.4,
                      }}>{post.title}</h3>
                      <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 16 }}>
                        {post.excerpt || post.content?.substring(0, 120) + "..."}
                      </p>
                      <span style={{ color: "#18BC9C", fontSize: 13, fontWeight: 700 }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

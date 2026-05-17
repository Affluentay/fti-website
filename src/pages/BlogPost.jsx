import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blogPosts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setPost({ id: docSnap.id, ...docSnap.data() });
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div style={{ paddingTop: 120, textAlign: "center", fontSize: 18 }}>Loading...</div>;
  if (!post) return <div style={{ paddingTop: 120, textAlign: "center" }}>Post not found. <Link to="/blog">Back to Blog</Link></div>;

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ background: "linear-gradient(135deg, #2C3E50, #1a252f)", padding: "80px 40px", textAlign: "center" }}>
        <span style={{ background: "rgba(24,188,156,0.15)", color: "#18BC9C", padding: "6px 18px", borderRadius: 25, fontSize: 13, fontWeight: 600 }}>{post.category}</span>
        <h1 style={{ fontFamily: "Raleway, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#fff", marginTop: 20, marginBottom: 16, maxWidth: 800, margin: "20px auto 16px" }}>{post.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{post.createdAt?.toDate?.()?.toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })} · By {post.author || "FTI Team"}</p>
      </section>

      <section style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 20, marginBottom: 48, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }} />}
          <div style={{ fontSize: 16, color: "#444", lineHeight: 1.9, whiteSpace: "pre-wrap" }}>{post.content}</div>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #eee" }}>
            <Link to="/blog" style={{ color: "#18BC9C", fontWeight: 700, fontSize: 15 }}>← Back to Blog</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

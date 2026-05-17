import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, serverTimestamp } from "firebase/firestore";

const ADMIN_EMAILS = ["ayrevelation2019@gmail.com"];

export default function AdminBlog() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Outreach Updates");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => { onAuthStateChanged(auth, (u) => setUser(u)); }, []);

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  const fetchPosts = async () => {
    const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) { setError("Invalid email or password"); }
  };

  const handlePublish = async () => {
    if (!title || !content) { setError("Title and content are required"); return; }
    if (!ADMIN_EMAILS.includes(user.email)) { setError("You are not authorized"); return; }
    setLoading(true);
    try {
      await addDoc(collection(db, "blogPosts"), {
        title, content, excerpt, category, imageUrl, author: author || "FTI Team",
        createdAt: serverTimestamp(),
      });
      setTitle(""); setContent(""); setExcerpt(""); setImageUrl(""); setAuthor("");
      setSuccess("Post published successfully! 🎉");
      setTimeout(() => setSuccess(""), 3000);
      fetchPosts();
    } catch (e) { setError("Failed to publish post"); }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    await deleteDoc(doc(db, "blogPosts", id));
    fetchPosts();
  };

  const inputStyle = { width: "100%", padding: "13px 16px", borderRadius: 12, border: "2px solid #e0e0e0", fontSize: 14, color: "#2C3E50", outline: "none", fontFamily: "Montserrat, sans-serif", marginBottom: 16, boxSizing: "border-box" };
  const labelStyle = { display: "block", fontSize: 12, fontWeight: 600, color: "#2C3E50", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 };

  if (!user) return (
    <div style={{ paddingTop: 70, minHeight: "100vh", background: "#f4f6f8", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: 48, width: "100%", maxWidth: 420, boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 26, fontWeight: 800, color: "#2C3E50", marginBottom: 8 }}>Admin Login</h2>
        <p style={{ fontSize: 14, color: "#888", marginBottom: 28 }}>Sign in to manage blog posts</p>
        {error && <div style={{ background: "rgba(231,76,60,0.1)", color: "#e74c3c", padding: "10px 14px", borderRadius: 10, fontSize: 13, marginBottom: 16 }}>{error}</div>}
        <label style={labelStyle}>Email</label>
        <input style={inputStyle} type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        <label style={labelStyle}>Password</label>
        <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} />
        <button onClick={handleLogin} style={{ width: "100%", padding: 14, borderRadius: 30, background: "#18BC9C", color: "#fff", fontFamily: "Raleway, sans-serif", fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer" }}>Sign In</button>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: 70, minHeight: "100vh", background: "#f4f6f8" }}>
      <div style={{ background: "#2C3E50", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#fff" }}>📝 Blog Admin</h1>
        <button onClick={() => signOut(auth)} style={{ padding: "8px 20px", borderRadius: 20, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer", fontSize: 13 }}>Sign Out</button>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        {/* Write Post */}
        <div style={{ background: "#fff", borderRadius: 24, padding: 40, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#2C3E50", marginBottom: 24 }}>Write New Post</h2>
          {error && <div style={{ background: "rgba(231,76,60,0.1)", color: "#e74c3c", padding: "10px 14px", borderRadius: 10, fontSize: 13, marginBottom: 16 }}>{error}</div>}
          {success && <div style={{ background: "rgba(24,188,156,0.1)", color: "#18BC9C", padding: "10px 14px", borderRadius: 10, fontSize: 13, marginBottom: 16 }}>{success}</div>}
          <label style={labelStyle}>Title *</label>
          <input style={inputStyle} placeholder="Post title" value={title} onChange={e => setTitle(e.target.value)} />
          <label style={labelStyle}>Category</label>
          <select style={inputStyle} value={category} onChange={e => setCategory(e.target.value)}>
            <option>Outreach Updates</option>
            <option>Stories</option>
            <option>News</option>
            <option>Announcements</option>
          </select>
          <label style={labelStyle}>Author</label>
          <input style={inputStyle} placeholder="Author name (default: FTI Team)" value={author} onChange={e => setAuthor(e.target.value)} />
          <label style={labelStyle}>Image URL (optional)</label>
          <input style={inputStyle} placeholder="https://..." value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
          <label style={labelStyle}>Excerpt (short summary)</label>
          <input style={inputStyle} placeholder="Brief description of the post..." value={excerpt} onChange={e => setExcerpt(e.target.value)} />
          <label style={labelStyle}>Content *</label>
          <textarea style={{ ...inputStyle, minHeight: 200, resize: "vertical", lineHeight: 1.7 }} placeholder="Write your full post here..." value={content} onChange={e => setContent(e.target.value)} />
          <button onClick={handlePublish} disabled={loading} style={{ width: "100%", padding: 14, borderRadius: 30, background: loading ? "#ccc" : "#18BC9C", color: "#fff", fontFamily: "Raleway, sans-serif", fontSize: 15, fontWeight: 700, border: "none", cursor: loading ? "not-allowed" : "pointer" }}>
            {loading ? "Publishing..." : "Publish Post 🚀"}
          </button>
        </div>

        {/* Published Posts */}
        <div>
          <h2 style={{ fontFamily: "Raleway, sans-serif", fontSize: 22, fontWeight: 800, color: "#2C3E50", marginBottom: 24 }}>Published Posts ({posts.length})</h2>
          {posts.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 20, padding: 40, textAlign: "center", color: "#888" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
              <p>No posts yet. Write your first post!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} style={{ background: "#fff", borderRadius: 16, padding: 24, marginBottom: 16, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <div>
                  <span style={{ background: "rgba(24,188,156,0.1)", color: "#18BC9C", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{post.category}</span>
                  <h3 style={{ fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 700, color: "#2C3E50", marginTop: 8, marginBottom: 4 }}>{post.title}</h3>
                  <p style={{ fontSize: 12, color: "#aaa" }}>{post.createdAt?.toDate?.()?.toLocaleDateString()}</p>
                </div>
                <button onClick={() => handleDelete(post.id)} style={{ padding: "7px 16px", borderRadius: 20, background: "rgba(231,76,60,0.1)", border: "1px solid rgba(231,76,60,0.2)", color: "#e74c3c", fontSize: 12, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

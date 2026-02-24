import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Home() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const generateContent = async () => {
    try {
      setLoading(true);
      setResult("");

      const response = await axios.post(
        "http://127.0.0.1:8000/generate",
        { topic, platform, tone }
      );

      setResult(response.data.content);
    } catch (error) {
      alert("Error generating content: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>AI Marketing Content Generator</h1>

        <div style={{ marginTop: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", textAlign: "left", fontSize: "12px", color: "#00d4ff", fontWeight: "600" }}>Topic</label>
          <input
            type="text"
            placeholder="e.g., Summer Sale, New Product"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "15px" }}>
          <label style={{ display: "block", marginBottom: "8px", textAlign: "left", fontSize: "12px", color: "#00d4ff", fontWeight: "600" }}>Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#111", color: "white", outline: "none", cursor: "pointer" }}
          >
            <option value="">Select Platform</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Twitter">Twitter/X</option>
            <option value="Facebook">Facebook</option>
            <option value="TikTok">TikTok</option>
          </select>
        </div>

        <div style={{ marginTop: "15px" }}>
          <label style={{ display: "block", marginBottom: "8px", textAlign: "left", fontSize: "12px", color: "#00d4ff", fontWeight: "600" }}>Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#111", color: "white", outline: "none", cursor: "pointer" }}
          >
            <option value="">Select Tone</option>
            <option value="Professional">Professional</option>
            <option value="Casual">Casual & Fun</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Urgent">Urgent & Bold</option>
            <option value="Educational">Educational</option>
          </select>
        </div>

        <button 
          onClick={generateContent} 
          disabled={loading || !topic || !platform || !tone}
          style={{ marginTop: "20px" }}
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {result && (
          <div className="result">
            <h2>Generated Content:</h2>
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

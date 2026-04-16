import { useState } from "react";
import jsPDF from "jspdf";

type Result = {
  market: string;
  product: string;
  business: string;
  score: number;
  verdict: string;
  category: string;
};

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const generateAnalysis = () => {
    const text = idea.trim().toLowerCase();
    if (text.length < 10) return;

    setLoading(true);

    setTimeout(() => {
      let category = "General";
      let score = 70;

      if (text.includes("food") || text.includes("chef")) {
        category = "FoodTech";
        score += 10;
      } else if (text.includes("health") || text.includes("fitness")) {
        category = "HealthTech";
        score += 8;
      } else if (text.includes("ai")) {
        category = "SaaS";
        score += 6;
      } else if (text.includes("marketplace")) {
        category = "Marketplace";
        score += 7;
      }

      const market = `Market Size:
Growing industry with strong demand.

Target Users:
Users aligned with "${idea}"

Competition:
Fragmented but competitive market.

Demand:
High potential and scalable.`;

      const product = `MVP Features:
- Core features
- User interaction system
- Profiles

Tech Stack:
React + Node.js

Value:
Solves ${idea}`;

      const business = `Revenue Model:
Subscription / Commission

Pricing:
Freemium model

Risks:
Scaling & adoption

Growth:
Digital marketing`;

      let verdict = "Average — Needs validation";
      if (score >= 85) verdict = "Strong — Build it";
      else if (score >= 75) verdict = "Good — Worth exploring";

      setResult({
        market,
        product,
        business,
        score,
        verdict,
        category,
      });

      setLoading(false);
    }, 800);
  };

  // ===== PDF =====
  const downloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    let y = 15;

    const clean = (text: string) =>
      text.replace(/[^\x00-\x7F]/g, "");

    const checkPage = () => {
      if (y > 270) {
        doc.addPage();
        y = 15;
      }
    };

    // HEADER
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("LaunchPad AI", 105, y, { align: "center" });

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Startup Blueprint Report", 105, y, { align: "center" });

    y += 10;
    doc.line(20, y, 190, y);
    y += 10;

    doc.text(`Idea: ${clean(idea)}`, 10, y);
    y += 12;

    // SCORE BOX
    doc.rect(10, y, 190, 22);

    doc.setFont("helvetica", "bold");
    doc.text("Overall Score", 12, y + 6);

    doc.setFontSize(18);
    doc.text(`${result.score} / 100`, 12, y + 15);

    doc.setFont("helvetica", "normal");
    doc.text(result.verdict, 120, y + 15);

    y += 30;

    // ===== FIXED SECTION FUNCTION =====
    const addSection = (title: string, content: string) => {
      let startY = y;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text(title, 12, y);

      y += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      const lines = doc.splitTextToSize(clean(content), 170);

      const boxTop = startY - 4;

      lines.forEach((line: string) => {
        checkPage();
        doc.text(line, 12, y);
        y += 6;
      });

      const boxHeight = y - boxTop;

      // 🔥 BOX DRAWN AFTER CONTENT
      doc.rect(10, boxTop, 190, boxHeight);

      y += 10;
    };

    addSection("Market Analysis", result.market);
    addSection("Product Plan", result.product);
    addSection("Business Model", result.business);

    doc.save("startup_blueprint.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🚀 LaunchPad AI</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
        <input
          style={{
            flex: 1,
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white",
          }}
          placeholder="Enter your startup idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <button
          onClick={generateAnalysis}
          style={{
            background: "#3b82f6",
            padding: "16px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Launch
        </button>
      </div>

      {loading && <p style={{ marginTop: "20px" }}>Running AI agents...</p>}

      {result && (
        <div style={{ marginTop: "30px" }}>
          <p>Category: {result.category}</p>

          <p>
            🧠 Market Agent → Done <br />
            🛠 Product Agent → Done <br />
            💰 Business Agent → Done
          </p>

          <h2 style={{ color: "#22c55e" }}>
            {result.score} / 100 — {result.verdict}
          </h2>

          {/* CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3>🧠 Market</h3>
              <p style={{ whiteSpace: "pre-line" }}>{result.market}</p>
            </div>

            <div style={cardStyle}>
              <h3>🛠 Product</h3>
              <p style={{ whiteSpace: "pre-line" }}>{result.product}</p>
            </div>

            <div style={cardStyle}>
              <h3>💰 Business</h3>
              <p style={{ whiteSpace: "pre-line" }}>{result.business}</p>
            </div>
          </div>

          <button
            onClick={downloadPDF}
            style={{
              marginTop: "30px",
              width: "100%",
              background: "#22c55e",
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download Blueprint PDF
          </button>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  border: "1px solid #334155",
  padding: "20px",
  borderRadius: "12px",
};

export default App;
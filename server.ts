import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy initialization for Google GenAI client
let genAIClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({ apiKey });
  }
  return genAIClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    system: "NEXUS Global Enterprise Core Systems",
    timestamp: new Date().toISOString(),
    aiEngineReady: !!getGenAI()
  });
});

// Corporate AI Chat Assistant endpoint
app.post("/api/ai/chat", async (req, res) => {
  const { message, conversationHistory = [] } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message string is required." });
  }

  const ai = getGenAI();

  const systemContext = `
You are NEXUS AI, the executive artificial intelligence strategist for NEXUS Global Enterprise (https://nexus.global).
NEXUS is a premier Fortune 500 technology and strategic consulting conglomerate specializing in:
- Enterprise Digital Transformation & Modern Architecture
- Sovereign AI Infrastructure & Custom Neural Network Solutions
- Autonomous Cloud Systems & Quantum Computing Readiness
- Next-Gen Cybersecurity & Zero-Trust Defense Systems
- Global Predictive Data Analytics & Financial Systems Integration

Answer concisely, professionally, and authoritatively. Suggest relevant NEXUS solutions, case studies, or ROI consultations when appropriate. Keep responses under 200 words unless detailed analysis is requested.
`;

  if (!ai) {
    // Intelligent contextual fallback when API key is not yet set
    const lower = message.toLowerCase();
    let reply = "Welcome to NEXUS Global Enterprise. Our executive team specializes in large-scale AI transformation, sovereign cloud infrastructure, and cybersecurity for Fortune 500 enterprises.";

    if (lower.includes("service") || lower.includes("offer") || lower.includes("do")) {
      reply = "NEXUS provides 8 core enterprise capabilities: Digital Transformation, AI & Neural Systems, Sovereign Cloud Infrastructure, Cybersecurity, Predictive Analytics, Enterprise ERP Automation, Software Architecture, and Strategic Business Consulting.";
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("roi")) {
      reply = "Enterprise engagements are tailored to organizational scale. On average, NEXUS digital transformation projects deliver 3.4x ROI within 18 months, reducing operational friction by up to 65%. You can try our interactive ROI Calculator on the page!";
    } else if (lower.includes("contact") || lower.includes("meeting") || lower.includes("demo")) {
      reply = "You can schedule a direct consultation with our Senior Strategy Partners using the 'Schedule Demo' button or submit an inquiry through our Executive Contact Form below.";
    } else if (lower.includes("case") || lower.includes("client")) {
      reply = "We partner with global industry leaders in Finance, Healthcare, Aerospace, and Energy—including NVIDIA, Microsoft, Siemens, and Fortune 100 banks. Explore our Case Studies section for detailed ROI breakdowns.";
    }

    return res.json({
      reply,
      source: "NEXUS Offline Enterprise Knowledge Base",
      status: "success"
    });
  }

  try {
    const promptText = `${systemContext}\n\nUser Question: ${message}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptText,
    });

    const reply = response.text || "Thank you for contacting NEXUS Global. Our strategic advisory panel is reviewing your request.";
    return res.json({
      reply,
      source: "NEXUS Core Gemini 2.5 Neural Engine",
      status: "success"
    });
  } catch (error: any) {
    console.error("Error invoking Gemini API:", error);
    return res.json({
      reply: "NEXUS Global Enterprise AI is currently operating in high-security offline mode. Our solutions specialists are ready to assist you directly through our Schedule Demo link.",
      source: "NEXUS Fallback Strategic Engine",
      status: "success"
    });
  }
});

// Custom Corporate ROI Estimation endpoint
app.post("/api/ai/roi-estimate", async (req, res) => {
  const { industry, companySize, currentCloudSpend, keyGoal } = req.body;

  const ai = getGenAI();

  if (!ai) {
    const estimatedSavingsPercent = Math.floor(Math.random() * 15) + 35; // 35-50%
    const estimatedEfficiencyBoost = Math.floor(Math.random() * 20) + 180; // 180-200%
    return res.json({
      industry: industry || "Technology Enterprise",
      annualCostReduction: `$${(Number(currentCloudSpend || 500000) * 0.38).toLocaleString()}`,
      throughputMultiplier: `${(estimatedEfficiencyBoost / 100).toFixed(1)}x`,
      paybackPeriodMonths: "7.4 months",
      summary: `Based on NEXUS benchmark data for ${industry || "Enterprise"} organizations with ${companySize || "1,000+"} employees, implementing NEXUS Neural Architecture & Autonomous Workflows projects a estimated savings of ${estimatedSavingsPercent}%.`
    });
  }

  try {
    const prompt = `Act as a senior Chief Technology Strategist at NEXUS Global. Calculate a high-level digital transformation ROI breakdown for a company with:
Industry: ${industry}
Size: ${companySize}
Annual Tech/Cloud Spend: $${currentCloudSpend}
Primary Objective: ${keyGoal}

Return JSON with format:
{
  "annualCostReduction": "$X,XXX,XXX",
  "throughputMultiplier": "X.Xx",
  "paybackPeriodMonths": "X.X months",
  "summary": "Brief 2-sentence executive summary"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });

    const text = response.text;
    const parsed = JSON.parse(text || "{}");
    return res.json({
      industry,
      annualCostReduction: parsed.annualCostReduction || "$1,850,000",
      throughputMultiplier: parsed.throughputMultiplier || "3.2x",
      paybackPeriodMonths: parsed.paybackPeriodMonths || "6.2 months",
      summary: parsed.summary || "Implementing NEXUS enterprise neural architecture reduces cloud overhead while accelerating automated workflow execution."
    });
  } catch (err) {
    return res.json({
      industry,
      annualCostReduction: "$1,450,000",
      throughputMultiplier: "2.8x",
      paybackPeriodMonths: "8.1 months",
      summary: "Projected optimization yields significant operational cost reduction and accelerated software deployment cycles."
    });
  }
});

// Contact routing endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, company, subject, message } = req.body;
  console.log("Inquiry received from:", name, email, company);
  res.json({
    success: true,
    message: "Thank you for reaching out to NEXUS Global Enterprise. A Senior Client Director will respond within 2 business hours.",
    referenceId: `NEXUS-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`NEXUS Enterprise Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

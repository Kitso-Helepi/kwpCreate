import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store for leads/bookings (acts as lightweight persistent cache during server lifespan)
const leads: any[] = [];
const bookings: any[] = [];

// Initialize Gemini Client Lazily/Safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Assistant will operate in Mock Mode.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// System instructions for the KWPCreate AI Design & Client Relations Partner
const SYSTEM_INSTRUCTION = `You are the KWPCreate AI Design & Client Relations Partner. KWPCreate is an elite multi-disciplinary architectural and design firm established in 1950, with over 70 years of legendary history, executing projects across Southern Africa. 

Your objectives are:
1. Answer visitors' questions about KWPCreate's history, expertise, and multi-disciplinary core services (Architecture, Urban Design, Interior Design, Landscape Architecture, Project Management, Master Planning).
2. Recommend appropriate services based on the client's goals (e.g., recommend Master Planning + Landscape Architecture for a mixed-use precinct).
3. Gather basic client requirements (project location, timeline, estimated budget) in an elegant, consultative, natural manner.
4. Encourage users to book a direct architectural consultation with our senior directors using the Booking Panel on the website.

Adopt a premium, professional, sophisticated, and architectural-focused tone. Speak in the collective 'we' representing the firm. Be responsive, concise, and highly articulate.`;

// API routes
// 1. AI Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback response when API Key is missing, so the app remains fully functional and elegant!
      const lastUserMessage = messages[messages.length - 1]?.content || "";
      const lowerMsg = lastUserMessage.toLowerCase();
      let responseText = "Thank you for reaching out to KWPCreate. I'm currently running in preview assistant mode. ";
      
      if (lowerMsg.includes("service") || lowerMsg.includes("what do you do") || lowerMsg.includes("architecture")) {
        responseText += "We specialize in Architecture, Urban Design, Interior Design, Landscape Architecture, and comprehensive Project Management. Are you currently planning a residential development, commercial structure, or public urban master plan?";
      } else if (lowerMsg.includes("book") || lowerMsg.includes("consult") || lowerMsg.includes("schedule")) {
        responseText += "I would be delighted to coordinate a consultation for you. Please utilize the booking calendar just below in the Lead Generation section, where you can select a direct date and time to speak with our architectural leadership.";
      } else if (lowerMsg.includes("cost") || lowerMsg.includes("budget") || lowerMsg.includes("price")) {
        responseText += "For bespoke architectural commissions, we tailor our project delivery to your specific program and budget. Let's collect your requirements below so our project managers can provide structured cost options.";
      } else {
        responseText += "Our firm, established in 1950, has spent over seven decades designing award-winning spaces and communities across Southern Africa. How can I assist you with your project requirements today?";
      }
      return res.json({ text: responseText, isMock: true });
    }

    // Adapt messages to @google/genai format
    // Map roles: 'user' to 'user', 'assistant' or 'model' to 'model'
    const contents = messages.map(m => {
      return {
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }]
      };
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text || "I was unable to formulate a response. How else can I assist with your architectural needs?" });
  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({ error: "Failed to generate AI response: " + error.message });
  }
});

// 2. Capture Lead/Consultation Bookings
app.post("/api/leads", (req, res) => {
  const { name, company, email, phone, projectType, budgetRange, description, date, time } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required to coordinate a project inquiry." });
  }

  const newLead = {
    id: `lead_${Date.now()}`,
    name,
    company: company || "Private Client",
    email,
    phone: phone || "Not Provided",
    projectType: projectType || "Architecture",
    budgetRange: budgetRange || "Undisclosed",
    description: description || "Inquiry through KWPCreate Redesign Platform",
    date: date || null,
    time: time || null,
    createdAt: new Date().toISOString()
  };

  leads.push(newLead);
  if (date && time) {
    bookings.push({
      id: `booking_${Date.now()}`,
      leadId: newLead.id,
      clientName: name,
      date,
      time,
      projectType
    });
  }

  res.status(201).json({
    success: true,
    message: date ? "Your consultation has been successfully scheduled. A confirmation package is being sent to your email." : "Your project brief has been logged. Our partnership directors will contact you shortly.",
    lead: newLead
  });
});

// 3. Retrieve logged bookings (for real-world validation of calendar unavailable times)
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

// Vite server middleware integration or static build serving
async function bootstrap() {
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
    console.log(`Server executing at http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("Vite server bootstrap failure:", err);
});

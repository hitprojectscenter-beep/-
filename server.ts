import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for blessings
const blessings: { id: number; name: string; message: string; timestamp: number }[] = [
  { id: 1, name: "מארק", message: "חג פסח שמח וכשר לכולם!", timestamp: Date.now() }
];

// API Routes
app.get("/api/blessings", (req, res) => {
  res.json(blessings.sort((a, b) => b.timestamp - a.timestamp));
});

app.post("/api/blessings", (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }
  const newBlessing = {
    id: Date.now(),
    name,
    message,
    timestamp: Date.now(),
  };
  blessings.push(newBlessing);
  // Keep only the last 50 blessings to avoid memory issues
  if (blessings.length > 50) blessings.shift();
  res.status(201).json(newBlessing);
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

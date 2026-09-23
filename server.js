require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    message: "SceneAI backend is running"
  });
});

app.post("/api/scene", (req, res) => {
  res.json({
    ok: true,
    message: "Scene endpoint is ready",
    received: req.body || {}
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SceneAI backend running on port ${PORT}`);
});

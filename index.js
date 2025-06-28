import express from "express";
import "dotenv/config";
import { ai } from "./ai.js";
import cors from "cors";

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/h", (req, res) => {
  res.send(`
    const d = async (a) => {
      try{
      const r = await fetch("https://")
      const b = await r.json()
      console.log(b)
      }catch(error){console.log(error)}
      }
    `);
});
app.post("/data", async (req, res) => {
  try {
    const q = req.body.q;
    if (!q) {
      return res.status(400).json({ message: "come on" });
    }
    const an = await ai(q);
    res.json({ a: an });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Ohhh" });
  }
});

app.listen(port, () => {
  console.log("server runing...");
});

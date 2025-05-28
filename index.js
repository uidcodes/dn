import express from "express";
import "dotenv/config";
import { ai } from "./ai.js";

const port = process.env.PORT || 4000;

const app = express();
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
app.get("/a/:q", async (req, res) => {
  try {
    const q = req.params.q;
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

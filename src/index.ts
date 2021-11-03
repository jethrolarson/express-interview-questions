// To use JS instead of TypeScript rename this file to index.js
import express from "express";
import { port } from "./config";

const app = express();
// enable json apis
app.use(express.json());
app.get("/", (_req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

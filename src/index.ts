// To use JS instead of TypeScript rename this file to index.js
import express from "express";
import { port } from "./config";

const app = express().use(
  express.json(), // enable json apis
  express.static('public') // serve public directory
);

app.get("/hello_world", (_req, res) => {
  res.json({message: "Hello world!"});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

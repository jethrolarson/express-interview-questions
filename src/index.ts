import express from "express";
import { port } from "./config";

const app = express();
app.get("/", (_req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Challenge: Shared Todo List
// Create an API for a TODO list
// Open book, google, any libraries you like
// use cases:
// user can create a new todo list
// user can add a list item to todo list
// user can mark list item as done
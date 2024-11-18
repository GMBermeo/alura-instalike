import express, { Express } from "express";

const app: Express = express();
const porta: number = 3456;

app.listen(porta, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Hello World");
});

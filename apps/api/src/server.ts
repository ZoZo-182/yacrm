import express from "express";
import { env } from "./config/env.js";

const app = express();

app.use(express.json());

const server = app.listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});

const shutdown = () => {
  server.close(() => {
    process.exit(0);
  });
};

process.on("SIGINT", shutdown); // ctrl+c
process.on("SIGTERM", shutdown); // signal apps may send

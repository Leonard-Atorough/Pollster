import express from "express";

export function startServer(port: number) {
  const app = express();

  app.use(express.json());

  app.get("/api/health", (_, res) => res.json({ status: "ok" }));

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  "/v3/decks/all",
  createProxyMiddleware({
    target: "https://api2.moxfield.com",
    changeOrigin: true,
    pathRewrite: {
      "^/v3/decks/all": "/v3/decks/all",
    },
  })
);

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Proxy server is running.");
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}/`);
});

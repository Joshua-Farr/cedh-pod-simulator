import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/v3/decks/all/",
  createProxyMiddleware({
    target: "https://api2.moxfield.com",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("Proxy server is running on http://localhost:5173/");
});


import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT) || 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Bizula API listening on port ${PORT}`);
});

server.on("error", (error) => {
  console.error("Failed to start Bizula API:", error.message);
  process.exit(1);
});

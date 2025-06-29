const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/user.routes.js");
const tripPlanRoutes = require("./routes/tripPlanRoutes.js");
const origin = process.env.FRONTEND_URL || "http://localhost:5173"; // Default to localhost if not set
app.use(
  cors({
    origin: origin, // Add all allowed frontend origins here
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/tripplan", tripPlanRoutes);

module.exports = app;

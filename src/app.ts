import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connection from "./config/db";
import prayerRoutes from "./routes/PrayerRequestRoutes";
import devotionRoutes from "./routes/DevotionRoutes";
import verseRoutes from "./routes/VerseRoutes";

// Load the settings from the .env file.
dotenv.config();

// Create the Express application.
const app = express();

// Let the API accept JSON data from requests.
app.use(express.json());

// Allow Postman or future front-end apps to call this API.
app.use(cors());

// Use the prayer request API routes.
app.use("/api/prayers", prayerRoutes);

// Use the devotion API routes.
app.use("/api/devotions", devotionRoutes);

// Use the Bible verse API routes.
app.use("/api/verses", verseRoutes);

// Simple test route to make sure the API is running.
app.get("/", (req, res) => {
    res.send("Walk with Faith & Grace API is running.");
});

// Use the port from .env, or use 3000 if no port is listed.
const PORT = process.env.PORT || 3000;

// Start the server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
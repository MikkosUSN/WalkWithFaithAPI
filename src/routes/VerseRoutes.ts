import express from "express";

import
{
    getVerses,
    addVerse,
    editVerse,
    removeVerse
}
from "../controllers/VerseController";

const router = express.Router();

// Get all Bible verses.
router.get("/", getVerses);

// Create a new Bible verse.
router.post("/", addVerse);

// Update an existing Bible verse.
router.put("/:id", editVerse);

// Delete a Bible verse.
router.delete("/:id", removeVerse);

export default router;
import express from "express";

import
{
    getSavedVerses,
    getSavedVerse,
    addSavedVerse,
    editSavedVerse,
    removeSavedVerse
}
from "../controllers/SavedVerseController";

const router = express.Router();

// Get all saved verses.
router.get("/", getSavedVerses);

// Get one saved verse.
router.get("/:id", getSavedVerse);

// Create a new saved verse.
router.post("/", addSavedVerse);

// Update an existing saved verse.
router.put("/:id", editSavedVerse);

// Delete a saved verse.
router.delete("/:id", removeSavedVerse);

export default router;
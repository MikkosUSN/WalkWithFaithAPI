import express from "express";

import
{
    getVerses,
    getBibleBooks,
    getBibleVersesByBook,
    getBibleVerse,
    addVerse,
    editVerse,
    removeVerse
}
from "../controllers/VerseController";

const router = express.Router();

// Get all Bible verses.
router.get("/", getVerses);

// Get all Bible book names.
router.get("/books", getBibleBooks);

// Get Bible verses by book and version.
router.get(
    "/book/:bookName/version/:version",
    getBibleVersesByBook
);

// Get one Bible verse.
router.get("/:id", getBibleVerse);

// Create a new Bible verse.
router.post("/", addVerse);

// Update an existing Bible verse.
router.put("/:id", editVerse);

// Delete a Bible verse.
router.delete("/:id", removeVerse);

export default router;
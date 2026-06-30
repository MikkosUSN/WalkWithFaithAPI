import express from "express";

import
{
    getNotes,
    getNote,
    addNote,
    editNote,
    removeNote
} from "../controllers/NoteController";

const router = express.Router();

// Get all personal notes.
router.get("/", getNotes);

// Get one personal note by ID.
router.get("/:id", getNote);

// Add a new personal note.
router.post("/", addNote);

// Update an existing personal note.
router.put("/:id", editNote);

// Delete a personal note.
router.delete("/:id", removeNote);

export default router;
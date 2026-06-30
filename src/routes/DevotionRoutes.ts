import express from "express";

import
{
    getDevotions,
    getDevotion,
    addDevotion,
    editDevotion,
    removeDevotion
} from "../controllers/DevotionController";

// Create the router.
const router = express.Router();

// Get all devotion entries.
router.get("/", getDevotions);

// Get one devotion entry by ID.
router.get("/:id", getDevotion);

// Add a new devotion entry.
router.post("/", addDevotion);

// Update an existing devotion entry.
router.put("/:id", editDevotion);

// Delete a devotion entry.
router.delete("/:id", removeDevotion);

export default router;
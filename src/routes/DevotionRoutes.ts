import express from "express";

import
{
    getDevotions,
    addDevotion,
    editDevotion,
    removeDevotion
}
from "../controllers/DevotionController";

const router = express.Router();

// Get all devotion entries.
router.get("/", getDevotions);

// Create a new devotion entry.
router.post("/", addDevotion);

// Update an existing devotion entry.
router.put("/:id", editDevotion);

// Delete a devotion entry.
router.delete("/:id", removeDevotion);

export default router;
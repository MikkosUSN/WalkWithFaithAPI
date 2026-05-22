import express from "express";

import
{
    getPrayerRequests,
    addPrayerRequest,
    editPrayerRequest,
    removePrayerRequest
}
from "../controllers/PrayerRequestController";

const router = express.Router();

// Get all prayer requests.
router.get("/", getPrayerRequests);

// Create a new prayer request.
router.post("/", addPrayerRequest);

// Update an existing prayer request.
router.put("/:id", editPrayerRequest);

// Delete a prayer request.
router.delete("/:id", removePrayerRequest);

export default router;
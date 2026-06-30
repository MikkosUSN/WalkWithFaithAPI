import { Request, Response } from "express";

import
{
    getAllDevotions,
    getDevotionById,
    createDevotion,
    updateDevotion,
    deleteDevotion
} from "../dao/DevotionDAO";

// Get all devotion entries.
export const getDevotions = (req: Request, res: Response) =>
{
    getAllDevotions((err: any, results: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json(results);
    });
};

// Get one devotion entry by ID.
export const getDevotion = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    getDevotionById(id, (err: any, results: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        if (results.length === 0)
        {
            res.status(404).json({ message: "Devotion not found." });
            return;
        }

        res.json(results[0]);
    });
};

// Add a new devotion entry.
export const addDevotion = (req: Request, res: Response) =>
{
    createDevotion(req.body, (err: any, results: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json(
        {
            message: "Devotion created successfully.",
            devotionId: results.insertId
        });
    });
};

// Update an existing devotion entry.
export const editDevotion = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    updateDevotion(id, req.body, (err: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({ message: "Devotion updated successfully." });
    });
};

// Delete a devotion entry.
export const removeDevotion = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    deleteDevotion(id, (err: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({ message: "Devotion deleted successfully." });
    });
};
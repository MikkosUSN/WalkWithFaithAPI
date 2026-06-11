import { Request, Response } from "express";

import
{
    getAllSavedVerses,
    getSavedVerseById,
    createSavedVerse,
    updateSavedVerse,
    deleteSavedVerse
}
from "../dao/SavedVerseDAO";

// Return all saved verses.
export const getSavedVerses = (req: Request, res: Response) =>
{
    getAllSavedVerses((error: any, results: any) =>
    {
        if (error)
        {
            res.status(500).send(error);
        }
        else
        {
            res.json(results);
        }
    });
};

// Return one saved verse.
export const getSavedVerse = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    getSavedVerseById(id, (error: any, results: any) =>
    {
        if (error)
        {
            res.status(500).send(error);
        }
        else
        {
            res.json(results[0]);
        }
    });
};

// Create a new saved verse.
export const addSavedVerse = (req: Request, res: Response) =>
{
    createSavedVerse(req.body, (error: any, results: any) =>
    {
        if (error)
        {
            res.status(500).send(error);
        }
        else
        {
            res.json(results);
        }
    });
};

// Update an existing saved verse.
export const editSavedVerse = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    updateSavedVerse
    (
        id,
        req.body,
        (error: any, results: any) =>
        {
            if (error)
            {
                res.status(500).send(error);
            }
            else
            {
                res.json(results);
            }
        }
    );
};

// Delete a saved verse.
export const removeSavedVerse = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    deleteSavedVerse(id, (error: any, results: any) =>
    {
        if (error)
        {
            res.status(500).send(error);
        }
        else
        {
            res.json(results);
        }
    });
};
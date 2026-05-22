import { Request, Response } from "express";

import
{
    getAllVerses,
    createVerse,
    updateVerse,
    deleteVerse
}
from "../dao/VerseDAO";

// Return all Bible verses.
export const getVerses = (req: Request, res: Response) =>
{
    getAllVerses((error: any, results: any) =>
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

// Create a new Bible verse.
export const addVerse = (req: Request, res: Response) =>
{
    createVerse(req.body, (error: any, results: any) =>
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

// Update an existing Bible verse.
export const editVerse = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    updateVerse
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

// Delete a Bible verse.
export const removeVerse = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    deleteVerse(id, (error: any, results: any) =>
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
import { Request, Response } from "express";

import
{
    getAllDevotions,
    createDevotion,
    updateDevotion,
    deleteDevotion
}
from "../dao/DevotionDAO";

// Return all devotion entries.
export const getDevotions = (req: Request, res: Response) =>
{
    getAllDevotions((error: any, results: any) =>
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

// Create a new devotion entry.
export const addDevotion = (req: Request, res: Response) =>
{
    createDevotion(req.body, (error: any, results: any) =>
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

// Update an existing devotion entry.
export const editDevotion = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    updateDevotion
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

// Delete a devotion entry.
export const removeDevotion = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    deleteDevotion(id, (error: any, results: any) =>
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
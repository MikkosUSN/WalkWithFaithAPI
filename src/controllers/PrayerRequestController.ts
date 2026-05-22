import { Request, Response } from "express";

import
{
    getAllPrayerRequests,
    createPrayerRequest,
    updatePrayerRequest,
    deletePrayerRequest
}
from "../dao/PrayerRequestDAO";

// Return all prayer requests.
export const getPrayerRequests = (req: Request, res: Response) =>
{
    getAllPrayerRequests((error: any, results: any) =>
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

// Create a new prayer request.
export const addPrayerRequest = (req: Request, res: Response) =>
{
    createPrayerRequest(req.body, (error: any, results: any) =>
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

// Update an existing prayer request.
export const editPrayerRequest = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    updatePrayerRequest
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

// Delete a prayer request.
export const removePrayerRequest = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    deletePrayerRequest(id, (error: any, results: any) =>
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
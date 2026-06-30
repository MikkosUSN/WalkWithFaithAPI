import { Request, Response } from "express";

import {
    getAllVerses,
    getRandomVerse,
    getBooks,
    getVersesByBook,
    getVerseById,
    createVerse,
    updateVerse,
    deleteVerse
} from "../dao/VerseDAO";

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

// Return one random Bible verse for the Verse of the Day feature.
export const getVerseOfTheDay = (req: Request, res: Response) =>
{
    getRandomVerse((error: any, results: any) =>
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

// Return all Bible book names.
export const getBibleBooks = (req: Request, res: Response) =>
{
    getBooks((error: any, results: any) =>
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

// Return Bible verses by book and version.
export const getBibleVersesByBook = (req: Request, res: Response) =>
{
    const bookName = String(req.params.bookName);
    const version = String(req.params.version);

    getVersesByBook(bookName, version, (error: any, results: any) =>
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

// Return one Bible verse.
export const getBibleVerse = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    getVerseById(id, (error: any, results: any) =>
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

    updateVerse(id, req.body, (error: any, results: any) =>
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
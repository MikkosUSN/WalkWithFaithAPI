import { Request, Response } from "express";

import
{
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from "../dao/NoteDAO";

// Get all personal notes.
export const getNotes = (req: Request, res: Response) =>
{
    getAllNotes((err: any, results: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json(results);
    });
};

// Get one personal note by ID.
export const getNote = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    getNoteById(id, (err: any, results: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        if (results.length === 0)
        {
            res.status(404).json({ message: "Personal note not found." });
            return;
        }

        res.json(results[0]);
    });
};

// Add a new personal note.
export const addNote = (req: Request, res: Response) =>
{
    createNote(req.body, (err: any, results: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json(
        {
            message: "Personal note created successfully.",
            noteId: results.insertId
        });
    });
};

// Update an existing personal note.
export const editNote = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    updateNote(id, req.body, (err: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({ message: "Personal note updated successfully." });
    });
};

// Delete a personal note.
export const removeNote = (req: Request, res: Response) =>
{
    const id = Number(req.params.id);

    deleteNote(id, (err: any) =>
    {
        if (err)
        {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({ message: "Personal note deleted successfully." });
    });
};
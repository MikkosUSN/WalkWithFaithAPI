import connection from "../config/db";
import Note from "../models/Note";

// Get all personal notes from the database.
export const getAllNotes = (callback: any) =>
{
    const sql = "SELECT * FROM PersonalNote";

    connection.query(sql, callback);
};

// Get one personal note from the database.
export const getNoteById =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        SELECT *
        FROM PersonalNote
        WHERE NoteID = ?
    `;

    connection.query(sql, [id], callback);
};

// Add a new personal note into the database.
export const createNote = (note: Note, callback: any) =>
{
    const sql =
    `
        INSERT INTO PersonalNote
        (
            NoteTitle,
            NoteText,
            Category,
            DateAdded,
            SavedVerseID
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query
    (
        sql,
        [
            note.NoteTitle,
            note.NoteText,
            note.Category,
            note.DateAdded,
            note.SavedVerseID
        ],
        callback
    );
};

// Update an existing personal note.
export const updateNote =
(
    id: number,
    note: Note,
    callback: any
) =>
{
    const sql =
    `
        UPDATE PersonalNote
        SET
            NoteTitle = ?,
            NoteText = ?,
            Category = ?,
            DateAdded = ?,
            SavedVerseID = ?
        WHERE NoteID = ?
    `;

    connection.query
    (
        sql,
        [
            note.NoteTitle,
            note.NoteText,
            note.Category,
            note.DateAdded,
            note.SavedVerseID,
            id
        ],
        callback
    );
};

// Delete a personal note from the database.
export const deleteNote =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        DELETE FROM PersonalNote
        WHERE NoteID = ?
    `;

    connection.query(sql, [id], callback);
};
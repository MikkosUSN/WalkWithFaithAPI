import connection from "../config/db";
import { SavedVerse } from "../models/SavedVerse";

// Get all saved verses from the database.
export const getAllSavedVerses = (callback: any) =>
{
    const sql = "SELECT * FROM SavedVerse";

    connection.query(sql, callback);
};

// Get one saved verse from the database.
export const getSavedVerseById =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        SELECT *
        FROM SavedVerse
        WHERE SavedVerseID = ?
    `;

    connection.query(sql, [id], callback);
};

// Add a new saved verse into the database.
export const createSavedVerse = (savedVerse: SavedVerse, callback: any) =>
{
    const sql =
    `
        INSERT INTO SavedVerse
        (
            VerseID,
            Category,
            Keywords,
            IsFavorite,
            PersonalReflection,
            DateSaved
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query
    (
        sql,
        [
            savedVerse.VerseID,
            savedVerse.Category,
            savedVerse.Keywords,
            savedVerse.IsFavorite,
            savedVerse.PersonalReflection,
            savedVerse.DateSaved
        ],
        callback
    );
};

// Update an existing saved verse.
export const updateSavedVerse =
(
    id: number,
    savedVerse: SavedVerse,
    callback: any
) =>
{
    const sql =
    `
        UPDATE SavedVerse
        SET
            VerseID = ?,
            Category = ?,
            Keywords = ?,
            IsFavorite = ?,
            PersonalReflection = ?,
            DateSaved = ?
        WHERE SavedVerseID = ?
    `;

    connection.query
    (
        sql,
        [
            savedVerse.VerseID,
            savedVerse.Category,
            savedVerse.Keywords,
            savedVerse.IsFavorite,
            savedVerse.PersonalReflection,
            savedVerse.DateSaved,
            id
        ],
        callback
    );
};

// Delete a saved verse from the database.
export const deleteSavedVerse =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        DELETE FROM SavedVerse
        WHERE SavedVerseID = ?
    `;

    connection.query(sql, [id], callback);
};
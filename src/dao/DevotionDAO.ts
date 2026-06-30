import connection from "../config/db";
import { Devotion } from "../models/Devotion";

// Get all devotion entries from the database.
export const getAllDevotions = (callback: any) =>
{
    const sql = "SELECT * FROM Devotion";

    connection.query(sql, callback);
};

// Get one devotion entry from the database.
export const getDevotionById =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        SELECT *
        FROM Devotion
        WHERE DevotionID = ?
    `;

    connection.query(sql, [id], callback);
};

// Add a new devotion entry into the database.
export const createDevotion = (devotion: Devotion, callback: any) =>
{
    const sql =
    `
        INSERT INTO Devotion
        (
            DevotionTitle,
            DevotionText,
            Category,
            Author,
            DateAdded
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query
    (
        sql,
        [
            devotion.DevotionTitle,
            devotion.DevotionText,
            devotion.Category,
            devotion.Author,
            devotion.DateAdded
        ],
        callback
    );
};

// Update an existing devotion entry.
export const updateDevotion =
(
    id: number,
    devotion: Devotion,
    callback: any
) =>
{
    const sql =
    `
        UPDATE Devotion
        SET
            DevotionTitle = ?,
            DevotionText = ?,
            Category = ?,
            Author = ?,
            DateAdded = ?
        WHERE DevotionID = ?
    `;

    connection.query
    (
        sql,
        [
            devotion.DevotionTitle,
            devotion.DevotionText,
            devotion.Category,
            devotion.Author,
            devotion.DateAdded,
            id
        ],
        callback
    );
};

// Delete a devotion entry from the database.
export const deleteDevotion =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        DELETE FROM Devotion
        WHERE DevotionID = ?
    `;

    connection.query(sql, [id], callback);
};
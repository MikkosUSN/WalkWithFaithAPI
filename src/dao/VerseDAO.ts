import connection from "../config/db";
import { Verse } from "../models/Verse";

// Get all Bible verses from the database.
export const getAllVerses = (callback: any) =>
{
    const sql = "SELECT * FROM BibleVerse";

    connection.query(sql, callback);
};

// Get all Bible book names.
export const getBooks = (callback: any) =>
{
    const sql =
    `
        SELECT DISTINCT BookName
        FROM BibleVerse
        ORDER BY BookName
    `;

    connection.query(sql, callback);
};

// Get verses by book and Bible version.
export const getVersesByBook =
(
    bookName: string,
    version: string,
    callback: any
) =>
{
    const sql =
    `
        SELECT *
        FROM BibleVerse
        WHERE BookName = ?
        AND BibleVersion = ?
        ORDER BY ChapterNumber, VerseNumber
    `;

    connection.query
    (
        sql,
        [
            bookName,
            version
        ],
        callback
    );
};

// Get one Bible verse from the database.
export const getVerseById =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        SELECT *
        FROM BibleVerse
        WHERE VerseID = ?
    `;

    connection.query(sql, [id], callback);
};

// Add a new Bible verse into the database.
export const createVerse = (verse: Verse, callback: any) =>
{
    const sql =
    `
        INSERT INTO BibleVerse
        (
            BookName,
            ChapterNumber,
            VerseNumber,
            VerseText,
            BibleVersion
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query
    (
        sql,
        [
            verse.BookName,
            verse.ChapterNumber,
            verse.VerseNumber,
            verse.VerseText,
            verse.BibleVersion
        ],
        callback
    );
};

// Update an existing Bible verse.
export const updateVerse =
(
    id: number,
    verse: Verse,
    callback: any
) =>
{
    const sql =
    `
        UPDATE BibleVerse
        SET
            BookName = ?,
            ChapterNumber = ?,
            VerseNumber = ?,
            VerseText = ?,
            BibleVersion = ?
        WHERE VerseID = ?
    `;

    connection.query
    (
        sql,
        [
            verse.BookName,
            verse.ChapterNumber,
            verse.VerseNumber,
            verse.VerseText,
            verse.BibleVersion,
            id
        ],
        callback
    );
};

// Delete a Bible verse from the database.
export const deleteVerse =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        DELETE FROM BibleVerse
        WHERE VerseID = ?
    `;

    connection.query(sql, [id], callback);
};
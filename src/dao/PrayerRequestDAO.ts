import connection from "../config/db";
import { PrayerRequest } from "../models/PrayerRequest";

// Get all prayer requests from the database.
export const getAllPrayerRequests = (callback: any) =>
{
    const sql = "SELECT * FROM PrayerRequest";

    connection.query(sql, callback);
};

// Add a new prayer request into the database.
export const createPrayerRequest = (prayer: PrayerRequest, callback: any) =>
{
    const sql =
    `
        INSERT INTO PrayerRequest
        (
            PrayerTitle,
            PrayerText,
            PrayerCategory,
            IsAnswered,
            DateAdded
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query
    (
        sql,
        [
            prayer.PrayerTitle,
            prayer.PrayerText,
            prayer.PrayerCategory,
            prayer.IsAnswered,
            prayer.DateAdded
        ],
        callback
    );
};

// Update an existing prayer request.
export const updatePrayerRequest =
(
    id: number,
    prayer: PrayerRequest,
    callback: any
) =>
{
    const sql =
    `
        UPDATE PrayerRequest
        SET
            PrayerTitle = ?,
            PrayerText = ?,
            PrayerCategory = ?,
            IsAnswered = ?,
            DateAdded = ?
        WHERE PrayerID = ?
    `;

    connection.query
    (
        sql,
        [
            prayer.PrayerTitle,
            prayer.PrayerText,
            prayer.PrayerCategory,
            prayer.IsAnswered,
            prayer.DateAdded,
            id
        ],
        callback
    );
};

// Delete a prayer request from the database.
export const deletePrayerRequest =
(
    id: number,
    callback: any
) =>
{
    const sql =
    `
        DELETE FROM PrayerRequest
        WHERE PrayerID = ?
    `;

    connection.query(sql, [id], callback);
};
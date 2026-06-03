// Represents a devotion record used throughout the application.
export interface Devotion
{
    // Unique devotion ID from the database.
    DevotionID?: number;

    // Title of the devotion.
    DevotionTitle: string;

    // Devotion content.
    DevotionText: string;

    // Author of the devotion.
    Author: string;

    // Date the devotion was created.
    DateCreated: string;
}

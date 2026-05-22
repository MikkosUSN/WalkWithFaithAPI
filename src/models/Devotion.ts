// This model represents a devotion entry in the application.
export interface Devotion
{
    DevotionID?: number;
    DevotionTitle: string;
    DevotionText: string;
    Category: string;
    Author: string;
    DateAdded: string;
}
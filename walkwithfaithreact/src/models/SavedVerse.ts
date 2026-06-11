// This model represents a saved Bible verse in the application.
export interface SavedVerse
{
    SavedVerseID?: number;
    VerseID: number;
    Category: string;
    Keywords: string;
    IsFavorite: boolean;
    PersonalReflection: string;
    DateSaved: string;
}
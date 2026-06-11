// This model represents a Bible verse saved by the user.
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
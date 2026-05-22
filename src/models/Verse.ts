// This model represents a Bible verse in the application.
export interface Verse
{
    VerseID?: number;
    BookName: string;
    ChapterNumber: number;
    VerseNumber: number;
    VerseText: string;
    BibleVersion: string;
}
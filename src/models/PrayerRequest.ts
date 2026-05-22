// This model represents a prayer request in the application.
export interface PrayerRequest
{
    PrayerID?: number;
    PrayerTitle: string;
    PrayerText: string;
    PrayerCategory: string;
    IsAnswered: boolean;
    DateAdded: string;
}
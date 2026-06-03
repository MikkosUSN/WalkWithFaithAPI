// Represents a prayer request record used throughout the application.
export interface PrayerRequest
{
    // Unique prayer request ID from the database.
    PrayerID?: number;

    // Title of the prayer request.
    PrayerTitle: string;

    // Prayer details entered by the user.
    PrayerText: string;

    // Category used to organize prayer requests.
    PrayerCategory: string;

    // Shows whether the prayer has been answered.
    IsAnswered: number;  // 0 for No, 1 for Yes

    // Date the prayer request was added.
    DateAdded: string;
}

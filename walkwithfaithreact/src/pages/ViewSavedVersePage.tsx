import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { SavedVerse } from "../models/SavedVerse";
import type { Verse } from "../models/Verse";

import { getSavedVerseById } from "../services/SavedVerseService";
import { getVerseById } from "../services/VerseService";

function ViewSavedVersePage()
{
    const [savedVerse, setSavedVerse] = useState<SavedVerse>();
    const [verse, setVerse] = useState<Verse>();

    const { id } = useParams();

    // Load the saved verse when the page opens.
    useEffect(() =>
    {
        // Get the saved verse from the API.
        const loadSavedVerse = async () =>
        {
            const response = await getSavedVerseById(Number(id));

            setSavedVerse(response.data);

            const verseResponse =
                await getVerseById(response.data.VerseID);

            setVerse(verseResponse.data);
        };

        loadSavedVerse();
    }, [id]);

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                Saved Verse Details
            </h2>

            {
                savedVerse &&
                (
                    <div className="card mt-3">

                        <div className="card-body">

                            {
                                verse &&
                                (
                                    <div className="mb-4">

                                        <h4>
                                            {verse.BookName} {verse.ChapterNumber}:{verse.VerseNumber} ({verse.BibleVersion})
                                        </h4>

                                        <p className="mb-3">
                                            {verse.VerseText}
                                        </p>

                                        <hr />

                                    </div>
                                )
                            }

                            <p>
                                <strong>Category:</strong> {savedVerse.Category}
                            </p>

                            <p>
                                <strong>Keywords:</strong> {savedVerse.Keywords}
                            </p>

                            <p>
                                <strong>Favorite:</strong> {savedVerse.IsFavorite ? "★ Favorite" : "☆ Not Favorite"}
                            </p>

                            <p>
                                <strong>Personal Reflection:</strong> {savedVerse.PersonalReflection}
                            </p>

                            <p>
                                <strong>Date Saved:</strong> {savedVerse.DateSaved?.substring(0, 10)}
                            </p>

                            <div className="d-flex gap-2">

                                <Link
                                    className="btn btn-secondary"
                                    to="/saved-verses"
                                >
                                    Back
                                </Link>

                            </div>

                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default ViewSavedVersePage;
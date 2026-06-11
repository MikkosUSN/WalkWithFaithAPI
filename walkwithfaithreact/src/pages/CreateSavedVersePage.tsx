import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import type { Verse } from "../models/Verse";
import { getVerseById } from "../services/VerseService";
import { createSavedVerse } from "../services/SavedVerseService";

function CreateSavedVersePage()
{
    const [searchParams] = useSearchParams();
    const verseIDFromUrl = searchParams.get("verseID") || "";

    const [verse, setVerse] = useState<Verse>();
    const [category, setCategory] = useState("");
    const [keywords, setKeywords] = useState("");
    const [isFavorite, setIsFavorite] = useState(true);
    const [personalReflection, setPersonalReflection] = useState("");
    const [dateSaved, setDateSaved] = useState(
        new Date().toISOString().substring(0, 10)
    );

    const navigate = useNavigate();

    // Load the selected Bible verse when the page opens.
    useEffect(() =>
    {
        // Get the Bible verse from the API.
        const loadVerse = async () =>
        {
            if (verseIDFromUrl !== "")
            {
                const response = await getVerseById(Number(verseIDFromUrl));

                setVerse(response.data);
            }
        };

        loadVerse();
    }, [verseIDFromUrl]);

    // Save the new saved verse to the API.
    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();

        if (category === "")
        {
            alert("Please select a category.");

            return;
        }

        if (keywords.trim() === "")
        {
            alert("Please enter at least one keyword.");

            return;
        }

        if (personalReflection.trim() === "")
        {
            alert("Please enter a personal reflection.");

            return;
        }

        await createSavedVerse(
        {
            VerseID: Number(verseIDFromUrl),
            Category: category,
            Keywords: keywords,
            IsFavorite: isFavorite,
            PersonalReflection: personalReflection,
            DateSaved: dateSaved
        });

        alert("Your verse has been saved.");

        navigate("/saved-verses");
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                Create Saved Verse
            </h2>

            {
                verse &&
                (
                    <div className="card mb-4">

                        <div className="card-body">

                            <h5>
                                {verse.BookName} {verse.ChapterNumber}:{verse.VerseNumber} ({verse.BibleVersion})
                            </h5>

                            <p className="mb-0">
                                {verse.VerseText}
                            </p>

                        </div>

                    </div>
                )
            }

            <div className="card">

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label className="form-label">
                                Category
                            </label>

                            <select
                                className="form-select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">-SELECT-</option>
                                <option value="Faith">Faith</option>
                                <option value="Hope">Hope</option>
                                <option value="Prayer">Prayer</option>
                                <option value="Healing">Healing</option>
                                <option value="Wisdom">Wisdom</option>
                                <option value="Strength">Strength</option>
                                <option value="Love">Love</option>
                                <option value="Encouragement">Encouragement</option>
                                <option value="Salvation">Salvation</option>
                            </select>

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Keywords
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Personal Reflection
                            </label>

                            <textarea
                                className="form-control"
                                value={personalReflection}
                                onChange={(e) => setPersonalReflection(e.target.value)}
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Date Saved
                            </label>

                            <input
                                type="date"
                                className="form-control"
                                value={dateSaved}
                                onChange={(e) => setDateSaved(e.target.value)}
                            />

                        </div>

                        <div className="form-check mb-3">

                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={isFavorite}
                                onChange={(e) => setIsFavorite(e.target.checked)}
                            />

                            <label className="form-check-label">
                                Favorite Verse
                            </label>

                        </div>

                        <div className="d-flex gap-2">

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save Verse
                            </button>

                            <Link
                                className="btn btn-secondary"
                                to="/bible-verses"
                            >
                                Back
                            </Link>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default CreateSavedVersePage;
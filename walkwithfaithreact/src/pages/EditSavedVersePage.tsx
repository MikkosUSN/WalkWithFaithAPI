import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import type { Verse } from "../models/Verse";
import { getVerseById } from "../services/VerseService";
import { getSavedVerseById, updateSavedVerse } from "../services/SavedVerseService";

function EditSavedVersePage()
{
    const [verse, setVerse] = useState<Verse>();
    const [verseID, setVerseID] = useState("");
    const [category, setCategory] = useState("");
    const [keywords, setKeywords] = useState("");
    const [isFavorite, setIsFavorite] = useState(true);
    const [personalReflection, setPersonalReflection] = useState("");
    const [dateSaved, setDateSaved] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    // Load the saved verse when the page opens.
    useEffect(() =>
    {
        // Get the saved verse from the API.
        const loadSavedVerse = async () =>
        {
            const response = await getSavedVerseById(Number(id));

            setVerseID(response.data.VerseID.toString());
            setCategory(response.data.Category);
            setKeywords(response.data.Keywords);
            setIsFavorite(Boolean(response.data.IsFavorite));
            setPersonalReflection(response.data.PersonalReflection);
            setDateSaved(response.data.DateSaved.substring(0, 10));

            const verseResponse = await getVerseById(response.data.VerseID);

            setVerse(verseResponse.data);
        };

        loadSavedVerse();
    }, [id]);

    // Update the saved verse through the API.
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

        await updateSavedVerse(
            Number(id),
            {
                VerseID: Number(verseID),
                Category: category,
                Keywords: keywords,
                IsFavorite: isFavorite,
                PersonalReflection: personalReflection,
                DateSaved: dateSaved
            }
        );

        alert("Your changes have been saved.");

        navigate("/saved-verses");
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                Edit Saved Verse
            </h2>

            {
                verse &&
                (
                    <div className="card mb-4 border-warning-subtle">

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

            <div className="card border-warning-subtle">

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
                                rows={4}
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

                        <div className="d-flex align-items-center gap-2">

                            <button
                                type="submit"
                                className="btn-brown"
                            >
                                Update Verse
                            </button>

                            <Link
                                className="btn btn-secondary"
                                style={{
                                    height: "50px",
                                    minWidth: "90px",
                                    paddingLeft: "18px",
                                    paddingRight: "18px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                to="/saved-verses"
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

export default EditSavedVersePage;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { SavedVerse } from "../models/SavedVerse";
import type { Verse } from "../models/Verse";

import
{
    getSavedVerses,
    deleteSavedVerse
}
from "../services/SavedVerseService";

import { getVerseById } from "../services/VerseService";

type SavedVerseDisplay =
{
    savedVerse: SavedVerse;
    verse?: Verse;
};

function SavedVersePage()
{
    const [savedVerses, setSavedVerses] = useState<SavedVerseDisplay[]>([]);
    const [searchText, setSearchText] = useState("");

    // Load all saved verses when the page opens.
    useEffect(() =>
    {
        // Get saved verses from the API.
        const loadSavedVerses = async () =>
        {
            const response = await getSavedVerses();

            const savedVerseDisplayList = await Promise.all(
                response.data.map(async (savedVerse) =>
                {
                    const verseResponse = await getVerseById(savedVerse.VerseID);

                    return {
                        savedVerse: savedVerse,
                        verse: verseResponse.data
                    };
                })
            );

            setSavedVerses(savedVerseDisplayList);
        };

        loadSavedVerses();
    }, []);

    // Delete a saved verse.
    const handleDelete = async (id: number) =>
    {
        const confirmDelete = window.confirm(
            "Are you sure you want to remove this saved verse from your collection?"
        );

        if (confirmDelete)
        {
            await deleteSavedVerse(id);

            const response = await getSavedVerses();

            const savedVerseDisplayList = await Promise.all(
                response.data.map(async (savedVerse) =>
                {
                    const verseResponse = await getVerseById(savedVerse.VerseID);

                    return {
                        savedVerse: savedVerse,
                        verse: verseResponse.data
                    };
                })
            );

            setSavedVerses(savedVerseDisplayList);
        }
    };

    // Shorten the verse text for the saved verses table.
    const getVersePreview = (verseText: string) =>
    {
        if (verseText.length > 80)
        {
            return verseText.substring(0, 80) + "...";
        }

        return verseText;
    };

    // Filter saved verses by scripture, category, keywords, or reflection.
    const filteredSavedVerses = savedVerses.filter((item) =>
    {
        const searchValue = searchText.toLowerCase();

        const scripture =
            item.verse
                ? `${item.verse.BookName} ${item.verse.ChapterNumber}:${item.verse.VerseNumber} ${item.verse.BibleVersion} ${item.verse.VerseText}`
                : "";

        return (
            scripture.toLowerCase().includes(searchValue) ||
            item.savedVerse.Category.toLowerCase().includes(searchValue) ||
            item.savedVerse.Keywords.toLowerCase().includes(searchValue) ||
            item.savedVerse.PersonalReflection.toLowerCase().includes(searchValue)
        );
    });

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h2 className="mb-0">
                    Saved Verses
                </h2>

                <Link
                    className="btn btn-primary"
                    to="/create"
                >
                    Add Saved Verse
                </Link>

            </div>

            <div className="card mb-4">

                <div className="card-body">

                    <label className="form-label">
                        Search Saved Verses
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search by scripture, category, keyword, or reflection"
                    />

                </div>

            </div>

            <table className="table table-bordered table-striped align-middle">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Scripture</th>
                        <th>Preview</th>
                        <th>Category</th>
                        <th>Keywords</th>
                        <th>Favorite</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        filteredSavedVerses.map((item) =>
                        (
                            <tr key={item.savedVerse.SavedVerseID}>

                                <td>{item.savedVerse.SavedVerseID}</td>

                                <td>
                                    {
                                        item.verse
                                            ? (
                                                <>
                                                    <div>
                                                        {item.verse.BookName} {item.verse.ChapterNumber}:{item.verse.VerseNumber}
                                                    </div>

                                                    <small>
                                                        {item.verse.BibleVersion}
                                                    </small>
                                                </>
                                            )
                                            : "Loading..."
                                    }
                                </td>

                                <td>
                                    {
                                        item.verse
                                            ? getVersePreview(item.verse.VerseText)
                                            : "Loading..."
                                    }
                                </td>

                                <td>{item.savedVerse.Category}</td>

                                <td>{item.savedVerse.Keywords}</td>

                                <td>
                                    {
                                        item.savedVerse.IsFavorite
                                            ? "★ Favorite"
                                            : "☆ Not Favorite"
                                    }
                                </td>

                                <td>
                                    <div className="d-flex gap-2">

                                        <Link
                                            className="btn btn-info btn-sm"
                                            to={`/view/${item.savedVerse.SavedVerseID}`}
                                        >
                                            View
                                        </Link>

                                        <Link
                                            className="btn btn-warning btn-sm"
                                            to={`/edit/${item.savedVerse.SavedVerseID}`}
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                handleDelete(item.savedVerse.SavedVerseID!)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default SavedVersePage;
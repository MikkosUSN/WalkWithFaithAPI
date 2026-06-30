import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import type { Verse } from "../models/Verse";
import { getBooks, getVersesByBook } from "../services/VerseService";

function BibleVersePage()
{
    const [searchParams] = useSearchParams();

    const versionFromUrl = searchParams.get("version") || "";
    const bookFromUrl = searchParams.get("book") || "";

    const [books, setBooks] = useState<string[]>([]);
    const [selectedBook, setSelectedBook] = useState(bookFromUrl);
    const [selectedVersion, setSelectedVersion] = useState(versionFromUrl);
    const [verses, setVerses] = useState<Verse[]>([]);

    // Load all book names when the page opens.
    useEffect(() =>
    {
        // Get book names from the API.
        const loadBooks = async () =>
        {
            const response = await getBooks();

            setBooks(
                response.data.map(
                    (book: { BookName: string }) => book.BookName
                )
            );
        };

        loadBooks();
    }, []);

    // Load verses again when returning from the verse details page.
    useEffect(() =>
    {
        const loadSavedSearch = async () =>
        {
            if (bookFromUrl !== "" && versionFromUrl !== "")
            {
                const response = await getVersesByBook(
                    bookFromUrl,
                    versionFromUrl
                );

                setVerses(response.data);
            }
        };

        loadSavedSearch();
    }, [bookFromUrl, versionFromUrl]);

    // Get verses for the selected book and Bible version.
    const loadVerses = async () =>
    {
        if (selectedBook === "" || selectedVersion === "")
        {
            alert("Please select a Bible version and book.");

            return;
        }

        const response = await getVersesByBook(
            selectedBook,
            selectedVersion
        );

        setVerses(response.data);
    };

    // Shorten the verse text for the table.
    const getVersePreview = (verseText: string) =>
    {
        if (verseText.length > 90)
        {
            return verseText.substring(0, 90) + "...";
        }

        return verseText;
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                Bible Verses
            </h2>

            <div className="card mb-4 border-warning-subtle">

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Bible Version
                            </label>

                            <select
                                className="form-select"
                                value={selectedVersion}
                                onChange={(e) => setSelectedVersion(e.target.value)}
                            >
                                <option value="">-SELECT-</option>
                                <option value="KJV">KJV</option>
                                <option value="ASV">ASV</option>
                                <option value="YLT">YLT</option>
                            </select>

                        </div>

                        <div className="col-md-4 mb-3">

                            <label className="form-label">
                                Book
                            </label>

                            <select
                                className="form-select"
                                value={selectedBook}
                                onChange={(e) => setSelectedBook(e.target.value)}
                            >
                                <option value="">-SELECT-</option>

                                {
                                    books.map((book) =>
                                    (
                                        <option
                                            key={book}
                                            value={book}
                                        >
                                            {book}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>

                        <div className="col-md-4 mb-3 d-flex align-items-end">

                            <button
                                className="btn btn-brown w-100"
                                onClick={loadVerses}
                            >
                                Find Verses
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <table className="table table-bordered table-striped align-middle">

                <thead className="table-dark">

                    <tr>
                        <th>Book</th>
                        <th>Chapter</th>
                        <th>Verse</th>
                        <th>Preview</th>
                        <th>Version</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        verses.map((verse) =>
                        (
                            <tr key={verse.VerseID}>

                                <td>{verse.BookName}</td>

                                <td>{verse.ChapterNumber}</td>

                                <td>{verse.VerseNumber}</td>

                                <td>{getVersePreview(verse.VerseText)}</td>

                                <td>{verse.BibleVersion}</td>

                                <td>
                                    <div className="d-flex gap-2">

                                        <Link
                                            className="btn btn-info btn-sm"
                                            to={`/bible-verses/view/${verse.VerseID}?version=${selectedVersion}&book=${selectedBook}`}
                                        >
                                            View
                                        </Link>

                                        <Link
                                            className="btn btn-success btn-sm"
                                            to={`/create?verseID=${verse.VerseID}`}
                                        >
                                            Save Verse
                                        </Link>

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

export default BibleVersePage;
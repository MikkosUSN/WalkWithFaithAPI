import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import type { Verse } from "../models/Verse";
import { getVerseById } from "../services/VerseService";

function ViewBibleVersePage()
{
    const [verse, setVerse] = useState<Verse>();

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const version = searchParams.get("version") || "";
    const book = searchParams.get("book") || "";

    // Load the Bible verse when the page opens.
    useEffect(() =>
    {
        // Get the Bible verse from the API.
        const loadVerse = async () =>
        {
            const response = await getVerseById(Number(id));

            setVerse(response.data);
        };

        loadVerse();
    }, [id]);

    return (
        <div className="container mt-4">

            <h2 className="mb-3">
                Bible Verse Details
            </h2>

            {
                verse &&
                (
                    <div className="card mt-3">

                        <div className="card-body">

                            <h4>
                                {verse.BookName} {verse.ChapterNumber}:{verse.VerseNumber} ({verse.BibleVersion})
                            </h4>

                            <p className="mb-4">
                                {verse.VerseText}
                            </p>

                            <div className="d-flex gap-2">

                                <Link
                                    className="btn btn-success"
                                    to={`/create?verseID=${verse.VerseID}`}
                                >
                                    Save Verse
                                </Link>

                                <Link
                                    className="btn btn-secondary"
                                    to={`/bible-verses?version=${version}&book=${book}`}
                                >
                                    Back to Verses
                                </Link>

                            </div>

                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default ViewBibleVersePage;
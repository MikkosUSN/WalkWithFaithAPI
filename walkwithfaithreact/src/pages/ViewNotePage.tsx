import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { Note } from "../models/Note";
import { getNoteById } from "../services/NoteService";

const ViewNotePage = () =>
{
    const { id } = useParams();

    const [note, setNote] = useState<Note | null>(null);

    // Load one personal note when the page opens.
    useEffect(() =>
    {
        if (id)
        {
            getNoteById(Number(id))
                .then((response) =>
                {
                    setNote(response.data);
                })
                .catch((error) =>
                {
                    console.error("Error loading personal note:", error);
                });
        }
    }, [id]);

    if (!note)
    {
        return (
            <div className="container mt-4">
                <h1>Personal Note Details</h1>

                <p>Loading personal note...</p>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1>Personal Note Details</h1>

            <div className="card p-4">
                <h3>{note.NoteTitle}</h3>

                <p>
                    <strong>Category:</strong> {note.Category}
                </p>

                <p>
                    <strong>Date Added:</strong>{" "}
                    {note.DateAdded.substring(0, 10)}
                </p>

                <p>
                    <strong>Saved Verse ID:</strong> {note.SavedVerseID}
                </p>

                <hr />

                <p
                    style={{
                        fontSize: "17px",
                        lineHeight: "1.8"
                    }}
                >
                    {note.NoteText}
                </p>

                <div className="mt-4">
                    <Link
                        to="/notes/list"
                        className="btn btn-secondary"
                        style={{
                            height: "50px",
                            minWidth: "160px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        Back to Notes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewNotePage;
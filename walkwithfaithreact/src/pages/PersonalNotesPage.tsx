import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { Note } from "../models/Note";
import { deleteNote, getNotes } from "../services/NoteService";

const PersonalNotesPage = () =>
{
    const [notes, setNotes] = useState<Note[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Get all personal notes from the API.
    const loadNotes = () =>
    {
        getNotes()
            .then((response) =>
            {
                setNotes(response.data);
            })
            .catch((error) =>
            {
                console.error("Error loading personal notes:", error);
            });
    };

    // Load all personal notes when the page opens.
    useEffect(() =>
    {
        loadNotes();
    }, []);

    const handleDelete = (id: number) =>
    {
        const confirmDelete = window.confirm(
            "Are you sure you want to remove this personal note?"
        );

        if (confirmDelete)
        {
            deleteNote(id)
                .then(() =>
                {
                    alert("Your personal note has been deleted.");
                    loadNotes();
                })
                .catch((error) =>
                {
                    console.error("Error deleting personal note:", error);
                });
        }
    };

    const filteredNotes = notes.filter((note) =>
        note.NoteTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.NoteText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.Category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-11">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="mb-0">
                            Personal Notes
                        </h2>

                        <Link to="/notes/create" className="btn-brown">
                            Add Note
                        </Link>
                    </div>

                    <div className="card mb-4 border-warning-subtle">
                        <div className="card-body">
                            <label className="form-label">
                                Search Personal Notes
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by title, category, or note text"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>
                    </div>

                    <table className="table table-bordered table-striped align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Preview</th>
                                <th>Category</th>
                                <th>Date Added</th>
                                <th>Saved Verse ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredNotes.map((note) => (
                                <tr key={note.NoteID}>
                                    <td>{note.NoteID}</td>

                                    <td>{note.NoteTitle}</td>

                                    <td>
                                        {note.NoteText.length > 75
                                            ? `${note.NoteText.substring(0, 75)}...`
                                            : note.NoteText}
                                    </td>

                                    <td>{note.Category}</td>

                                    <td>{note.DateAdded.substring(0, 10)}</td>

                                    <td>{note.SavedVerseID}</td>

                                    <td>
                                        <div className="d-flex gap-2">
                                            <Link
                                                to={`/notes/view/${note.NoteID}`}
                                                className="btn btn-info btn-sm"
                                            >
                                                View
                                            </Link>

                                            <Link
                                                to={`/notes/edit/${note.NoteID}`}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(note.NoteID!)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PersonalNotesPage;
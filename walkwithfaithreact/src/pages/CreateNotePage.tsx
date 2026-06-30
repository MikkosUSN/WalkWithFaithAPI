import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Note } from "../models/Note";
import { createNote } from "../services/NoteService";

const CreateNotePage = () =>
{
    const navigate = useNavigate();

    const [note, setNote] = useState<Note>(
    {
        NoteTitle: "",
        NoteText: "",
        Category: "Reflection",
        DateAdded: new Date().toISOString().substring(0, 10),
        SavedVerseID: 2
    });

    // Update the form fields as the user types.
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) =>
    {
        setNote(
        {
            ...note,
            [event.target.name]: event.target.name === "SavedVerseID"
                ? Number(event.target.value)
                : event.target.value
        });
    };

    // Save the new personal note to the database.
    const handleSubmit = (event: React.FormEvent) =>
    {
        event.preventDefault();

        createNote(note)
            .then(() =>
            {
                alert("Your personal note has been saved.");
                navigate("/notes/list");
            })
            .catch((error) =>
            {
                console.error("Error creating personal note:", error);
            });
    };

    return (
        <div className="container mt-4">
            <h1>Create Personal Note</h1>

            <form className="card p-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Note Title</label>

                    <input
                        type="text"
                        className="form-control"
                        name="NoteTitle"
                        value={note.NoteTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Note Text</label>

                    <textarea
                        className="form-control"
                        name="NoteText"
                        rows={5}
                        value={note.NoteText}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>

                    <select
                        className="form-select"
                        name="Category"
                        value={note.Category}
                        onChange={handleChange}
                    >
                        <option value="Reflection">Reflection</option>
                        <option value="Prayer">Prayer</option>
                        <option value="Bible Study">Bible Study</option>
                        <option value="Sermon Notes">Sermon Notes</option>
                        <option value="Faith">Faith</option>
                        <option value="Encouragement">Encouragement</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Date Added</label>

                    <input
                        type="date"
                        className="form-control"
                        name="DateAdded"
                        value={note.DateAdded}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Saved Verse ID</label>

                    <input
                        type="number"
                        className="form-control"
                        name="SavedVerseID"
                        value={note.SavedVerseID}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="d-flex align-items-center gap-2">
                    <button type="submit" className="btn-brown">
                        Save Note
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        style={{
                            height: "50px",
                            minWidth: "90px",
                            paddingLeft: "18px",
                            paddingRight: "18px"
                        }}
                        onClick={() => navigate("/notes/list")}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNotePage;
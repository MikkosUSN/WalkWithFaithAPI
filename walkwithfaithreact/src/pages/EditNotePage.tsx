import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { Note } from "../models/Note";
import { getNoteById, updateNote } from "../services/NoteService";

const EditNotePage = () =>
{
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState<Note>(
    {
        NoteTitle: "",
        NoteText: "",
        Category: "Reflection",
        DateAdded: "",
        SavedVerseID: 1
    });

    // Load one personal note when the edit page opens.
    useEffect(() =>
    {
        if (id)
        {
            getNoteById(Number(id))
                .then((response) =>
                {
                    setNote(
                    {
                        ...response.data,
                        DateAdded: response.data.DateAdded.substring(0, 10)
                    });
                })
                .catch((error) =>
                {
                    console.error("Error loading personal note:", error);
                });
        }
    }, [id]);

    // Update the form fields as the user types.
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) =>
    {
        setNote(
        {
            ...note,
            [event.target.name]:
                event.target.name === "SavedVerseID"
                    ? Number(event.target.value)
                    : event.target.value
        });
    };

    // Save the updated personal note.
    const handleSubmit = (event: React.FormEvent) =>
    {
        event.preventDefault();

        if (id)
        {
            updateNote(Number(id), note)
                .then(() =>
                {
                    alert("Your personal note has been updated.");
                    navigate("/notes/list");
                })
                .catch((error) =>
                {
                    console.error("Error updating personal note:", error);
                });
        }
    };

    return (
        <div className="container mt-4">
            <h1>Edit Personal Note</h1>

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
                        Update Note
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

export default EditNotePage;
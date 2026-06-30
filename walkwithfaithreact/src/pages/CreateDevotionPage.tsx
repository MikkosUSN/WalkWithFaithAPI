import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Devotion } from "../models/Devotion";
import { createDevotion } from "../services/DevotionService";

const CreateDevotionPage = () =>
{
    const navigate = useNavigate();

    const [devotion, setDevotion] = useState<Devotion>(
    {
        DevotionTitle: "",
        DevotionText: "",
        Category: "Faith",
        Author: "Mikkos Thomas",
        DateAdded: new Date().toISOString().substring(0, 10)
    });

    // Update the form fields as the user types.
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) =>
    {
        setDevotion(
        {
            ...devotion,
            [event.target.name]: event.target.value
        });
    };

    // Save the new devotion to the database.
    const handleSubmit = (event: React.FormEvent) =>
    {
        event.preventDefault();

        createDevotion(devotion)
            .then(() =>
            {
                alert("Your devotion has been saved.");
                navigate("/devotions/list");
            })
            .catch((error) =>
            {
                console.error("Error creating devotion:", error);
            });
    };

    return (
        <div className="container mt-4">
            <h1>Create Devotion</h1>

            <form className="card p-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Devotion Title</label>

                    <input
                        type="text"
                        className="form-control"
                        name="DevotionTitle"
                        value={devotion.DevotionTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Devotion Text</label>

                    <textarea
                        className="form-control"
                        name="DevotionText"
                        rows={5}
                        value={devotion.DevotionText}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Category</label>

                    <select
                        className="form-select"
                        name="Category"
                        value={devotion.Category}
                        onChange={handleChange}
                    >
                        <option value="Faith">Faith</option>
                        <option value="Prayer">Prayer</option>
                        <option value="Grace">Grace</option>
                        <option value="Hope">Hope</option>
                        <option value="Strength">Strength</option>
                        <option value="Reflection">Reflection</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Author</label>

                    <input
                        type="text"
                        className="form-control"
                        name="Author"
                        value={devotion.Author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date Added</label>

                    <input
                        type="date"
                        className="form-control"
                        name="DateAdded"
                        value={devotion.DateAdded}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="d-flex align-items-center gap-2">
                    <button type="submit" className="btn-brown">
                        Save Devotion
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
                        onClick={() => navigate("/devotions/list")}
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateDevotionPage;
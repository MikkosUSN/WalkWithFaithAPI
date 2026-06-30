import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { Devotion } from "../models/Devotion";
import { getDevotionById, updateDevotion } from "../services/DevotionService";

const EditDevotionPage = () =>
{
    const { id } = useParams();
    const navigate = useNavigate();

    const [devotion, setDevotion] = useState<Devotion>(
    {
        DevotionTitle: "",
        DevotionText: "",
        Category: "Faith",
        Author: "",
        DateAdded: ""
    });

    // Load one devotion entry when the edit page opens.
    useEffect(() =>
    {
        if (id)
        {
            getDevotionById(Number(id))
                .then((response) =>
                {
                    setDevotion(
                    {
                        ...response.data,
                        DateAdded: response.data.DateAdded.substring(0, 10)
                    });
                })
                .catch((error) =>
                {
                    console.error("Error loading devotion:", error);
                });
        }
    }, [id]);

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

    const handleSubmit = (event: React.FormEvent) =>
    {
        event.preventDefault();

        if (id)
        {
            updateDevotion(Number(id), devotion)
                .then(() =>
                {
                    alert("Your devotion has been updated.");
                    navigate("/devotions/list");
                })
                .catch((error) =>
                {
                    console.error("Error updating devotion:", error);
                });
        }
    };

    return (
        <div className="container mt-4">
            <h1>Edit Devotion</h1>

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
                        Update Devotion
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

export default EditDevotionPage;
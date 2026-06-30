import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { Devotion } from "../models/Devotion";
import { deleteDevotion, getDevotions } from "../services/DevotionService";

const DevotionListPage = () =>
{
    const [devotions, setDevotions] = useState<Devotion[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Get all devotion entries from the API.
    const loadDevotions = () =>
    {
        getDevotions()
            .then((response) =>
            {
                setDevotions(response.data);
            })
            .catch((error) =>
            {
                console.error("Error loading devotions:", error);
            });
    };

    // Load all devotion entries when the page opens.
    useEffect(() =>
    {
        loadDevotions();
    }, []);

    // Delete one devotion entry from the database.
    const handleDelete = (id: number) =>
    {
        const confirmDelete = window.confirm(
            "Are you sure you want to remove this devotion?"
        );

        if (confirmDelete)
        {
            deleteDevotion(id)
                .then(() =>
                {
                    alert("Your devotion has been deleted.");
                    loadDevotions();
                })
                .catch((error) =>
                {
                    console.error("Error deleting devotion:", error);
                });
        }
    };

    // Filter devotions by title, text, category, or author.
    const filteredDevotions = devotions.filter((devotion) =>
        devotion.DevotionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        devotion.DevotionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        devotion.Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        devotion.Author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>My Devotions</h1>

                <Link to="/devotions/create" className="btn-brown">
                    Add Devotion
                </Link>
            </div>

            <div className="card p-3 mb-4 border-warning-subtle">
                <label className="form-label">
                    Search Devotions
                </label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title, category, author, or devotion text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Preview</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Date Added</th>
                            <th style={{ width: "190px" }}>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredDevotions.map((devotion) => (
                            <tr key={devotion.DevotionID}>
                                <td>{devotion.DevotionID}</td>

                                <td>{devotion.DevotionTitle}</td>

                                <td>
                                    {devotion.DevotionText.length > 75
                                        ? `${devotion.DevotionText.substring(0, 75)}...`
                                        : devotion.DevotionText}
                                </td>

                                <td>{devotion.Category}</td>

                                <td>{devotion.Author}</td>

                                <td>{devotion.DateAdded.substring(0, 10)}</td>

                                <td>
                                    <div className="d-flex gap-2">
                                        <Link
                                            to={`/devotions/view/${devotion.DevotionID}`}
                                            className="btn btn-info btn-sm"
                                        >
                                            View
                                        </Link>

                                        <Link
                                            to={`/devotions/edit/${devotion.DevotionID}`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(devotion.DevotionID!)}
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

            <Link to="/devotions" className="btn btn-secondary">
                Back to Devotions
            </Link>
        </div>
    );
};

export default DevotionListPage;
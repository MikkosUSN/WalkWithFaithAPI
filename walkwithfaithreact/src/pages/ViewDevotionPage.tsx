import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { Devotion } from "../models/Devotion";
import { getDevotionById } from "../services/DevotionService";

const ViewDevotionPage = () =>
{
    const { id } = useParams();

    const [devotion, setDevotion] = useState<Devotion | null>(null);

    // Load one devotion entry when the page opens.
    useEffect(() =>
    {
        if (id)
        {
            getDevotionById(Number(id))
                .then((response) =>
                {
                    setDevotion(response.data);
                })
                .catch((error) =>
                {
                    console.error("Error loading devotion:", error);
                });
        }
    }, [id]);

    if (!devotion)
    {
        return (
            <div className="container mt-4">
                <h1>Devotion Details</h1>

                <p>Loading devotion...</p>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1>Devotion Details</h1>

            <div className="card p-4">
                <h3>{devotion.DevotionTitle}</h3>

                <p>
                    <strong>Category:</strong> {devotion.Category}
                </p>

                <p>
                    <strong>Author:</strong> {devotion.Author}
                </p>

                <p>
                    <strong>Date Added:</strong>{" "}
                    {devotion.DateAdded.substring(0, 10)}
                </p>

                <hr />

                <p>{devotion.DevotionText}</p>

                <Link
                    to="/devotions/list"
                    className="btn btn-secondary mt-3"
                    style={{
                        width: "110px"
                    }}
                >
                    Back
                </Link>
            </div>
        </div>
    );
};

export default ViewDevotionPage;
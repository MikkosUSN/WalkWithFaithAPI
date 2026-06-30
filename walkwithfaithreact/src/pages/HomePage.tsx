import { useEffect, useState } from "react";

import type { Verse } from "../models/Verse";
import { getVerseOfTheDay } from "../services/VerseService";

const HomePage = () =>
{
    const [verse, setVerse] = useState<Verse | null>(null);

    // Load one random Bible verse when the Home page opens.
    useEffect(() =>
    {
        getVerseOfTheDay()
            .then((response) =>
            {
                setVerse(response.data);
            })
            .catch((error) =>
            {
                console.error("Error loading Verse of the Day:", error);
            });
    }, []);

    return (
        <div className="home-page">
            <div className="home-overlay">
                <div className="home-left">
                    <h1>Walk with Faith &amp; Grace</h1>

                    <p>
                        Strengthen your faith journey through scripture,
                        prayer, devotion, and daily encouragement.
                    </p>
                </div>

                <div className="home-verse">
                    <h2>Verse of the Day</h2>

                    {verse ? (
                        <>
                            <p className="verse-text">
                                "{verse.VerseText}"
                            </p>

                            <p className="verse-reference">
                                {verse.BookName} {verse.ChapterNumber}:{verse.VerseNumber} ({verse.BibleVersion})
                            </p>
                        </>
                    ) : (
                        <p className="verse-text">
                            Loading today's verse...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
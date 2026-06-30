import { Link } from "react-router-dom";
import devotionImage from "../assets/Gods-Will-Equals-the-Holy-Spirit.webp";

function DevotionPage()
{
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(44,28,18,0.55), rgba(44,28,18,0.55)), url(${devotionImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                padding: "70px",
                color: "white"
            }}
        >

            <div
                style={{
                    maxWidth: "720px",
                    textShadow: "2px 2px 6px rgba(0,0,0,0.75)"
                }}
            >

                <h1
                    style={{
                        fontWeight: "bold",
                        marginBottom: "18px"
                    }}
                >
                    Devotions
                </h1>

                <h3
                    style={{
                        marginBottom: "20px"
                    }}
                >
                    Pause, pray, and spend time with God.
                </h3>

                <h4>
                    Today's Scripture
                </h4>

                <p
                    style={{
                        fontSize: "20px",
                        marginBottom: "20px"
                    }}
                >
                    “Be still, and know that I am God.”
                </p>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "20px"
                    }}
                >
                    Psalm 46:10
                </p>

                <h4>
                    Reflection
                </h4>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "20px"
                    }}
                >
                    Stillness gives room for faith to breathe. In quiet moments,
                    God can bring peace, strength, and direction to the heart.
                </p>

                <h4>
                    Prayer
                </h4>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "30px"
                    }}
                >
                    Lord, help me slow down, trust Your presence, and walk with
                    peace today. Amen.
                </p>

                <p
                    style={{
                        fontSize: "17px",
                        lineHeight: "1.7",
                        marginBottom: "35px",
                        maxWidth: "620px"
                    }}
                >
                    Spend intentional time with God through daily scripture,
                    reflection, and prayer. Each devotion becomes a reminder of
                    His faithfulness and a place to record how He is working in
                    your life as you continue to grow in your walk with Christ.
                </p>

                <Link
                    to="/devotions/list"
                    style={{
                        display: "inline-block",
                        backgroundColor: "#2b170f",
                        color: "#fff3d6",
                        textDecoration: "none",
                        padding: "12px 26px",
                        borderRadius: "6px",
                        border: "2px solid #c47a20",
                        fontWeight: "bold",
                        fontSize: "16px",
                        letterSpacing: "0.5px"
                    }}
                >
                    View My Devotions
                </Link>

            </div>

        </div>
    );
}

export default DevotionPage;
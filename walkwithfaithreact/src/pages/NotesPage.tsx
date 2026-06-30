import { Link } from "react-router-dom";
import notesImage from "../assets/Old Bible Scrolls.jpg";

function NotesPage()
{
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(44,28,18,0.50), rgba(44,28,18,0.50)), url(${notesImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                paddingLeft: "70px",
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
                    Notes
                </h1>

                <h3
                    style={{
                        marginBottom: "20px"
                    }}
                >
                    Write down what God is teaching you today.
                </h3>

                <h4>
                    Scripture Thought
                </h4>

                <p
                    style={{
                        fontSize: "20px",
                        marginBottom: "20px"
                    }}
                >
                    “Thy word have I hid in mine heart, that I might not sin against thee.”
                </p>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "20px"
                    }}
                >
                    Psalm 119:11
                </p>

                <h4>
                    Reflection
                </h4>

                <p
                    style={{
                        fontSize: "18px",
                        marginBottom: "28px"
                    }}
                >
                    A quiet note can become a reminder of God&apos;s faithfulness,
                    direction, and grace in the middle of everyday life.
                </p>

                <p
                    style={{
                        fontSize: "17px",
                        lineHeight: "1.7",
                        marginBottom: "35px",
                        maxWidth: "620px"
                    }}
                >
                    Capture the lessons, prayers, and scriptures that God places
                    on your heart. Your personal notes become a journal of your
                    faith journey, allowing you to reflect on where God has
                    guided you and how He continues to work in your life each day.
                </p>

                <Link
                    to="/notes/list"
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
                    View My Personal Notes
                </Link>

            </div>

        </div>
    );
}

export default NotesPage;
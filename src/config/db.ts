import mysql from "mysql2";
import dotenv from "dotenv";

// Load the environment variables from the .env file.
dotenv.config();

// Create the MySQL database connection.
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to the database.
connection.connect((error) =>
{
    if (error)
    {
        console.log("Database connection failed.");
        console.log(error);
    }
    else
    {
        console.log("Connected to MySQL database.");
    }
});

// Export the connection so other files can use it.
export default connection;
import axios from "axios";

import type { Verse } from "../models/Verse";

// URL for the Bible Verse API.
const API_URL = "http://localhost:3000/api/verses";

// Get all Bible books.
export const getBooks = () =>
{
    return axios.get(`${API_URL}/books`);
};

// Get Bible verses by book and version.
export const getVersesByBook =
(
    bookName: string,
    version: string
) =>
{
    return axios.get<Verse[]>
    (
        `${API_URL}/book/${bookName}/version/${version}`
    );
};

// Get a Bible verse by ID.
export const getVerseById =
(
    id: number
) =>
{
    return axios.get<Verse>(`${API_URL}/${id}`);
};
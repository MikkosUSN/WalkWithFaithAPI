import axios from "axios";
import type { SavedVerse } from "../models/SavedVerse";

// URL for the Saved Verse API.
const API_URL = "http://localhost:3000/api/saved-verses";

// Get all saved verses.
export const getSavedVerses = () =>
{
    return axios.get<SavedVerse[]>(API_URL);
};

// Get a saved verse by ID.
export const getSavedVerseById =
(
    id: number
) =>
{
    return axios.get<SavedVerse>(`${API_URL}/${id}`);
};

// Create a new saved verse.
export const createSavedVerse =
(
    savedVerse: SavedVerse
) =>
{
    return axios.post(API_URL, savedVerse);
};

// Update an existing saved verse.
export const updateSavedVerse =
(
    id: number,
    savedVerse: SavedVerse
) =>
{
    return axios.put(`${API_URL}/${id}`, savedVerse);
};

// Delete a saved verse.
export const deleteSavedVerse =
(
    id: number
) =>
{
    return axios.delete(`${API_URL}/${id}`);
};
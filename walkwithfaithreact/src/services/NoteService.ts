import axios from "axios";

import type { Note } from "../models/Note";

const API_URL = "http://localhost:3000/api/notes";

// Get all personal notes from the API.
export const getNotes = () =>
{
    return axios.get<Note[]>(API_URL);
};

// Get one personal note by ID from the API.
export const getNoteById = (id: number) =>
{
    return axios.get<Note>(`${API_URL}/${id}`);
};

// Create a new personal note.
export const createNote = (note: Note) =>
{
    return axios.post(API_URL, note);
};

// Update an existing personal note.
export const updateNote = (id: number, note: Note) =>
{
    return axios.put(`${API_URL}/${id}`, note);
};

// Delete a personal note.
export const deleteNote = (id: number) =>
{
    return axios.delete(`${API_URL}/${id}`);
};
import axios from "axios";

import type { Devotion } from "../models/Devotion";

const API_URL = "http://localhost:3000/api/devotions";

// Get all devotions from the API.
export const getDevotions = () =>
{
    return axios.get<Devotion[]>(API_URL);
};

// Get one devotion by ID from the API.
export const getDevotionById = (id: number) =>
{
    return axios.get<Devotion>(`${API_URL}/${id}`);
};

// Create a new devotion.
export const createDevotion = (devotion: Devotion) =>
{
    return axios.post(API_URL, devotion);
};

// Update an existing devotion.
export const updateDevotion = (id: number, devotion: Devotion) =>
{
    return axios.put(`${API_URL}/${id}`, devotion);
};

// Delete a devotion.
export const deleteDevotion = (id: number) =>
{
    return axios.delete(`${API_URL}/${id}`);
};
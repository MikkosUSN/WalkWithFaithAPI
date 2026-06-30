import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import BibleVersePage from "./pages/BibleVersePage";
import ViewBibleVersePage from "./pages/ViewBibleVersePage";

import SavedVersePage from "./pages/SavedVersePage";
import CreateSavedVersePage from "./pages/CreateSavedVersePage";
import ViewSavedVersePage from "./pages/ViewSavedVersePage";
import EditSavedVersePage from "./pages/EditSavedVersePage";

import DevotionPage from "./pages/DevotionPage";
import DevotionListPage from "./pages/DevotionListPage";
import CreateDevotionPage from "./pages/CreateDevotionPage";
import ViewDevotionPage from "./pages/ViewDevotionPage";
import EditDevotionPage from "./pages/EditDevotionPage";

import NotesPage from "./pages/NotesPage";
import PersonalNotesPage from "./pages/PersonalNotesPage";
import CreateNotePage from "./pages/CreateNotePage";
import ViewNotePage from "./pages/ViewNotePage";
import EditNotePage from "./pages/EditNotePage";

import "./App.css";

const App = () =>
{
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/bible-verses" element={<BibleVersePage />} />
                <Route path="/bible-verses/view/:id" element={<ViewBibleVersePage />} />

                <Route path="/saved-verses" element={<SavedVersePage />} />
                <Route path="/create" element={<CreateSavedVersePage />} />
                <Route path="/saved-verses/create" element={<CreateSavedVersePage />} />
                <Route path="/view/:id" element={<ViewSavedVersePage />} />
                <Route path="/saved-verses/view/:id" element={<ViewSavedVersePage />} />
                <Route path="/edit/:id" element={<EditSavedVersePage />} />
                <Route path="/saved-verses/edit/:id" element={<EditSavedVersePage />} />

                <Route path="/devotions" element={<DevotionPage />} />
                <Route path="/devotions/list" element={<DevotionListPage />} />
                <Route path="/devotions/create" element={<CreateDevotionPage />} />
                <Route path="/devotions/view/:id" element={<ViewDevotionPage />} />
                <Route path="/devotions/edit/:id" element={<EditDevotionPage />} />

                <Route path="/notes" element={<NotesPage />} />
                <Route path="/notes/list" element={<PersonalNotesPage />} />
                <Route path="/notes/create" element={<CreateNotePage />} />
                <Route path="/notes/view/:id" element={<ViewNotePage />} />
                <Route path="/notes/edit/:id" element={<EditNotePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
import "./App.css";

import SavedVersePage from "./pages/SavedVersePage";
import CreateSavedVersePage from "./pages/CreateSavedVersePage";
import ViewSavedVersePage from "./pages/ViewSavedVersePage";
import EditSavedVersePage from "./pages/EditSavedVersePage";
import BibleVersePage from "./pages/BibleVersePage";
import ViewBibleVersePage from "./pages/ViewBibleVersePage";
import DevotionPage from "./pages/DevotionPage";
import NotesPage from "./pages/NotesPage";
import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
    return (
        <BrowserRouter>

            <NavBar />

            <Routes>

                <Route
                    path="/"
                    element={<BibleVersePage />}
                />

                <Route
                    path="/bible-verses"
                    element={<BibleVersePage />}
                />

                <Route
                    path="/bible-verses/view/:id"
                    element={<ViewBibleVersePage />}
                />

                <Route
                    path="/saved-verses"
                    element={<SavedVersePage />}
                />

                <Route
                    path="/create"
                    element={<CreateSavedVersePage />}
                />

                <Route
                    path="/view/:id"
                    element={<ViewSavedVersePage />}
                />

                <Route
                    path="/edit/:id"
                    element={<EditSavedVersePage />}
                />

                <Route
                    path="/devotions"
                    element={<DevotionPage />}
                />

                <Route
                    path="/notes"
                    element={<NotesPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
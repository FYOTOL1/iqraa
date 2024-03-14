import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RatePage from "./pages/RatePage.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import SuggestionsPage from "./pages/SuggestionsPage.jsx";
// Admin
import AdminHome from "./pages/admin/AdminHome.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";
import AdminSuggestions from "./pages/admin/AdminSuggestions.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rate" element={<RatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        {/* Admin */}
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/suggestions" element={<AdminSuggestions />} />
        <Route
          path="*"
          element={
            <h1 className="text-5xl font-bold text-red-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

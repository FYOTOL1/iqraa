import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Group_New_Project_Page from "./pages/Group_New_Project_Page.jsx";
import NewSuggestionsPage from "./pages/NewSuggestionsPage.jsx";
import NewProjectPage from "./pages/admin/NewProjectPage.jsx";
import SuggestionsPage from "./pages/SuggestionsPage.jsx";
import NewGroupPage from "./pages/NewGroupPage.jsx";
import Projects from "./pages/ProjectsPage.jsx";
import RatePage from "./pages/RatePage.jsx";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

// Admin
import AdminSuggestions from "./pages/admin/AdminSuggestions.jsx";
import AdminProjects from "./pages/admin/AdminProjects.jsx";
import AdminNewRate from "./pages/admin/AdminNewRate.jsx";
import NewUserPage from "./pages/admin/NewUserPage.jsx";
import AdminGroups from "./pages/admin/AdminGroups.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";
import AdminRate from "./pages/admin/AdminRate.jsx";
import MessagePage from "./pages/MessagePage.jsx";
import GroupsPage from "./pages/GroupsPage.jsx";
import GroupPage from "./pages/GroupPage.jsx";

axios.defaults.baseURL = "https://ahmed.doplario.com/iqraa/v1/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rate" element={<RatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/groups/:id" element={<GroupPage />} />
        <Route path="/groups/:id/new" element={<Group_New_Project_Page />} />
        <Route path="/groups/new" element={<NewGroupPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        <Route path="/suggestions/new" element={<NewSuggestionsPage />} />
        {/* Admin */}
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/new" element={<NewUserPage />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/projects/new" element={<NewProjectPage />} />
        <Route path="/admin/suggestions" element={<AdminSuggestions />} />
        <Route path="/admin/rate" element={<AdminRate />} />
        <Route path="/admin/rate/new" element={<AdminNewRate />} />
        <Route path="/admin/groups" element={<AdminGroups />} />
        <Route
          path="*"
          element={<MessagePage color={"gray"} pathName="الرئيسية" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

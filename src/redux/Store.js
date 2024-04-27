import { configureStore } from "@reduxjs/toolkit";
import ProjectsSlice from "./reducers/ProjectsSlice";
import UsersSlice from "./reducers/UsersSlice";
import SuggestionsSlice from "./reducers/SuggestionsSlice";
import NotificationsSlice from "./reducers/NotificationsSlice";
import RateSlice from "./reducers/RateSlice";
import GroupsSlice from "./reducers/GroupsSlice";

const store = configureStore({
  reducer: {
    projects: ProjectsSlice,
    users: UsersSlice,
    suggs: SuggestionsSlice,
    nots: NotificationsSlice,
    rates: RateSlice,
    groups: GroupsSlice,
  },
});

export default store;

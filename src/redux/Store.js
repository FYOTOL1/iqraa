import { configureStore } from "@reduxjs/toolkit";
import ProjectsSlice from "./reducers/ProjectsSlice";

const store = configureStore({
  reducer: {
    PS: ProjectsSlice,
  },
});

export default store;

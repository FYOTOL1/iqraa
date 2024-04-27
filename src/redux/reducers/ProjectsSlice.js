import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProject = createAsyncThunk(
  "ProjectsSlice/GetProject",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/projects.php", {
        id: data.id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const GetProjects = createAsyncThunk(
  "ProjectsSlice/GetProjects",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/projects.php");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PostProject = createAsyncThunk(
  "ProjectsSlice/PostProjects",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/projects.php", {
        user_id: data.user_id,
        project_name: data.project_name,
        leader_id: data.leader_id,
        group_id: data.group_id,
        subject: data.subject,
        done: data.done,
        date: new Date(),
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PatchProject = createAsyncThunk(
  "ProjectsSlice/PatchProject",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch("/projects.php", {
        id: data.id,
        project_name: data.project_name,
        subject: data.subject,
        done: data.done,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const DeleteProject = createAsyncThunk(
  "ProjectsSlice/DeleteProject",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios
        .post("/project.php", { id: data.id })
        .then(() => dispatch(GetProjects()));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

const ProjectsSlice = createSlice({
  name: "ProjectsSlice",
  initialState: {
    data: [],
    filter: null,
    loading: false,
    error: null,
  },

  reducers: {
    search(state, { payload }) {
      state.filter = state.data.filter((e) =>
        e.project_name
          .toLowerCase()
          .includes(payload.trim(" ", "").toLowerCase())
      );
    },
  },

  extraReducers: (builder) => {
    builder
      // Get Project
      .addCase(GetProject.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetProject.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetProject.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Get Projects
      .addCase(GetProjects.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetProjects.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetProjects.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Patch Projects
      .addCase(PatchProject.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PatchProject.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PatchProject.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Delete Project
      .addCase(DeleteProject.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteProject.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(DeleteProject.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { search } = ProjectsSlice.actions;

export default ProjectsSlice.reducer;

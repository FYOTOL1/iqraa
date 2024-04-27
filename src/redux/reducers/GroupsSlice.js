import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PostNotification } from "./NotificationsSlice";

export const GetGroup = createAsyncThunk(
  "Group/GetGroup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get("/groups.php?id=" + data.id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const GetGroups = createAsyncThunk(
  "Group/GetGroups",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/groups.php");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PostGroup = createAsyncThunk(
  "Group/PostGroups",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/groups.php", {
        group_name: data.group_name,
        leader_id: localStorage.getItem("id"),
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PatchGroup = createAsyncThunk(
  "Group/PatchGroup",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios
        .patch("/groups.php", {
          id: data.id,
          status: data.status,
        })
        .then((res) => {
          const to_id = res.data.user_id;
          let from_id = localStorage.getItem("id");
          switch (data.status) {
            case 3:
              dispatch(
                PostNotification({
                  from_id,
                  to_id,
                  message: "تم قبول مجموعتك",
                  status: 3,
                })
              );
              break;
            case 1:
              dispatch(
                PostNotification({
                  from_id,
                  to_id,
                  message: "تم رفض مجموعتك",
                  status: 1,
                })
              );
              break;
            default:
              break;
          }
        });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

// Team
export const PostTeam = createAsyncThunk(
  "Group/PostTeam",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/groups_teams.php", {
        users_id: [...data.users_id],
        group_id: data.group_id,
        date: new Date(),
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const DeleteTeam = createAsyncThunk(
  "Group/DeleteTeam",
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(`/groups_teams.php?id=${data.id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

// Chat
export const PostChat = createAsyncThunk(
  "Group/PostChat",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/chats.php", {
        user_id: data.user_id,
        group_id: data.group_id,
        content: data.content,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

const GroupsSlice = createSlice({
  name: "groups",
  initialState: {
    data: [],
    group: [],
    chat: [],
    filter: null,
    loading: false,
    error: null,
  },

  reducers: {
    search(state, { payload }) {
      state.filter = state.data.filter((e) =>
        e?.group_name
          ?.toLowerCase()
          ?.includes(payload.trim(" ", "")?.toLowerCase())
      );
    },
  },

  extraReducers: (builder) => {
    builder
      // Get Group
      .addCase(GetGroup.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetGroup.fulfilled, (state, { payload }) => {
        state.group = payload[0];
        state.chat = state?.group?.chat;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetGroup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Get Groups
      .addCase(GetGroups.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetGroups.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetGroups.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Patch Groups
      .addCase(PatchGroup.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PatchGroup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PatchGroup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // Post Chat
      .addCase(PostChat.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostChat.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PostChat.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // Post Team
      .addCase(PostTeam.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostTeam.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PostTeam.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Delete Team
      .addCase(DeleteTeam.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteTeam.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(DeleteTeam.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { search } = GroupsSlice.actions;

export default GroupsSlice.reducer;

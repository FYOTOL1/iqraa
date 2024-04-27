import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetNotifications = createAsyncThunk(
  "Notification/GetNotifications",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notifications.php");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PostNotification = createAsyncThunk(
  "Notification/PostNotifications",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios
        .post("/notifications.php", {
          from_id: data.from_id,
          to_id: data.to_id,
          message: data.message,
          status: data.status,
          date: new Date(),
        })
        .then(() => dispatch(GetNotifications()));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

export const DeleteNotification = createAsyncThunk(
  "Notification/DeleteNotification",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.post("/deletenots.php", {
        to_id: data.to_id,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

const NotificationsSlice = createSlice({
  name: "NotificationsSlice",
  initialState: {
    data: [],
    filter: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      //  Get Notifications
      .addCase(GetNotifications.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetNotifications.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetNotifications.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Post Notifications
      .addCase(PostNotification.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostNotification.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(PostNotification.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Post Notifications
      .addCase(DeleteNotification.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteNotification.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(DeleteNotification.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default NotificationsSlice.reducer;

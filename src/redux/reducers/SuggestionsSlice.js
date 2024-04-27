import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PostNotification } from "./NotificationsSlice";

export const GetSuggestion = createAsyncThunk(
  "Suggestion/GetSuggestion",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/suggestions.php", {
        id: data.id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const GetSuggestions = createAsyncThunk(
  "Suggestion/GetSuggestions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/suggestions.php");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PostSuggestion = createAsyncThunk(
  "Suggestion/PostSuggestions",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/suggestions.php", {
        user_id: data.user_id,
        suggs_name: data.suggs_name,
        content: data.content,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PatchSuggestion = createAsyncThunk(
  "Suggestion/PatchSuggestion",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios
        .patch("/suggestions.php", {
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
                  message: "تم قبول اقتراحك",
                  status: 3,
                })
              );
              break;
            case 1:
              dispatch(
                PostNotification({
                  from_id,
                  to_id,
                  message: "تم رفض اقتراحك",
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

const SuggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    data: [],
    filter: null,
    loading: false,
    error: null,
  },

  reducers: {
    search(state, { payload }) {
      state.filter = state.data.filter((e) =>
        e.suggs_name.toLowerCase().includes(payload.trim(" ", "").toLowerCase())
      );
    },
  },

  extraReducers: (builder) => {
    builder
      // Get Suggestion
      .addCase(GetSuggestion.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetSuggestion.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetSuggestion.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Get Suggestions
      .addCase(GetSuggestions.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetSuggestions.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetSuggestions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Patch Suggestions
      .addCase(PatchSuggestion.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PatchSuggestion.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(PatchSuggestion.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { search } = SuggestionsSlice.actions;

export default SuggestionsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetRate = createAsyncThunk(
  "Rate/GetRate",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/rates.php", {
        id: data.id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PostRate = createAsyncThunk(
  "Rate/PostRates",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.post("/rates.php", {
        user_id: data.user_id,
        finally_rate: data.finally_rate,
        mid_rate: data.mid_rate,
        date: new Date(),
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const PatchRate = createAsyncThunk(
  "Rate/PatchRate",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.patch("/rates.php", {
        id: data.id,
        mid_rate: data.mid_rate,
        finally_rate: data.finally_rate,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

export const DeleteRate = createAsyncThunk(
  "Rate/DeleteRate",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios.post("/deleterate.php", {
        id: data.id,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

const RatesSlice = createSlice({
  name: "rates",
  initialState: {
    data: [],
    filter: null,
    success: false,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      // Get Rate
      .addCase(GetRate.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetRate.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetRate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Patch Rates
      .addCase(PatchRate.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PatchRate.fulfilled, (state, { payload }) => {
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(PatchRate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Post Rates
      .addCase(PostRate.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostRate.fulfilled, (state, { payload }) => {
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(PostRate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //  Delete Rate
      .addCase(DeleteRate.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteRate.fulfilled, (state, { payload }) => {
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(DeleteRate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default RatesSlice.reducer;

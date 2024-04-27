import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginUser = createAsyncThunk(
  "users/Login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/login.php", {
        email: data.email,
        password: data.password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const GetUser = createAsyncThunk(
  "users/GetUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/getuser.php", {
        id: data.id,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const GetUsers = createAsyncThunk(
  "users/GetUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users.php");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PostUser = createAsyncThunk(
  "users/PostUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/users.php", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const PatchUser = createAsyncThunk(
  "users/PatchUser",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch("/users.php", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message());
    }
  }
);

export const DeleteUser = createAsyncThunk(
  "users/DeleteUser",
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const response = await axios
        .post("/deleteuser.php", { id: data.id })
        .then(() => dispatch(GetUsers()));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message());
    }
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    user: [],
    filter: [],
    messages: [],
    rates: [],
    status: "user",
    logined: null,
    loading: false,
    error: null,
  },

  reducers: {
    search(state, { payload }) {
      state.filter = state.data.filter((e) =>
        e.username.toLowerCase().includes(payload.trim(" ", "").toLowerCase())
      );
    },
    search_rates(state, { payload }) {
      state.filter = state.rates.filter((e) =>
        e != null
          ? e.username
              .toLowerCase()
              .includes(payload.trim(" ", "").toLowerCase())
          : []
      );
    },
  },

  extraReducers: (builder) => {
    builder
      // Login
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, { payload }) => {
        localStorage.setItem("id", payload[0].id);
        state.logined = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(LoginUser.rejected, (state) => {
        state.loading = false;
        state.error = "كلمة المرور او البريد الاكتروني غير صحيح";
      })
      // Get User
      .addCase(GetUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetUser.fulfilled, (state, { payload }) => {
        if (payload.length) {
          state.user = payload[0];
          state.messages = payload[0].messages;

          switch (state.user.status) {
            case "1":
              state.status = "user";
              break;
            case "2":
              state.status = "leader";
              break;
            case "3":
              state.status = "subAdmin";
              break;
            case "4":
              state.status = "admin";
              break;
          }
          console.log(payload[0]);
          state.loading = false;
          state.error = null;
        }
      })
      .addCase(GetUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Get Users
      .addCase(GetUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetUsers.fulfilled, (state, { payload }) => {
        state.data = payload;
        let rates = [];
        payload.map((e) => {
          rates.push(e.rate[0]);
        });
        state.rates = rates;
        state.loading = false;
        state.error = null;
      })
      .addCase(GetUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Post User
      .addCase(PostUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostUser.fulfilled, (state) => {
        window.location.pathname = "/admin/users";
        state.loading = false;
        state.error = null;
      })
      .addCase(PostUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Delete User
      .addCase(DeleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(DeleteUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { search, search_rates } = UsersSlice.actions;

export default UsersSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getdetails = createAsyncThunk("na", async (id,ThunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/apiiii");
    console.log(data.data.data)

    return data.data.data;

  } catch (error) {

    return error;
  }
});

const counterSlice = createSlice({
  name: "ggh",
  initialState: {
    user: [],
    loading: true,
    error: null,
    filterUser: [],
    allusers: [],
    women: [],
  },
  reducers: {
    check: (state) => {
      state.user = state.filterUser;
    },
    all: (state) => {
      state.user = state.allusers;
    },
    woall: (state) => {
      state.user = state.women;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getdetails.pending, () => {});
    builder.addCase(getdetails.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      
      console.log(action.payload);
      state.filterUser = action.payload.filter(
        (item) => item.cateogry === "men"
      );
      console.log(state.filterUser);

      state.allusers = action.payload.data.filter(
        (item) => item.cateogry === "men" || "women"
      );

      state.women = action.payload.data.filter(
        (item) => item.cateogry === "women"
      );
    });

    builder.addCase(getdetails.rejected, () => {});
  },
});

export default counterSlice.reducer;
export const { check, all, woall } = counterSlice.actions;



// "http://localhost:1337/api/products?populate=*"
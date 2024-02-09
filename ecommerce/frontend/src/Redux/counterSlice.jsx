import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

export const getdetails = createAsyncThunk("na", async () => {
  try {
    const data = await axios.get("http://localhost:1337/api/products?populate=*")
    return data.data;
  } catch (error) {
    return error;
  }
});

const counterSlice = createSlice({
  name: "ggh",
  initialState: { user: [], loading: true, error: null, filterUser: [] },
  reducers: undefined,
reducers:{

check:()=>{
  const[normal, setnormal]= useState(true)

  setnormal(false)

}

},
  extraReducers: (builder) => {
    builder.addCase(getdetails.pending, () => { });
    builder.addCase(getdetails.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload.data
      console.log(action.payload.data)
      state.filterUser = action.payload.data.filter(
        (item) => item.attributes.productCateogry === "men"
      );
      console.log(state.filterUser);
    });

    builder.addCase(getdetails.rejected, () => { });
  },
});

export default counterSlice.reducer;
export const {check} = counterSlice.actions
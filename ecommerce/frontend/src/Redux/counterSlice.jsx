import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getdetails = createAsyncThunk("na", async (id,ThunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/apiiii");
    console.log(data)

    return data;

  } catch (error) {

    return error;
  }
});



export const getdetailsById = createAsyncThunk("la", async(id, ThunkApi)=>{
console.log(id)
try {
  const data = await axios.get("http://localhost:3001/apiiii")
const chosen = data.data.data.filter((item)=>{
  return item._id === id 


  })
  return data

} catch (error) {
  return error
}



})

const userData =  {user:[],userById:[], loading: true, error: null,filterUser: [],
}
const counterSlice = createSlice({
  name: "ggh",
  initialState: userData,

  extraReducers: ( builder) => { 

builder.addCase(getdetails.fulfilled,(state, action)=>{

state.user = action.payload.data.data
console.log(action.payload.data.data)

})

builder.addCase(getdetailsById.fulfilled,(state,action )=>{

  state.userById = action.payload
console.log(action.payload.data)

})


  },
  reducers: undefined
});




export default counterSlice.reducer;
// export const { check, all, woall } = counterSlice.actions;



// "http://localhost:1337/api/products?populate=*"

// reducers: {
//   check: (state) => {
//     state.user = state.filterUser;
//   },
//   all: (state) => {
//     state.user = state.allusers;
//   },
//   woall: (state) => {
//     state.user = state.women;
//   },
// },

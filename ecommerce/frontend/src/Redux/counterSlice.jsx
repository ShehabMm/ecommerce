import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




// @ts-ignore
export const getData = createAsyncThunk('na',async()=>{

try {
  
const data = await axios.get("`${import.meta.env.VITE_BASEURL}/api/products?populate=*`")
return data.data

} catch (error) {
  return error
}

} )




const counterSlice = createSlice({
  name: "users",
  initialState: { user: [] },
  reducers: undefined,

extraReducers:(builder)=>{

// @ts-ignore
builder.addCase(getData.pending,()=>{})
// @ts-ignore
builder.addCase(getData.fullfiled,(state, action)=>{
state.user = action.payload 
  console.log(action.payload   ) 
})
// @ts-ignore

builder.addCase(getData.rejected,()=>{})




}



});


export default counterSlice.reducer

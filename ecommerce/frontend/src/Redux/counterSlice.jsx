import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




export const getdetails = createAsyncThunk('na',async()=>{

try {
  
// @ts-ignore
const data = await axios.get(`${import.meta.env.VITE_BASEURL}/api/products?populate=*`)
return data.data

} catch (error) {
  return error
}

} )




const counterSlice = createSlice({
  name: "users",
  initialState: { user: [], loading:true, error:null },
  reducers: undefined,

extraReducers:(builder)=>{

builder.addCase(getdetails.pending,()=>{})
builder.addCase(getdetails.fulfilled,(state, action)=>{
state.user = action.payload 
  console.log(action.payload   ) 
})

builder.addCase(getdetails.rejected,()=>{})




}



});


export default counterSlice.reducer

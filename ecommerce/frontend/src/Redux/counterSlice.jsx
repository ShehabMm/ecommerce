import {createSlice} from "@reduxjs/toolkit"


const data ={

count:0

}

const counterSlice = createSlice({
  name: "productData",
  initialState: data,
  reducers: {

increment:()=>{},
decrement:()=>{}

  }
  



}) 

export default counterSlice.reducer


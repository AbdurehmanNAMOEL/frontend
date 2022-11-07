import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("profile")).token)}`    
    }
  return req;
})

export const uploadStone =createAsyncThunk('gemstone/uploadStone',async({stoneData,toast})=>{
    try {
         const response = await axios.post('https://seller-site.herokuapp.com/home/upload',stoneData)
         toast.success('successfully created')
         return response.data
    } catch (error) {
        toast.error(error.message)
    }
})

export const getStone =createAsyncThunk('gemstone/getStone',async()=>{
    try {
         const response = await axios.get('https://seller-site.herokuapp.com/home/getStone')
         return response.data
    } catch (error) {
        console.log(error.message)
    }
})


export const deleteStone =createAsyncThunk('gemstone/deleteStone',async({id,toast})=>{
    console.log(id,'hello')
    try {
         const response = await axios.delete(`https://seller-site.herokuapp.com/home/delete/${id}`)
         toast.success('successfully deleted')
         return response.data
    } catch (error) {
        console.log(error.message)
    }
})

export const editedStone =createAsyncThunk('gemstone/editedStone',async({id,newData,toast,navigate})=>{
   
    try {
         const response = await axios.put(`https://seller-site.herokuapp.com/home/edit/${id}`,newData)
         toast.success('successfully edited')
         navigate('/')
         return response.data
    } catch (error) {
        console.log(error.message)
    }
})



const createStoneSlice= createSlice({
    name:'gemstone',
    initialState:{
        stone:[],
        stoneList:[],
        load:false,
        error:''
    },
    extraReducers:{
        [uploadStone.pending]:(state,action)=>{
            state.load=true
        },
         [uploadStone.fulfilled]:(state,action)=>{
            state.load=false
            state.stone= action.payload
        },
         [uploadStone.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        },

         [getStone.pending]:(state,action)=>{
            state.load=true
        },
         [getStone.fulfilled]:(state,action)=>{
            state.load=false
            state.stoneList= action.payload
        },
         [getStone.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        },

        [deleteStone.pending]:(state,action)=>{
            state.load=true
        },
         [deleteStone.fulfilled]:(state,action)=>{
           state.load=false  
          const {arg:id} = action.meta
         if(id){
            
            state.stone=state.stone.filter(item=>item._id!==id)
            state.stoneList=state.stoneList.filter(item=>item._id!==id)
        }
        },
         [deleteStone.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        },

        [editedStone.pending]:(state,action)=>{
            state.load=true
        },
         [editedStone.fulfilled]:(state,action)=>{
            state.load=false 
            const id =action.payload
            if(id) {
            state.stone=state.stone.map(item=>item._id=== action.payload ? action.payload:item)
            state.stoneList=state.stoneList.map(item=>item._id=== action.payload? action.payload:item)
            }
        },
         [editedStone.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        }
    }
})
export const editStone =()=>{}

export const stoneReducer = createStoneSlice.reducer

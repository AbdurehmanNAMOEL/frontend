import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("profile")).token)}`
    }
  return req;
})

export const createAccount =createAsyncThunk("user/createAccount",async({userData,toast,navigate})=>{
   
    try {
         const response = await axios.post('https://seller-site.herokuapp.com/home/signup',userData)
         toast.success(`welcome ${userData.name}`)
         navigate('/home')
         return response.data
    } catch (error) {
       toast.error(error.response.data.error)
    }
})

export const logIn =createAsyncThunk('user/logIn',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post('https://seller-site.herokuapp.com/home/signIn',userData)
         toast.success(`welcome ${userData.name}`)
         navigate('/home')
         return response.data
    } catch (error) {
        toast.error(error.response.data.error)
    }
})

export const getSeller =createAsyncThunk('user/getUser',async()=>{
    try {
         const response = await axios.get('https://seller-site.herokuapp.com/home/getUser')
         return response.data
        
    } catch (error) {
       console.log(error.response.data.error)
    }
})


const createUserSlice= createSlice({
    name:'user',
    initialState:{
        user:null,
        load:false,
        isLoggedIn:false,
        error:''
    },
    reducers:{
       logOut:(state,action)=>{
        state.user=[]
        state.isLoggedIn= false
        localStorage.removeItem('profile')
       },
       getUser:(state,action)=>{
        state.user= action.payload
       }
    },
    extraReducers:{
        [createAccount.pending]:(state,action)=>{
            state.load=true
        },
         [createAccount.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
        },
         [createAccount.rejected]:(state,action)=>{
            state.load=true
            state.error= 'error'
        },

         [logIn.pending]:(state,action)=>{
            state.load=true
          
        },
         [logIn.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.isLoggedIn=true
        },
         [logIn.rejected]:(state,action)=>{
            state.load=true
            state.error= action.payload.message
        },

        [getSeller.pending]:(state,action)=>{
            state.load=true
        },
         [getSeller.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
        },
         [getSeller.rejected]:(state,action)=>{
            state.load=true
            state.error=' action.payload.message'
        }
    }
})


export const {logOut,getUser} = createUserSlice.actions
export const userReducer = createUserSlice.reducer

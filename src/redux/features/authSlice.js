import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import axios from 'axios'

axios.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${(JSON.parse(localStorage.getItem("profile")).token)}`
    }
  return req;
})

const basicUrl= 'https://web-production-e9b8.up.railway.app/'

export const createAccount =createAsyncThunk("user/createAccount",async({userData,toast,navigate})=>{
   
    try {
         const response = await axios.post(`${basicUrl}home/signup`,userData)
         toast.success(`welcome ${userData.name}`)
         navigate('/')
         return response.data
    } catch (error) {
       toast.error(error.response.data.error)
    }
})

export const logIn =createAsyncThunk('user/logIn',async({userData,toast,navigate})=>{
    try {
         const response = await axios.post(`${basicUrl}home/signIn`,userData)
         toast.success(`welcome ${userData.name}`)
         navigate('/')
         return response.data
    } catch (error) {
        toast.error(error.response.data.error)
    }
})

export const googleLogIn =createAsyncThunk('user/googleLogIn',async({toast,navigate})=>{

    try {
         const result = await signInWithPopup(getAuth(), new GoogleAuthProvider())
         const userData = {
              email:result?._tokenResponse?.email,
              name:result?._tokenResponse?.fullName,
              profileImage:result?._tokenResponse.photoUrl
            }
         const response = await axios.post(`${basicUrl}home/google`,userData)
         console.log(response.data);
         toast.success(`Wel-come back ${result?._tokenResponse?.fullName}`)
         navigate('/home')
         return response.data
    } catch (error) {
        toast.error(error.response.data.error)
    }
})

export const getSeller =createAsyncThunk('user/getUser',async()=>{
    try {
         const response = await axios.get(`${basicUrl}home/getUser`)
         return response.data
        
    } catch (error) {
       console.log(error.response.data.error)
    }
})


export const updatePassword =createAsyncThunk('user/updatePassword',async({userData,toast})=>{
    try {
         const response = await axios.post(`${basicUrl}home/update`,userData)
         toast.success('Check your Email')
         return response.data
        
    } catch (error) {
        toast.error(error.response.data.error)
    }
})


export const restPassword =createAsyncThunk('user/restPassword',async({id,userData,navigate,toast})=>{
   
    try {
         const response = await axios.put(`${basicUrl}home/newPassword/${id}`,userData)
         navigate('/login')
         return response.data
        
    } catch (error) {
        toast.error(error.response.data.error)
    }
})

const createUserSlice= createSlice({
    name:'user',
    initialState:{
        user:null,
        load:false,
        isLoggedIn:false,
        listName:'',
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
        },
        
         [updatePassword.pending]:(state,action)=>{
            state.load=true
        },
         [updatePassword.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
        },
         [updatePassword.rejected]:(state,action)=>{
            state.load=true
            state.error=' action.payload.message'
        },
        
        [restPassword.pending]:(state,action)=>{
            state.load=true
        },
         [restPassword.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
        },
         [restPassword.rejected]:(state,action)=>{
            state.load=true
            state.error=' action.payload.message'
        },
          [googleLogIn.pending]:(state,action)=>{
            state.load=true
        },
         [googleLogIn.fulfilled]:(state,action)=>{
            state.load=false
            state.user= action.payload
            localStorage.setItem('profile',JSON.stringify({...action.payload}))
            state.isLoggedIn=true
        },
         [googleLogIn.rejected]:(state,action)=>{
            state.load=true
            state.error=' action.payload.message'
        }
    }
})


export const {logOut,getUser} = createUserSlice.actions
export const userReducer = createUserSlice.reducer

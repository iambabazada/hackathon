import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse((localStorage.getItem("users"))) : null,
    isAuth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
}



export const register = createAsyncThunk('register', async (data, thunkAPI) => {
    try {
        const response = await axios.post('/api/v1/users', (data))
        console.log("succes");
        return response.data
    }
    catch (err) {
        console.log("redux", err.response?.data);
        return thunkAPI.rejectWithValue(err.response?.data);
    }
})

export const login = createAsyncThunk('login', async (data, thunkAPI) => {
    try {
        const response = await axios.post('/api/v1/auth', (data))
        console.log("succes");
        return response.data
    }
    catch (err) {
        console.log(err.validationErrors.password);
        return thunkAPI.rejectWithValue(err.response?.data);
    }
})

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        const response = axios.post('/api/v1/logout')
        return response.data
    }
    catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.response?.data);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.users = action.payload.user;
                localStorage.setItem("users", JSON.stringify(action.payload))
                // const previousUsers = JSON.parse(localStorage.getItem("users") || '[]');
                // previousUsers.push(action.payload.user);
                // localStorage.setItem("users", JSON.stringify(previousUsers));
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true
                state.users = action.payload.user
                localStorage.setItem("users", JSON.stringify(action.payload.user))
                state.token = action.payload.token.token
                localStorage.setItem("token", action.payload.token.token)

            })

            .addCase(logout.fulfilled, (state, action) => {
                state.isAuth = false
                localStorage.removeItem("token")
            })
    }
})

export default authSlice.reducer

// export const { logout } = authSlice.actions



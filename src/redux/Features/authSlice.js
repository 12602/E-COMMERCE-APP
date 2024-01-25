import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const URL = "http://localhost:5000/api/users";

//login 
export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
        try 
        {
            const response = await axios.post(`${URL}/login`, formValue);
            toast.success("Login Successfully");
            navigate("/");
            return response.data;
        } catch (err) 
        {
            console.log(err);
            toast.error("Wrong details!!!!!");
            return rejectWithValue(err.response.data);
        }
    }
);


//register
export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${URL}`, formValue);
            toast.success("Register Successfully");
            navigate("/");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

//reducer

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: '',
        loading: false,

    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;

        }

    },
    extraReducers: 
      {
        [register.pending]: (state, action) => 
        {
            state.loading = true

        },
        [register.fulfilled]: (state, action) => 
        {
            state.loading = false
            state.user = action.payload

        },
        [register.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [login.pending]: (state, action) => {
            state.loading = true

        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload

        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})
// Destructure and export the plain action creators
//////////////////////////////////////////////////////////////////
export const { logoutUser } = authSlice.actions
export default authSlice.reducer
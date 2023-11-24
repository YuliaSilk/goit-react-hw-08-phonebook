import  axios  from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", async(_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } 
        catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            return response.data;
        } catch(error) {
return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (Id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${Id}`);
            return response.data;
        } catch(error) {
return thunkAPI.rejectWithValue(error.message);
        }
    }
);



// const updateUser = createAsyncThunk(
//     'users/update',
//     async (userData, { rejectWithValue }) => {
//       const { id, ...fields } = userData
//       try {
//         const response = await userAPI.updateById(id, fields)
//         return response.data.user
//       } catch (err) {
//         // Use `err.response.data` as `action.payload` for a `rejected` action,
//         // by explicitly returning it using the `rejectWithValue()` utility
//         return rejectWithValue(err.response.data)
//       }
//     }
//   )


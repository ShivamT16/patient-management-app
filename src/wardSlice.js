import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchWards = createAsyncThunk(
    'ward, fetchWard',
    async () => {
        const response = await axios.get('https://patient-management-api-blush.vercel.app/wards')
        return response.data
    }
)

export const addWard = createAsyncThunk(
    'ward, addWard',
    async (newWard) => {
        const response = await axios.post('https://patient-management-api-blush.vercel.app/wards', newWard)
        return response.data
    }
)

export const updateWard = createAsyncThunk(
    'ward, updateWard',
    async ({id, updatedWard}) => {
        const response = await axios.put(`https://patient-management-api-blush.vercel.app/wards/${id}`, updatedWard)
        return response.data
    }
)

export const deleteWard = createAsyncThunk(
    'ward, deleteWard',
    async (id) => {
        const response = await axios.delete(`https://patient-management-api-blush.vercel.app/wards/${id}`,)
        return response.data
    }
)

const initialState = {
    ward: [],
    status: 'idle',
    error: null
}

export const wardSlice = createSlice({
    name: 'ward',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWards.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchWards.fulfilled]: (state, action) => {
            state.status = 'success'
            state.ward = action.payload
        },
        [fetchWards.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [addWard.pending]: (state) => {
            state.status = 'loading'
        },
        [addWard.fulfilled]: (state, action) => {
            state.status = 'success'
            state.ward.push(action.payload)
        },
        [addWard.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [updateWard.pending]: (state) => {
            state.status = 'loading'
        },
        [updateWard.fulfilled]: (state, action) => {
            state.status = 'success'
            const updatedWard = action.payload
            const index = state.ward.findIndex((ward) => ward._id === updatedWard._id )
            if (index !== -1) {
                state.ward[index] = updateWard
            }
        },
        [updateWard.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [deleteWard.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteWard.fulfilled]: (state, action) => {
            state.status = 'success'
            state.ward = state.ward.filter((ward) => ward._id !== action.payload._id )
        },
        [deleteWard.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        }
    }
})
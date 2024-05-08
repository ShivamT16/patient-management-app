import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPatients = createAsyncThunk(
    'patients/fetchPatients',
    async () => {
        const response = await axios.get('https://fed54acd-9743-4f95-903d-1f9637e92761-00-3nn98g209acyn.spock.replit.dev/patients',)
        return response.data
    }
)

export const addPatients = createAsyncThunk(
    'patients/addPatients',
    async (newPatient) => {
        const response = await axios.post('https://fed54acd-9743-4f95-903d-1f9637e92761-00-3nn98g209acyn.spock.replit.dev/patients',
     newPatient,)
     return response.data
    },
)

export const updatePatients = createAsyncThunk(
    'patients/updatePatients',
    async ({id, updatedPatient}) => {
        const response = await axios.post(`https://fed54acd-9743-4f95-903d-1f9637e92761-00-3nn98g209acyn.spock.replit.dev/patients/${id}`,
    updatedPatient,)
    return response.data
    }
)

export const deletePatients = createAsyncThunk(
    'patients/deletePatients',
    async (id) => {
        const response = await axios.delete(`https://fed54acd-9743-4f95-903d-1f9637e92761-00-3nn98g209acyn.spock.replit.dev/patients/${id}`,)
        return response.data
    }
)

const initialState = {
    patient: [],
    status: 'idle',
    error: null,
}

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPatients.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPatients.fulfilled]: (state, action) => {
            state.status = 'success'
            state.patient = action.payload
        },
        [fetchPatients.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [addPatients.pending]: (state) => {
            state.status = 'loading'
        },
        [addPatients.fulfilled]: (state, action) => {
            state.status = 'success'
            state.patient.push(action.payload)
        },
        [addPatients.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [updatePatients.pending]: (state) => {
            state.status = 'loading'
        },
        [updatePatients.fulfilled]: (state, action) => {
            state.status = 'success'
            const updatedPatient = action.payload
            const index = state.patient.findIndex((patient) => patient._id === updatedPatient._id )
            if(index !== -1) {
                state.patient[index] = updatedPatient
            }
        },
        [updatePatients.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [deletePatients.pending]: (state) => {
            state.status = 'loading'
        },
        [deletePatients.fulfilled]: (state, action) => {
            state.patient = state.patient.filter((patient) => patient._id !== action.payload._id )
        },
        [deletePatients.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
    }
})

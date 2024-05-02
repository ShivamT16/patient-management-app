import { configureStore } from '@reduxjs/toolkit';
import { patientSlice } from '../patientSlice';
import { wardSlice } from '../wardSlice';

export const store = configureStore({
  reducer: {
    patient: patientSlice.reducer,
    ward: wardSlice.reducer
  },
});

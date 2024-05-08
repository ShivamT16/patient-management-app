import { configureStore } from '@reduxjs/toolkit';
import { wardSlice } from '../features/ward/wardSlice';
import { patientSlice } from '../features/patient/patientSlice';

export const store = configureStore({
  reducer: {
    patient: patientSlice.reducer,
    ward: wardSlice.reducer
  },
});

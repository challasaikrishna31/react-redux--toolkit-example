// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import employeeReducer from './employeeSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        employees: employeeReducer,
    },
});

export default store;

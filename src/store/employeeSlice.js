import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload); // Redux Toolkit allows mutation in slices due to Immer
    },
    removeEmployee: (state, action) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
  },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
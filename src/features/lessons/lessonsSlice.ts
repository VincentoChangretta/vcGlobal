import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { CourseVariations } from 'shared/data/data';


export interface initialStateTypes {
  course: CourseVariations;
}

const initialState: initialStateTypes = {
  course: CourseVariations.INIDIVIDUAL,
};

export const lessonsSlice = createSlice({
  name: 'lessons-slice',
  initialState,
  reducers: {
    changeVariation: (state, action: PayloadAction<CourseVariations>) => {
      state.course = action.payload;
    },
  },
});

export const { changeVariation } = lessonsSlice.actions;

export default lessonsSlice.reducer;

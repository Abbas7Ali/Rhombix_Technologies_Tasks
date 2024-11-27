import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentlyPlaying: null,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setCurrentlyPlaying(state, action) {
      state.currentlyPlaying = action.payload;
    },
    pauseCurrentlyPlaying(state) {
      state.currentlyPlaying = null;
    },
  },
});

export const { setCurrentlyPlaying, pauseCurrentlyPlaying } = audioSlice.actions;
export default audioSlice.reducer;

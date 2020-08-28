import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
  introDone: boolean;
}

let initialState: currentState = {
  introDone: false,
}

const introSlice = createSlice({
  name: "intro",
  initialState,
  reducers: {
    setIntroDone(state) {
      state.introDone = !state.introDone;
    }
  },
})


export const { setIntroDone } = introSlice.actions;
export default introSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  search: string;
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    changeSearch(state, action: PayloadAction<IInitialState>) {
      state.search = action.payload.search;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICardValues } from "../interfaces/formInterfaces";

interface IInitialState {
  formCard: ICardValues[];
}

const initialState: IInitialState = { formCard: [] };

const formCardSlice = createSlice({
  name: "formCard",
  initialState,
  reducers: {
    changeFormCard(state, action: PayloadAction<IInitialState>) {
      state.formCard = action.payload.formCard;
    },
  },
});

export const { changeFormCard } = formCardSlice.actions;
export default formCardSlice.reducer;

import { ICardValues } from "./formInterfaces";

export interface IRootState {
  search: {
    search: string;
  };
  formCard: {
    formCard: ICardValues[];
  };
}

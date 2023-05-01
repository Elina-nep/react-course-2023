import { IFormToCardValues } from "../interfaces/formInterfaces";

export const composeNewCard = (data: IFormToCardValues) => {
  return {
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    country: String(data.country),
    image: String(data.image),
    available: Boolean(data.available),
  };
};

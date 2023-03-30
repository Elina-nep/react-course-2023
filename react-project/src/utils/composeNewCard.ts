import { IFormValues } from "../interfaces/formInterfaces";

export const composeNewCard = (data: IFormValues) => {
  return {
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    country: String(data.country),
    image: URL.createObjectURL(data.image![0]),
    available: Boolean(data.available),
  };
};

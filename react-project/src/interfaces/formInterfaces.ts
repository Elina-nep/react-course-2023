export interface IValid {
  titleValid: boolean;
  descriptionValid: boolean;
  countryValid: boolean;
  dateValid: boolean;
  imageValid: boolean;
  availableValid: boolean;
  formValid: boolean;
}
export interface IFormValues {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  country: string | undefined;
  image: FileList | undefined;
  available: boolean | undefined;
  agree: string | undefined;
}

export interface ICardValues {
  title: string;
  description: string;
  date: string;
  country: string;
  image: string;
  available: boolean;
}

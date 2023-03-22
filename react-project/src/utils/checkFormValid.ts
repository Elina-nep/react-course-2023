export const checkFormValid = (values: {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  country: string | undefined;
  image: string | undefined;
  availableY: string | undefined;
  availableN: string | undefined;
  agree: string | undefined;
}) => {
  const result = {
    titleValid: false,
    descriptionValid: false,
    countryValid: false,
    dateValid: false,
    imageValid: false,
    availableValid: false,
    formValid: false,
  };

  const formats = ["jpg", "jpeg", "png"];

  result.titleValid =
    values.title && values.title.trim().length > 1 ? true : false;
  result.descriptionValid =
    values.description && values.description.trim().length > 1 ? true : false;
  result.countryValid =
    values.country && values.country.trim().length > 1 ? true : false;
  result.dateValid =
    values.date && values.date.trim().length > 1 ? true : false;
  result.imageValid =
    values.image && formats.includes(String(values.image.split(".").slice(-1)))
      ? true
      : false;

  result.availableValid =
    values.availableY === "true" || values.availableN === "true";

  result.formValid =
    result.imageValid &&
    result.dateValid &&
    result.countryValid &&
    result.descriptionValid &&
    result.titleValid &&
    result.availableValid;

  return result;
};

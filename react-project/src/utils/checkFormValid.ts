export const imgValid = (image: FileList | undefined) => {
  const formats = ["jpg", "jpeg", "png"];
  return Boolean(
    image && formats.includes(String(image[0].name.split(".").slice(-1)))
  );
};

export const lengthValid = (value: string | undefined) => {
  return value && value.trim().length > 1;
};

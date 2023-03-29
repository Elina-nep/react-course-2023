import "./Form.css";
import React, { createRef, useState } from "react";
import { checkFormValid } from "../utils/checkFormValid";
import { ErrorMessage } from "../components/ErrorMessage";
import { FormCards } from "../components/FormCards";

interface IValid {
  titleValid: boolean;
  descriptionValid: boolean;
  countryValid: boolean;
  dateValid: boolean;
  imageValid: boolean;
  availableValid: boolean;
  formValid: boolean;
}
export interface ICardValues {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  country: string | undefined;
  image: string | undefined;
  availableY: boolean | undefined;
  availableN: boolean | undefined;
  agree: string | undefined;
}

export const Form = () => {
  const [valid, setValid] = useState<IValid>({
    titleValid: true,
    descriptionValid: true,
    countryValid: true,
    dateValid: true,
    imageValid: true,
    availableValid: true,
    formValid: false,
  });

  const [cardList, setCardList] = useState<ICardValues[]>([]);

  const title = createRef<HTMLInputElement>();
  const description = createRef<HTMLInputElement>();
  const date = createRef<HTMLInputElement>();
  const country = createRef<HTMLInputElement>();
  const image = createRef<HTMLInputElement>();
  const availableY = createRef<HTMLInputElement>();
  const availableN = createRef<HTMLInputElement>();
  const agree = createRef<HTMLInputElement>();
  const form = createRef<HTMLFormElement>();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const values = {
      title: title.current?.value,
      description: description.current?.value,
      date: date.current?.value,
      country: country.current?.value,
      image: image.current!.value,
      availableY: availableY.current?.checked,
      availableN: availableN.current?.checked,
      agree: agree.current?.value,
    };
    const result = checkFormValid(values);

    setValid(result);

    if (result.formValid) {
      values.image = URL.createObjectURL(image.current!.files![0]);
      console.log(values);
      setCardList([...cardList, values]);
      alert("Card was added");
      form.current!.reset();
    }
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler} ref={form}>
        <h2>Add your card information</h2>

        <input type="text" placeholder="Enter title" ref={title} name="title" />
        {valid.titleValid ? (
          ""
        ) : (
          <ErrorMessage text="title, it should be from 1 to 10 symbols" />
        )}

        <input
          type="text"
          placeholder="Enter description"
          name="description"
          ref={description}
        />
        {valid.descriptionValid ? (
          ""
        ) : (
          <ErrorMessage text="description, it should be from 10 to 100 symbols" />
        )}

        <input
          type="date"
          placeholder="Date of addition"
          name="date"
          ref={date}
        />
        {valid.dateValid ? "" : <ErrorMessage text="date" />}

        <div className="form-inline">
          <input
            type="file"
            placeholder="Upload image"
            ref={image}
            accept="image/*"
          />
          <p>Upload your image</p>
        </div>
        {valid.imageValid ? (
          ""
        ) : (
          <ErrorMessage text="image: only .jpeg or .png formats" />
        )}

        <div className="form-inline">
          <input list="country" name="country" ref={country} />
          <datalist id="country">
            <option value="USA" />
            <option value="Europe" />
            <option value="China" />
            <option value="Russia" />
            <option value="Brasil" />
          </datalist>
          <p>Select country</p>
        </div>
        {valid.countryValid ? "" : <ErrorMessage text="country" />}

        <div className="form-inline">
          <p>Is it available?</p>

          <input
            type="radio"
            id="available"
            name="available"
            value="true"
            ref={availableY}
          />
          <label htmlFor="available">yes</label>
          <input
            type="radio"
            id="not-available"
            name="available"
            value="false"
            ref={availableN}
          />
          <label htmlFor="not-available">no</label>
          {valid.availableValid ? (
            ""
          ) : (
            <ErrorMessage text="this is demanded field" />
          )}
        </div>

        <div className="form-inline">
          <input
            type="checkbox"
            placeholder="Upload image"
            required
            name="agree"
            ref={agree}
          />
          <p>I agree to add the card</p>
        </div>

        <button type="submit">Add card</button>
      </form>

      <FormCards props={cardList} />
    </>
  );
};

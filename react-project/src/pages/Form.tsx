import "./Form.css";
import React, { createRef } from "react";
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

export class Form extends React.Component<
  Record<string, never>,
  { valid: IValid; cardList: ICardValues[] }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cardList: [],
      valid: {
        titleValid: true,
        descriptionValid: true,
        countryValid: true,
        dateValid: true,
        imageValid: true,
        availableValid: true,
        formValid: false,
      },
    };
  }

  title = createRef<HTMLInputElement>();
  description = createRef<HTMLInputElement>();
  date = createRef<HTMLInputElement>();
  country = createRef<HTMLInputElement>();
  image = createRef<HTMLInputElement>();
  availableY = createRef<HTMLInputElement>();
  availableN = createRef<HTMLInputElement>();
  agree = createRef<HTMLInputElement>();
  form = createRef<HTMLFormElement>();

  cardsList: ICardValues[] = [];

  submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const values = {
      title: this.title.current?.value,
      description: this.description.current?.value,
      date: this.date.current?.value,
      country: this.country.current?.value,
      image: this.image.current?.value,
      availableY: this.availableY.current?.checked,
      availableN: this.availableN.current?.checked,
      agree: this.agree.current?.value,
    };
    const result = checkFormValid(values);
    this.setState({ valid: result });
    console.log(this.state);
    if (result.formValid) {
      this.cardsList.push(values);
      this.setState({
        cardList: [...this.state.cardList, values],
      });
      this.form.current!.reset();
      alert("Card was added");
    }
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.submitHandler} ref={this.form}>
          <h2>Add your card information</h2>

          <input
            type="text"
            placeholder="Enter title"
            maxLength={20}
            required
            ref={this.title}
            name="title"
          />
          {this.state.valid.titleValid ? "" : <ErrorMessage text="title" />}

          <input
            type="text"
            placeholder="Enter description"
            maxLength={100}
            name="description"
            required
            ref={this.description}
          />
          {this.state.valid.descriptionValid ? (
            ""
          ) : (
            <ErrorMessage text="description" />
          )}

          <input
            type="date"
            placeholder="Date of addition"
            name="date"
            ref={this.date}
          />

          <div className="form-inline">
            <input
              type="file"
              placeholder="Upload image"
              required
              ref={this.image}
            />
            <p>Upload your image</p>
          </div>
          {this.state.valid.imageValid ? (
            ""
          ) : (
            <ErrorMessage text="image: only .jpeg or .png formats" />
          )}

          <div className="form-inline">
            <input list="country" required name="country" ref={this.country} />
            <datalist id="country">
              <option value="USA" />
              <option value="Europe" />
              <option value="China" />
              <option value="Russia" />
              <option value="Brasil" />
            </datalist>
            <p>Select country</p>
          </div>

          <div className="form-inline">
            <p>Is it available?</p>

            <input
              type="radio"
              id="available"
              name="available"
              value="true"
              ref={this.availableY}
            />
            <label htmlFor="available">yes</label>
            <input
              type="radio"
              id="not-available"
              name="available"
              value="false"
              ref={this.availableN}
            />
            <label htmlFor="not-available">no</label>
          </div>

          <div className="form-inline">
            <input
              type="checkbox"
              placeholder="Upload image"
              required
              name="agree"
              ref={this.agree}
            />
            <p>I agree to add the card</p>
          </div>

          <button type="submit">Add card</button>
        </form>

        <FormCards props={this.cardsList} />
      </>
    );
  }
}

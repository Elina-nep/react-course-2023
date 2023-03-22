import "./Form.css";
import React, { createRef } from "react";
import { checkFormValid } from "../utils/checkFormValid";
import { ErrorMessage } from "../components/ErrorMessage";

{
  /* <Record<string, never>, MyState></Record> */
}

// this.state = {
//   title: "",
//   description: "",
//   date: "",
//   country: "",
//   image: "",
//   available: false,
//   agree: false,
//   formErrors: {
//     title: "",
//     description: "",
//     date: "",
//     country: "",
//     image: "",
//     available: "",
//     agree: "",
//   },
//   titleValid: false,
//   descriptionValid: false,
//   countryValid: false,
//   dateValid: false,
//   imageValid: false,
//   availableValid: false,
//   formValid: false,
// };

interface IValid {
  titleValid: boolean;
  descriptionValid: boolean;
  countryValid: boolean;
  dateValid: boolean;
  imageValid: boolean;
  availableValid: boolean;
  formValid: boolean;
}

export class Form extends React.Component<Record<string, never>, IValid> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      titleValid: true,
      descriptionValid: true,
      countryValid: true,
      dateValid: true,
      imageValid: true,
      availableValid: true,
      formValid: false,
    };
    // this.submitHandler = this.submitHandler.bind(this);
    // this.title = createRef<HTMLInputElement>();
    // this.description = createRef();
  }
  //   validation: {
  //     titleValid: boolean;
  //     descriptionValid: boolean;
  //     countryValid: boolean;
  //     dateValid: boolean;
  //     imageValid: boolean;
  //     availableValid: boolean;
  //     formValid: boolean;
  //   };

  title = createRef<HTMLInputElement>();
  description = createRef<HTMLInputElement>();
  date = createRef<HTMLInputElement>();
  country = createRef<HTMLInputElement>();
  image = createRef<HTMLInputElement>();
  availableY = createRef<HTMLInputElement>();
  availableN = createRef<HTMLInputElement>();
  agree = createRef<HTMLInputElement>();

  submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const values = {
      title: this.title.current?.value,
      description: this.description.current?.value,
      date: this.date.current?.value,
      country: this.country.current?.value,
      image: this.image.current?.value,
      availableY: this.availableY.current?.value,
      availableN: this.availableN.current?.value,
      agree: this.agree.current?.value,
    };
    const result = checkFormValid(values);
    this.setState(result);
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h2>Add your card information</h2>

        <input
          type="text"
          placeholder="Enter title"
          maxLength={20}
          required
          ref={this.title}
          name="title"
        />
        {this.state.titleValid ? "" : <ErrorMessage text="title" />}

        <input
          type="text"
          placeholder="Enter description"
          maxLength={100}
          name="description"
          required
          ref={this.description}
        />
        {this.state.descriptionValid ? "" : <ErrorMessage text="description" />}

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
        {this.state.imageValid ? (
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
    );
  }
}

import "./Form.css";
import React from "react";

export class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <h2>Add your card information</h2>

        <input type="text" placeholder="Enter title" maxLength={20} required />

        <input
          type="text"
          placeholder="Enter description"
          maxLength={100}
          required
        />

        <input type="date" placeholder="Date of addition" />

        <div className="form-inline">
          <input type="file" placeholder="Upload image" required />
          <p>Upload your image</p>
        </div>

        <div className="form-inline">
          <input list="country" required />
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
            required
          />
          <label htmlFor="available">yes</label>
          <input
            type="radio"
            id="not-available"
            name="available"
            value="false"
          />
          <label htmlFor="not-available">no</label>
        </div>

        <div className="form-inline">
          <input type="checkbox" placeholder="Upload image" required />
          <p>I agree to add the card</p>
        </div>

        <button type="submit">Add card</button>
      </form>
    );
  }
}

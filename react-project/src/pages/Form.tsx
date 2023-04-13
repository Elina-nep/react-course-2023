import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { imgValid, lengthValid } from "../utils/checkFormValid";
import { ErrorMessage } from "../components/ErrorMessage";
import { FormCards } from "../components/FormCards";
import { ICardValues, IFormValues } from "../interfaces/formInterfaces";
import { composeNewCard } from "../utils/composeNewCard";
import { IRootState } from "../interfaces/store";
import { changeFormCard } from "../store/sliceFormCard";
import "./css/Form.css";

export const Form = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state: IRootState) => state.formCard.formCard);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const newData = { ...data, image: URL.createObjectURL(data.image![0]) };

    const newCard: ICardValues = composeNewCard(newData);
    dispatch(changeFormCard({ formCard: [...cardList, newCard] }));
    alert("Card was added");
    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add your card information</h2>

        <input
          type="text"
          placeholder="Enter title"
          {...register("title", {
            required: true,
            maxLength: 20,
            minLength: 3,
            validate: (value) => lengthValid(value),
          })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title && (
          <ErrorMessage message="title, it should be from 3 to 20 symbols" />
        )}

        <input
          type="text"
          placeholder="Enter description"
          {...register("description", {
            required: true,
            maxLength: 100,
            minLength: 10,
            validate: (value) => lengthValid(value),
          })}
          aria-invalid={errors.description ? "true" : "false"}
        />
        {errors.description && (
          <ErrorMessage message="description, it should be from 10 to 100 symbols" />
        )}

        <input
          type="date"
          placeholder="Date of addition"
          {...register("date", { required: true })}
          aria-invalid={errors.date ? "true" : "false"}
        />
        {errors.date && <ErrorMessage message="date, please enter some date" />}

        <div className="form-inline">
          <input
            type="file"
            placeholder="Upload image"
            {...register("image", {
              required: true,
              validate: (value) => imgValid(value),
            })}
            aria-invalid={errors.image ? "true" : "false"}
          />
          <p>Upload your image</p>
        </div>
        {errors.image && (
          <ErrorMessage message="image: only .jpeg or .png formats" />
        )}

        <div className="form-inline">
          <input
            list="country"
            {...register("country", { required: true })}
            aria-invalid={errors.country ? "true" : "false"}
          />
          <datalist id="country">
            <option value="USA" />
            <option value="Europe" />
            <option value="China" />
            <option value="Russia" />
            <option value="Brasil" />
          </datalist>
          <p>Select country</p>
        </div>
        {errors.country && <ErrorMessage message="country" />}

        <div className="form-inline">
          <p>Is it available?</p>
          <Controller
            control={control}
            name="available"
            rules={{ required: true }}
            aria-invalid={errors.available ? "true" : "false"}
            render={({ field: { onChange } }) => (
              <>
                <input
                  type="radio"
                  id="available"
                  value="true"
                  name="isAvailable"
                  onChange={onChange}
                />
                <label htmlFor="available">yes</label>
                <input
                  type="radio"
                  id="not-available"
                  value="false"
                  name="isAvailable"
                  onChange={onChange}
                />
                <label htmlFor="not-available">no</label>
              </>
            )}
          />
        </div>
        {errors.available && (
          <ErrorMessage message="choice, please choose the status" />
        )}

        <div className="form-inline">
          <input type="checkbox" {...register("agree", { required: true })} />
          <p>I agree to add the card</p>
        </div>
        {errors.agree && <ErrorMessage message="agreement" />}

        <button type="submit">Add card</button>
      </form>

      <FormCards props={cardList} />
    </>
  );
};

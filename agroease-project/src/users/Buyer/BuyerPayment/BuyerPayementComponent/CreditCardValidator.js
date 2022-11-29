import React, { useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";

export default function PaymentInputs() {
  const [value, setValue] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
  });
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full m-auto pt-4 ">
      <div className="flex flex-col mb-2">
        <label htmlFor="name" className="mb-1">
          Card Name
        </label>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value.name}
          type="text"
          placeholder="Godswill Chibuzor"
          className=" mb-2 outline-slate-700 bg-white"
        />
      </div>
      <div className="flex flex-col relative mb-2">
        <label htmlFor="cardNumber" className="mb-1">
          Card Number
        </label>
        <input
          {...getCardNumberProps({
            onChange: (e) => setValue(e.target.value),
          })}
          value={value.cardNumber}
          className="p-2 mb-2 outline-slate-400 bg-white"
        />
        <svg
          {...getCardImageProps({ images })}
          className="absolute top-9 right-5"
        />
        <small>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="name" className="mb-1">
          Date
        </label>
        <input
          {...getExpiryDateProps({
            onChange: (e) => setValue(e.target.value),
          })}
          value={value.expiryDate}
          className="p-2 mb-2 outline-slate-400 bg-white"
        />
        <small>{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="name" className="mb-1">
          CVC
        </label>
        <input
          {...getCVCProps({
            onChange: (e) => setValue(e.target.value),
          })}
          value={value.cvc}
          className=" mb-2 outline-slate-400 bg-white"
        />
        <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
      </div>
      <button
        type="submit"
        className="bg-green-700 text-white p-2 rounded hover:bg--400"
      >
        CheckOut
      </button>
    </form>
  );
}

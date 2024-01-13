import React, { useState } from "react";

import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  // state handling
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // change handling functions
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleIAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const NewexpenseData = {
      title: Title,
      amount: Amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(NewexpenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Title
            <input type="text" value={Title} onChange={handleTitleChange} />
          </label>

          <label>
            Amount
            <input
              type="number"
              value={Amount}
              onChange={handleIAmountChange}
            />
          </label>

          <label>
            Date
            <input type="Date" value={Date} onChange={handleDateChange} />
          </label>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpenseForm;

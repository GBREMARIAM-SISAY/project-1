import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const ExpenseDataHandler = (expensedata) => {
    const expenseData = {
      ...expensedata,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  return (
    <div>
      <NewExpenseForm onSaveExpenseData={ExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;

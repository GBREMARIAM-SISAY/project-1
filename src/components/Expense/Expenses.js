import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="card">
      {props.items.map((e) => (
        <ExpenseItem key={e.id}title={e.title} amount={e.amount} date={e.date} />
      ))}
    </div>
  );
}

export default Expenses;

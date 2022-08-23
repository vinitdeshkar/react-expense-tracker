import "./ExpensesFilter.css";

interface IExpenseFilterProps {
  onChangeFilter: (selectedYear: string) => void;
  selected: string;
}

const ExpensesFilter = (props: IExpenseFilterProps) => {
  const { onChangeFilter, selected } = props;
  const dropDownChangeHandler = (event: any) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChangeHandler} value={selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

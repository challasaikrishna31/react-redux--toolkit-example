// App.js
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, removeEmployee } from './store/employeeSlice';
import { increment } from './store/counterSlice';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleAddEmployee = () => {
    const newEmployee = { id: Date.now(), name: 'John Doe' };
    dispatch(addEmployee(newEmployee));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>Increment Counter</button>

      <h2>Employees:</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} <button onClick={() => dispatch(removeEmployee(emp.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};

export default App;

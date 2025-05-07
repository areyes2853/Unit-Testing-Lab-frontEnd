import { render, fireEvent} from '@testing-library/react';
import App from './App';
import TodoList from './componets/todolist';


test('Checking if App.js file has a Todo list', () => {
	const app = render(<App />);
	const about = app.getByText('Todo List');
	expect(about).toBeInTheDocument();
});

test('Check if the input add a new task exits', ()=>{
  const app = render(<TodoList />);
  const about = app.getByPlaceholderText('Add a new task...');
  expect(about).toBeInTheDocument();
})

test('Checking if todolist is called todolist', () => {
  const app = render(<TodoList />);
  const heading = app.getByRole('heading'); 
  expect(heading).toBeInTheDocument("Todo List");
});

test('Checks if the add button is in the app', ()=>{
  const app = render(<TodoList />);
  const button = app.getByText('Add');
  fireEvent.change(input, { target: { value: 'foo' } });
  fireEvent.click(button);
  const about = app.queryByText({task: 'Add'});
  expect(app.getByText('foo')).toBeInTheDocument();
})

test('Check if the delete button is in the app', ()=>{
  const app = render(<TodoList />);
  const button = app.getByText('Delete');
  fireEvent.change(input, { target: { value: 'poo' } });
  fireEvent.click(button.getByText('Delete'));
  const about = app.getByText('Delete');
  expect(app.queryByText('poo')).not.toBeInTheDocument();
})

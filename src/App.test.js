import { render, fireEvent} from '@testing-library/react';
import App from './App';
import TodoList from './componets/todolist';


describe('App component', () => {
  
  test('Checking if App.js file has a Todo list', () => {
    const app = render(<App />);
    const about = app.getByText('Todo List');
    expect(about).toBeInTheDocument();
  });
})





describe('TodoList component', () => {
  let input;

  test('Checking if todolist is called todolist', () => {
    const app = render(<TodoList />);
    const heading = app.getByRole('heading'); 
    expect(heading).toBeInTheDocument("Todo List");
  });

  test('Check if the input add a new task exits', ()=>{
    const app = render(<TodoList />);
    const about = app.getByPlaceholderText('Add a new task...');
    expect(about).toBeInTheDocument();
  })



  test('typing and clicking Add creates a new list item', ()=>{
    const app = render(<TodoList />);
    const button = app.getByPlaceholderText('Add a new task...');
    fireEvent.change(button, { target: { value: 'foo' } });
    fireEvent.click(app.getByText('Add'));
    const about = app.queryByText('foo');
    expect(about).toBeInTheDocument();
  })

  test('Testing if the todolist get items closeed out after completing a task', ()=>{
    const app = render(<TodoList />);
    const button = app.getByPlaceholderText('Add a new task...');
    fireEvent.change(button, { target: { value: 'task' } });
    fireEvent.click(app.getByText('Add'));
    const about = app.getByText('task');
    fireEvent.click(about);
    expect(about).toBeInTheDocument('text-decoration: line-through text-gray-500');
    
  })

  test('clicking Delete removes the list item', ()=>{
    const app = render(<TodoList />);
    const button = app.getByPlaceholderText('Add a new task...');
    fireEvent.change(button, { target: { value: 'poo' } });
    fireEvent.click(app.getByText('Add'));
    const about = app.getByText('poo');
    expect(about).toBeInTheDocument();
    const deleteButton = app.getByText('Delete');
    fireEvent.click(deleteButton);
    const about2 = app.queryByText('poo');
    expect(about2).not.toBeInTheDocument();
  })




});
import React from 'react'
import { CreateTodobutton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  {
    text: 'Tarea 1',
    completed: false
  },
  {
    text: 'Tarea 2',
    completed: false
  },
  {
    text: 'Tarea 3',
    completed: false
  }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodobutton />
    </React.Fragment>
  );
}

export default App;

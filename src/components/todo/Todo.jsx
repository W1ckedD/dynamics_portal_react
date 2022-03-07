import { useState } from 'react';
import TodoList from './TodoList';

const _todos = [
  {
    id: '1',
    title: 'todo 1',
    description: 'loremasdfas;lfjldkas',
    done: false,
    deadline: new Date().getDate() + 1,
  },
  {
    id: '2',
    title: 'todo 2',
    description: 'loremasdfas;lfjldkas',
    done: false,
    deadline: new Date().getDate() + 2,
  },
  {
    id: '3',
    title: 'todo 3',
    description: 'loremasdfas;lfjldkas',
    done: false,
    deadline: new Date().getDate() + 3,
  },
  {
    id: '4',
    title: 'todo 4',
    description: 'loremasdfas;lfjldkas',
    done: false,
    deadline: new Date().getDate() + 4,
  },
];

export default function Todo() {
  const [todos, setTodos] = useState(_todos);
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(todos);
    const [removedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removedItem);
    setTodos(items);
  };

  const toggleDone = (id) => {
    const items = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(items);
  };
  return (
    <div className="card ">
      <div className="card-header p-2">
        <h4>وظایف</h4>
      </div>
      <div className="card-body p-3">
        <TodoList
          todos={todos}
          onDragEnd={handleDragEnd}
          toggleDone={toggleDone}
        />
      </div>
    </div>
  );
}

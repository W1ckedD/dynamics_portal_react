import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import TodoList from './TodoList';
import Pagination from './Pagination';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { v4 } from 'uuid';

import 'styles/Todo.css';

const customStyles = {
  content: {
    width: 600,
    height: 480,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function Todo() {
  const [currentPage, setCurrentPage] = useState(0);
  const [todos, setTodos] = useState([]);
  const [addTodoOpen, setAddTodoOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [todoDeadline, setTodoDeadline] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const startingItem = itemsPerPage * currentPage;
  const endingItem = itemsPerPage * currentPage + itemsPerPage;
  useEffect(() => {
    setTodos(loadTodos());
  }, []);
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(todos);
    const [removedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removedItem);
    setTodos(items);
    saveTodos(items);
  };

  const toggleDone = (id) => {
    const items = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(items);
    saveTodos(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: v4(),
      title: todoTitle,
      description: todoDesc,
      deadline: todoDeadline,
      done: false,
      createdAt: new Date(),
    };
    todos.unshift(newTodo);
    setTodos([...todos]);
    saveTodos(todos);
    setTodoTitle('');
    setTodoDesc('');
    setTodoDeadline('');
    setAddTodoOpen(false);
  };

  const onDelete = (id) => {
    const items = todos.filter((todo) => todo.id !== id);
    setTodos(items);
    saveTodos(items);
  };

  return (
    <>
      <Modal isOpen={addTodoOpen} style={customStyles}>
        <button className="btn" onClick={() => setAddTodoOpen(false)}>
          <FaTimes />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">عنوان</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={todoTitle}
              onChange={(e) => {
                setTodoTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">توضیحات</label>
            <textarea
              name="description"
              cols="30"
              rows="5"
              className="form-control"
              value={todoDesc}
              onChange={(e) => {
                setTodoDesc(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="deadline">مهلت</label>
            <input
              type="datetime-local"
              name="deadline"
              value={todoDeadline}
              onChange={(e) => setTodoDeadline(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100 mt-5">
              اضافه کردن
            </button>
          </div>
        </form>
      </Modal>
      <div className="card ">
        <div className="card-header p-2 d-flex justify-content-between">
          <h4>وظایف</h4>
          <div className="d-flex">
            <span>
            {'تعداد: '}
            <input
              className="items-per-page"
              type="number"
              min={1}
              max={todos ? todos.length : 1}
              value={itemsPerPage}
              onChange={(e) => {
                const pages = parseInt(e.target.value, 10);
                if (isNaN(pages)) {
                  setItemsPerPage(1);
                }
                if (pages <= 1) {
                  setItemsPerPage(1);
                }
                setItemsPerPage(pages);
              }}
            />
            </span>

            <Pagination
              length={todos ? todos.length : 1}
              current={currentPage}
              itemsPerPage={itemsPerPage}
              setCurrent={setCurrentPage}
            />
          </div>
        </div>
        <div className="card-body p-3">
          <TodoList
            onDelete={onDelete}
            todos={todos ? todos.slice(startingItem, endingItem) : []}
            onDragEnd={handleDragEnd}
            toggleDone={toggleDone}
          />
        </div>
        <div className="d-flex justify-content-end ps-3 pb-3">
          <button
            className="btn btn-primary"
            onClick={() => setAddTodoOpen(true)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
}

function loadTodos() {
  const _todos = JSON.parse(localStorage.getItem('todos'));
  if (_todos) {
    return _todos;
  } else {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

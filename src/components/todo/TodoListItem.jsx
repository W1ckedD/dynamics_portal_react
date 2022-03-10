import { Draggable } from 'react-beautiful-dnd';
import { FaArrowsAlt } from 'react-icons/fa';

export default function TodoListItem({ title, id, index, done, toggleDone }) {
  return (
    <Draggable draggableId={id} index={parseInt(index)}>
      {(provided, snapshot) => (
        <li
          className="list-group-item d-flex align-items-center"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <span
            className="btn d-flex justify-content-between"
            {...provided.dragHandleProps}
          >
            <FaArrowsAlt />
          </span>
          <input
            type="checkbox"
            className="form-check-input m-2"
            checked={done}
            onChange={() => toggleDone(id)}
          />
          <span
            style={{
              color: done ? '#aaa' : '#333',
              textDecoration: done ? 'line-through' : 'none',
            }}
          >
            {title}
          </span>
        </li>
      )}
    </Draggable>
  );
}

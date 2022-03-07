import { Draggable } from 'react-beautiful-dnd';

export default function TodoListItem({ title, id, index, done, toggleDone }) {
  return (
    <Draggable draggableId={id} index={parseInt(index)}>
      {(provided, snapshot) => (
        <li
          className="list-group-item d-flex"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <span
            className="btn d-flex justify-content-between"
            {...provided.dragHandleProps}
          >
            drag
          </span>
          <input
            type="checkbox"
            checked={done}
            onChange={() => toggleDone(id)}
          />
          {title}
        </li>
      )}
    </Draggable>
  );
}

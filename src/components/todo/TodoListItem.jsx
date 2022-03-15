import { Draggable } from 'react-beautiful-dnd';
import { FaArrowsAlt } from 'react-icons/fa';
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from 'moment';

export default function TodoListItem({
  title,
  id,
  index,
  done,
  toggleDone,
  deadline,
  onDelete,
}) {
  return (
    <Draggable draggableId={id} index={parseInt(index)}>
      {(provided, snapshot) => (
        <li
          className="list-group-item d-flex align-items-center todo-item"
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
              display: 'flex',
              flex: 1,
              color: done ? '#aaa' : '#333',
              textDecoration: done ? 'line-through' : 'none',
            }}
          >
            {title}
            <DeadlineBadge done={done} deadline={deadline} />
          </span>
          <div className="flex">
            <button
              className=" btn-todo"
              style={{ color: 'var(--bs-warning)' }}
            >
              <FaEdit />
            </button>
            <button
              className=" btn-todo"
              style={{ color: 'var(--bs-danger)' }}
              onClick={() => onDelete(id)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      )}
    </Draggable>
  );
}

function DeadlineBadge({ done, deadline }) {
  const start = moment(new Date());
  const end = moment(deadline);
  const duration = moment.duration(end.diff(start));
  const months = Math.floor(duration.asMonths());
  const weeks = Math.floor(duration.asWeeks());
  const days = Math.floor(duration.asDays());
  const hours = Math.floor(duration.asHours());
  const minutes = Math.floor(duration.asMinutes());
  if (done) {
    return (
      <span className="badge bg-light me-3 text-dark">{`${days} روز`}</span>
    );
  }

  // if

  return <span className="badge bg-success me-3 ">{`${days} روز`}</span>;
}

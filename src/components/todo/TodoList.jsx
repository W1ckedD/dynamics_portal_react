import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoListItem from './TodoListItem';

export default function TodoList(props) {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <div className="bg-light">
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <ul
              className="list-group"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {props.todos.map((todo, index) => (
                <TodoListItem key={todo.id} {...props} {...todo} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUsers } from '../redux/actions';
import NavBar from './nav-bar';
import UsersList from './users-list';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

export default function App() {

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);

  const onDragEndHandler = (result: DropResult) => {
    if(!result.destination) {
      return null;
    }
    if (result.destination.index === result.source.index) {
      return null;
    }
    const items = Array.from(users);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);
    dispatch(fetchUsers(items));
  };

  return (
    <div className='container'>
      <main className="main-container">
        <DragDropContext
          onDragEnd={onDragEndHandler}
        >
          <Droppable
            droppableId='droppable'
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <UsersList
                  users={users}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <NavBar />
      </main>
    </div>
  );
}

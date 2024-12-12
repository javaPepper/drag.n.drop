import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchUsers, setVisible } from '../../redux/actions';
import BackButton from '../back-button/back-button';
import NavBar from '../nav-bar/nav-bar';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import WelcomeForm from '../welcome-form/welcome-form';
import { useEffect, lazy, Suspense } from 'react';
import Spinner from '../spinner';

const UsersListComponent = lazy(() => import('../users-list/users-list'));

export default function App() {

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const isClicked = useAppSelector((state) => state.isClicked);
  const isWelcomed = useAppSelector((state) => state.isWelcomed);
  const isVisible = useAppSelector((state) => state.isVisible);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setVisible(true));
    }, 2000);

    return () => clearTimeout(timeoutId);
  });

  return (
    !isWelcomed && isVisible ? <WelcomeForm /> :
      (
        <div className='container'>
          <main className="main-container">
            <NavBar />
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
                    <Suspense fallback={<Spinner/>}>
                      <UsersListComponent
                        users={users}
                      />
                    </Suspense>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {isClicked && <BackButton />}
          </main>
        </div>)
  );
}

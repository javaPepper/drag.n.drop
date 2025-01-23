import { useEffect, lazy, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import User from '../user/user';
import { UserType } from '../../types/user';
import { fetchUsers } from '../../redux/actions';
import Spinner from '../spinner';

const PostsListComponent = lazy(() => import('../posts-list/posts-list'));

type Users = {
  users: UserType[];
}

function UsersList({users}: Users){
  const isClicked = useAppSelector((state) => state.isClicked);
  const userId = useAppSelector((state) => state.id);
  const isClickedBackBtn = useAppSelector((state) => state.isClickedBackBtn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data: UserType[]) => {
        dispatch(fetchUsers(data));
      })
      .catch((error) => `Could not fetch data: ${error}`
      );

  }, [dispatch]);

  return(
    isClicked && !isClickedBackBtn ? (
      <Suspense fallback={<Spinner/>}>
        <PostsListComponent
          id={userId}
        />
      </Suspense>
    ) : (
      <div className="users-list-container">
        {users.length > 0 &&
          users.map((user, index) => (
            <User
              props={user}
              key={user.id}
              index={index}
            />
          ))}
      </div>
    ));
}

export default UsersList;

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import BackButton from './back-button';
import PostsList from './posts-list';
import User from './user';
import { UserType } from '../types/user';
import { fetchUsers } from '../redux/actions';

export default function UsersList() {
  const isClicked = useAppSelector((state) => state.isClicked);
  const userId = useAppSelector((state) => state.id);
  const isClickedBackBtn = useAppSelector((state) => state.isClickedBackBtn);
  const users = useAppSelector((state) => state.users);
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
      .catch((error) => `Could not fetch data: ${error}`);

  }, [dispatch]);

  return isClicked && !isClickedBackBtn ? (
    <>
      <PostsList id={userId} />
      <BackButton />
    </>
  ) : (
    <div className="users-list-container">
      {users.length > 0 &&
        users.map((user) => (
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            key={user.id}
          />
        ))}
    </div>
  );
}

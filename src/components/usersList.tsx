import { useAppSelector } from "../hooks";
import { users } from "../mocks/users";
import PostsList from "./posts-list";
import User from "./user";

export default function UsersList() {
  const isClicked = useAppSelector((state) => state.isClicked);
  const userId = useAppSelector((state) => state.id);

  return isClicked ? (
    <PostsList id={userId} />
  ) : (
    <div className="users-list-container">
      {users.map((user) => (
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

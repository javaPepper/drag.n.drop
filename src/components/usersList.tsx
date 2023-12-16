import { useAppSelector } from "../hooks";
import { users } from "../mocks/users";
import BackButton from "./backButton";
import PostsList from "./posts-list";
import User from "./user";

export default function UsersList() {
  const isClicked = useAppSelector((state) => state.isClicked);
  const userId = useAppSelector((state) => state.id);
  const isClickedBackBtn = useAppSelector((state) => state.isClickedBackBtn);

  return isClicked && !isClickedBackBtn ? (
    <>
      <PostsList id={userId} />
      <BackButton />
    </>
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

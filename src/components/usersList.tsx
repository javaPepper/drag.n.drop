import { users } from "../mocks/users";
import User from "./user";

export default function UsersList() {
    return(
        <>
            <div className="users-list-container">
                {users.map((user) => (
                    <User
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    />
                ))}
            </div>
        </>
    )
}
type UserProps = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export default function User({id, name, email, phone}: UserProps) {
    return(
        <>
            <article>
                <div className="user-container">
                    <div className="visually-hidden">{id}</div>
                    <ul className="user-description-list">
                        <li className="name">{name}</li>
                        <li className="email">{email}</li>
                        <li className="phone">{phone}</li>
                    </ul>
                </div>
            </article>
        </>
    )
}
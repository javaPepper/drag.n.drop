import { useState } from 'react';
import GetPostsButton from './get-posts-button';

type UserProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function User({ id, name, email, phone }: UserProps) {
  const [isMouseOver, setMouseOver] = useState<boolean>(false);
  const [isMouseLeave, setMouseLeave] = useState<boolean>(false);

  return (
    <article>
      <div
        className="user-container"
        onMouseOver={() => {
          setMouseOver(true);
        }}
        onMouseLeave={() => {
          setMouseLeave(true);
          setMouseOver(false);
          setMouseLeave(false);
        }}
      >
        <div className="visually-hidden">{id}</div>
        <ul className="user-description-list">
          <li className="name">{name}</li>
          <li className="email">{email}</li>
          <li className="phone">{phone}</li>
        </ul>
        {isMouseOver && !isMouseLeave && <GetPostsButton id={id} />}
      </div>
    </article>
  );
}

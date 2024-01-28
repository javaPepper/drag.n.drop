import { useState } from 'react';
import GetPostsButton from './get-posts-button';
import { Draggable } from 'react-beautiful-dnd';
import { UserType } from '../types/user';

type UserProps = {
  index: number;
  props: UserType;
}

export default function User({ index, props }: UserProps) {
  const {...properties} = props;

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
        <div className="visually-hidden">{properties.id}</div>
        <Draggable
          draggableId={`${index}`}
          index={index}
          key={index}
        >
          {(provided) => (
            <div
              className='draggable'
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
            >
              <ul className="user-description-list">
                <li className="name">{properties.name}</li>
                <li className="email">{properties.email}</li>
                <li className="phone">{properties.phone}</li>
              </ul>
            </div>
          )}
        </Draggable>
        {isMouseOver &&
        !isMouseLeave &&
        <GetPostsButton
          id={properties.id}
        />}
      </div>
    </article>
  );
}

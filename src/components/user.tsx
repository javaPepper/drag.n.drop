import { useState } from 'react';
import GetPostsButton from './get-posts-button';
import { Draggable } from 'react-beautiful-dnd';
import { UserType } from '../types/user';
import { getItemStyle } from '../utils';

type UserProps = {
  index: number;
  props: UserType;
}

export default function User({ props, index }: UserProps) {
  const {...properties} = props;

  const [isMouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <article>
      <div
        className="user-container"
        onMouseOver={() => {
          setMouseOver(true);
        }}
        onMouseLeave={() => {
          setMouseOver(false);
        }}
      >
        <Draggable
          draggableId={`${index}`}
          index={index}
          key={index}
        >
          {(provided, snapshot) => (
            <div className="user-description-list"
              ref={provided.innerRef}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              style={
                getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style)
              }
            >
              <ul>
                <li className="name">{properties.name}</li>
                <li className="email">{properties.email}</li>
                <li className="phone">{properties.phone}</li>
              </ul>
            </div>
          )}
        </Draggable>
        {isMouseOver &&
        <GetPostsButton
          id={properties.id}
        />}
      </div>
    </article>
  );
}

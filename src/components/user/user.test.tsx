/**
 * @jest-environment jsdom
 */

import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { mockInitialState } from '../../mocks/initial-state';
import { Provider } from 'react-redux';
import User from './user';
import { mockUsers } from '../../mocks/users';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { getItemStyle } from '../../utils';
// import userEvent from '@testing-library/user-event';
// import * as reactHooks from 'react';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const user = mockUsers[0];
const mockUser = (
  <Provider store={store}>
    <User
      index={user.id}
      props={user}
    />
  </Provider>
);

describe('User Component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div ref={provided.innerRef}>
              <Draggable
                draggableId='draggable'
                index={user.id}
                key={user.id}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={
                      getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style)
                    }
                  >
                    {mockUser}
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );

    waitFor(() => expect(getByRole('ul')).toBeInTheDocument());
  });

  it('initial state false', () => {
    const { getByTestId } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div ref={provided.innerRef}>
              <Draggable
                draggableId='draggable'
                index={user.id}
                key={user.id}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={
                      getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style)
                    }
                  >
                    {mockUser}
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
    waitFor(() => expect(getByTestId('isMouseOver')).toBeFalsy());
  });

  it('fires true if mouseOver event', () => {
    const { getByTestId, getByRole } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div ref={provided.innerRef}>
              <Draggable
                draggableId='draggable'
                index={user.id}
                key={user.id}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={
                      getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style)
                    }
                  >
                    {mockUser}
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
    fireEvent.mouseOver(getByRole('article'));
    waitFor(() => expect(getByTestId('isMouseOver')).toBeTruthy());
  });

  it('fires false if mouseLeave event', () => {
    const { getByRole, getByTestId } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div ref={provided.innerRef}>
              <Draggable
                draggableId='draggable'
                index={user.id}
                key={user.id}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={
                      getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style)
                    }
                  >
                    {mockUser}
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
    fireEvent.mouseLeave(getByRole('article'));
    waitFor(() => expect(getByTestId('isMouseOver')).toBeFalsy());
  });
});

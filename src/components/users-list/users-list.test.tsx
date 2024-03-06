/**
 * @jest-environment jsdom
 */

import UsersList from './users-list';
import * as fetchMock from 'jest-fetch-mock';
import { mockUsers } from '../../mocks/users';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { UserType } from '../../types/user';
import { mockInitialState } from '../../mocks/initial-state';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const users = mockUsers;
const mockUsersList = (
  <Provider store={store}>
    <UsersList users={users}/>
  </Provider>
);

describe('UsersList', () => {
  it('creates the list of the users', () => {
    fetchMock.default.mockResolvedValue(new Response);
    const { getByRole, getByText, queryByText } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div ref={provided.innerRef}>
              {mockUsersList}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );

    expect(getByRole('article')).toBeInTheDocument();
    expect(getByText(users[0].name)).toBeInTheDocument();
    expect(queryByText(users[0].website)).not.toBeInTheDocument();
  });

  it('fetches users', async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()) as UserType[];
    expect(result[0].name).toBe('Leanne Graham');
  });
});

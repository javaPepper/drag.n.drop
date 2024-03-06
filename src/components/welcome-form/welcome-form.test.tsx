/**
 * @jest-environment jsdom
 */

import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import WelcomeForm from './welcome-form';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import UsersList from '../users-list/users-list';
import { mockUsers } from '../../mocks/users';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import * as fetchMock from 'jest-fetch-mock';
import { mockInitialState } from '../../mocks/initial-state';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const mockWelcomeForm = (
  <Provider store={store}>
    <WelcomeForm/>
  </Provider>
);

describe('WelcomForm Component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(mockWelcomeForm);

    expect(getByRole('img')).toBeInTheDocument();

    const image = document.querySelector('img') as HTMLImageElement;
    expect(image.src.includes('javapepper.github.io/drag.n.drop/welcome.gif'));

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button').textContent).toBe('Got it!');
  });

  it('closes modal window and dispatches actions if submits ', async () => {

    fetchMock.default.mockResolvedValue(new Response);
    const users = mockUsers;
    const mockUsersList = (
      <Provider store={store}>
        <UsersList users={users}/>
      </Provider>
    );

    render(mockWelcomeForm);
    const { getByRole, getByText } = render(
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

    expect(getByRole('img')).toBeInTheDocument();

    await userEvent.click(getByRole('button', {name: 'Got it!'}));

    const actions = store.getActions();
    expect(actions[0].type).toBe('setWelcomed');
    expect(actions[1].type).toBe('setVisible');

    expect(getByRole('article')).toBeInTheDocument();
    expect(getByText(users[0].name)).toBeInTheDocument();
  });
});

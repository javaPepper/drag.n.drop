/**
 * @jest-environment jsdom
 */

import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import GetPostsButton from './get-posts-button';
import { mockId } from '../../mocks/id';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { mockInitialState } from '../../mocks/initial-state';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const mockGetPostButton = (
  <Provider store={store}>
    <GetPostsButton id={mockId}/>
  </Provider>
);

describe('GetPostButton Component', () => {
  it('renders without crashing', () => {

    const { getByRole } = render(mockGetPostButton);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button').textContent).toBe('Get Posts');
  });

  it('dispatches actions if clicks the button', async () => {

    const { getByRole } = render(mockGetPostButton);

    await userEvent.click(getByRole('button', {name: 'Get Posts'}));

    const actions = store.getActions();
    expect(actions[0].type).toBe('setClicked');
    expect(actions[1].type).toBe('setUserId');
    expect(actions[2].type).toBe('setClickedBackBtn');
    expect(actions[3].type).toBe('setVisible');
  });
});

/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import BackButton from './back-button';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockInitialState } from '../../mocks/initial-state';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const mockBackButton = (
  <Provider store={store}>
    <BackButton/>
  </Provider>
);

describe('BackButton Component', () => {
  it('renders without crashing', () => {
    const { getByText, getByRole } = render(mockBackButton);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(/back/i));
  });

  it('dispatches actions if clickes button', async () => {
    const { getByRole } = render(mockBackButton);

    await userEvent.click(getByRole('button', {name: 'Back'}));
    const actions = store.getActions();

    expect(actions[0].type).toBe('setClickedBackBtn');
    expect(actions[1].type).toBe('setClicked');
  });
});

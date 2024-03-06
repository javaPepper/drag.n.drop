/**
 * @jest-environment jsdom
 */

import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import NavBar from './nav-bar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockInitialState } from '../../mocks/initial-state';

const mockStore = configureMockStore();

const store = mockStore(mockInitialState);

const mockNavBar = (
  <Provider store={store}>
    <NavBar/>
  </Provider>
);

describe('NavBar component', () => {
  it('renders without crashing', () => {
    const { getAllByRole } = render(mockNavBar);

    expect(getAllByRole('button').length).toBe(2);
    expect(getAllByRole('button')[0]).toBeInTheDocument();
    expect(getAllByRole('button')[1]).toBeInTheDocument();
    expect(getAllByRole('button')[0].textContent).toBe('GitHub');
    expect(getAllByRole('button')[1].textContent).toBe('Back to CV');
  });
});

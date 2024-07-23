/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import * as fetchMock from 'jest-fetch-mock';
import App from './app';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { mockInitialState } from '../../mocks/initial-state';

const mockStore = configureMockStore();

const store = mockStore(mockInitialState);

const mockApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App component', () => {
  it('renders without crashing', () => {
    fetchMock.default.mockResolvedValue(new Response);
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    render(mockApp);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});

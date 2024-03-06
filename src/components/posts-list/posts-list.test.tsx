/**
 * @jest-environment jsdom
 */

import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockInitialState } from '../../mocks/initial-state';
import { Provider } from 'react-redux';
import PostsList from './posts-list';
import { mockId } from '../../mocks/id';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as fetchMock from 'jest-fetch-mock';
import { PostType } from '../../types/post';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const mockPostsList = (
  <Provider store={store}>
    <PostsList id={mockId}/>
  </Provider>
);

describe('PostsList Component', () => {
  it('renders without crashing', () => {
    fetchMock.default.mockResolvedValue(new Response);

    const { getByRole } = render(mockPostsList);

    waitFor(() => expect(getByRole('article')).toBeInTheDocument());
  });

  it('fetches posts', async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json()) as PostType[];

    expect(result[0].body).toContain('quia et suscipit\nsuscipit');
  });
});

/**
 * @jest-environment jsdom
 */

import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockInitialState } from '../../mocks/initial-state';
import { Provider } from 'react-redux';
import Post from './post';
import { mockPosts } from '../../mocks/posts';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockStore = configureMockStore();
const store = mockStore(mockInitialState);
const post = mockPosts[0];
const mockPost = (
  <Provider store={store}>
    <Post
      userId={post.userId}
      id={post.id}
      content={post.body}
      title={post.title}
    />
  </Provider>
);
describe('Post Component', () => {
  it('renders without crashing', () => {
    const { getByRole, getByText } = render(mockPost);

    expect(getByRole('article')).toBeInTheDocument();
    expect(getByText(post.title)).toBeInTheDocument();
  });
});

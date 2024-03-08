import { mockId } from '../../mocks/id';
import { mockInitialState } from '../../mocks/initial-state';
import { mockPosts } from '../../mocks/posts';
import { mockUsers } from '../../mocks/users';
import { fetchPosts, fetchUsers, setClicked, setClickedBackBtn, setUserId, setVisible, setWelcomed } from '../actions';
import { postReducer } from './reducer';


describe('postReducer', () => {
  it('returns initial state without any data', () => {
    expect(postReducer(undefined, {type: ''}))
      .toEqual(mockInitialState);
  });
  describe('actions', () => {
    it('returns true with "setClicked" action', () => {
      expect(postReducer(mockInitialState, setClicked(true)).isClicked)
        .toBe(true);
    });
    it('returns number with "setUserId" action', () => {
      expect(postReducer(mockInitialState, setUserId(Number(mockId))).id)
        .toEqual(mockId);
    });
    it('returns true with "setClickedBackBtn" action', () => {
      expect(postReducer(mockInitialState, setClickedBackBtn(true)).isClickedBackBtn)
        .toBe(true);
    });
    it('returns the list of users with "fetchUsers" action', () => {
      expect(postReducer(mockInitialState, fetchUsers(mockUsers)).users)
        .toEqual(mockUsers);
    });
    it('returns the list of posts with "fetcPosts" action', () => {
      expect(postReducer(mockInitialState, fetchPosts(mockPosts)).posts)
        .toEqual(mockPosts);
    });
    it('returns true with "setWelcomed" action', () => {
      expect(postReducer(mockInitialState, setWelcomed(true)).isWelcomed)
        .toBe(true);
    });
    it('returns true with "setVisible" action', () => {
      expect(postReducer(mockInitialState, setVisible(true)).isVisible)
        .toBe(true);
    });
  });
});

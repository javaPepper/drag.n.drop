import { fetchPosts, fetchUsers, setClicked, setClickedBackBtn, setUserId, setVisible, setWelcomed } from '../actions';
import { postReducer } from './reducer';
import { id, posts, users, testInitialState } from '../../utils/index';

describe('postReducer', () => {
  it('returns initial state without any data', () => {
    expect(postReducer(undefined, {type: ''}))
      .toEqual(testInitialState);
  });
  describe('actions', () => {
    it('should return true with "setClicked" action', () => {
      expect(postReducer(testInitialState, setClicked(true)).isClicked)
        .toBe(true);
    });
    it('should return number with "setUserId" action', () => {
      expect(postReducer(testInitialState, setUserId(Number(id))).id)
        .toEqual(id);
    });
    it('should return true with "setClickedBackBtn" action', () => {
      expect(postReducer(testInitialState, setClickedBackBtn(true)).isClickedBackBtn)
        .toBe(true);
    });
    it('should return the list of users with "fetchUsers" action', () => {
      expect(postReducer(testInitialState, fetchUsers(users)).users)
        .toEqual(users);
    });
    it('should return the list of posts with "fetcPosts" action', () => {
      expect(postReducer(testInitialState, fetchPosts(posts)).posts)
        .toEqual(posts);
    });
    it('should return true with "setWelcomed" action', () => {
      expect(postReducer(testInitialState, setWelcomed(true)).isWelcomed)
        .toBe(true);
    });
    it('should return true with "setVisible" action', () => {
      expect(postReducer(testInitialState, setVisible(true)).isVisible)
        .toBe(true);
    });
  });
});

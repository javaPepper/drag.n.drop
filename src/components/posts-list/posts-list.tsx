import { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../hooks';
import Post from '../post/post';
import { PostType } from '../../types/post';
import { fetchPosts } from '../../redux/actions';

type PostsListProps = {
  id: number;
};

export default function PostsList({ id }: PostsListProps) {

  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if(!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data: PostType[]) => {
        dispatch(fetchPosts(data));
      })
      .catch((error) => `Could not fetch data: ${error}`);
  }, [dispatch]);

  return (
    <div className="post-list_container">
      {posts.length > 0 &&
        posts
          .filter((el) => el.userId === id)
          .map((post) => (
            <Post
              userId={post.userId}
              id={post.id}
              title={post.title}
              content={post.body}
              key={post.id}
            />
          ))}
    </div>
  );
}

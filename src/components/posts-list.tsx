import { mockPosts } from "../mocks/posts";
import Post from "./post";

type PostsListProps = {
    id: number;
}

export default function PostsList({id}: PostsListProps) {
    return(
        <div className="post-list_container">
            {
                mockPosts
                    .filter((el) => el.userId === id)
                    .map((post) => (
                    <Post 
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    content={post.body}
                    key={post.id}
                    /> 
                ))
            }
        </div>
    )
}
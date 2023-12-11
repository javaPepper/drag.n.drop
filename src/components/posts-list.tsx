import { mockPosts } from "../mocks/posts";
import Post from "./post";

export default function PostsList() {
    return(
        <div className="post-list_container">
            {
                mockPosts.slice(0, 12).map((post) => (
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
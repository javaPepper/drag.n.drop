type PostProps = {
  userId: number;
  id: number;
  title: string;
  content: string;
};

export default function Post({ userId, id, title, content }: PostProps) {
  return (
    <article>
      <div className="post-container" id={id.toString()}>
        <span className="visually-hidden">{userId}</span>
        <div className="id">{id}</div>
        <div className="post title">{title}</div>
        <div className="post content">{content}</div>
      </div>
    </article>
  );
}

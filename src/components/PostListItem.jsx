function PostListItem({ post }) {
  const bodyWithRestrictedLength =
    post.body.length > 20 ? `${post.body.slice(0, 19)}...` : post.body;

  return (
    <div style={{ border: '1px solid black' }}>
      <div>{post.id}</div>
      <div>{post.userId}</div>
      <div>{post.title}</div>
      <div>{bodyWithRestrictedLength}</div>
    </div>
  );
}

export { PostListItem };

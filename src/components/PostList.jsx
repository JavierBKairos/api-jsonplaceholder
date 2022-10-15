import { PostListItem } from './PostListItem';

function PostList({ posts }) {
  return posts.map(eachPost => <PostListItem key={eachPost.id} post={eachPost} />);
}

export { PostList };

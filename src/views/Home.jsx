import { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { getPosts } from '../services/posts';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return <PostList posts={posts} />;
}

export { Home };

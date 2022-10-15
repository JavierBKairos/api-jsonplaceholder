const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const jsonResponse = await response.json();
  return jsonResponse;
};

const getPostById = async id => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/post/${id}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export { getPosts, getPostById };

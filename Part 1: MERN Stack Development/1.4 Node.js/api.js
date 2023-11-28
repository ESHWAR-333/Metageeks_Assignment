const axios = require('axios');

async function getUsersWithPosts() {
  try {
    // Fetch users data from the 'https://jsonplaceholder.typicode.com/users'
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;

    // Fetch posts data from the 'https://jsonplaceholder.typicode.com/posts'
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = postsResponse.data;

    // Combining users with their posts
    const usersWithPosts = users.map(user => {
      const userPosts = posts.filter(post => post.userId === user.id);
      return { ...user, posts: userPosts };
    });

    return usersWithPosts;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

getUsersWithPosts()
  .then(usersWithPosts => {
    console.log(usersWithPosts);
  })
  .catch(error => {
    console.log(error)
  });

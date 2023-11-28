import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios';
import './App.css'


// response=[
//   {
//     "id": 1,
//     "title": "Introduction to SQL",
//     "content": "SQL is a powerful database query language.",
//     "author_id": 1
// },
// {
//     "id": 2,
//     "title": "Web Development Tips",
//     "content": "Learn the latest web development techniques.",
//     "author_id": 2
// },
// {
//     "id": 3,
//     "title": "Data Modeling Strategies",
//     "content": "Designing effective database schemas.",
//     "author_id": 3
// },
// {
//     "id": 4,
//     "title": "The Art of Writing Code",
//     "content": "Best practices for writing clean code.",
//     "author_id": 4
// },
// {
//     "id": 5,
//     "title": "Database Performance Tuning",
//     "content": "Optimizing SQL queries for speed.",
//     "author_id": 5
// },
// {
//     "id": 6,
//     "title": "Responsive Design Principles",
//     "content": "Creating websites that work on all devices.",
//     "author_id": 6
// },
// {
//     "id": 7,
//     "title": "Python for Beginners",
//     "content": "Getting started with Python programming.",
//     "author_id": 7
// },
// {
//     "id": 8,
//     "title": "Mobile App Development Trends",
//     "content": "The latest trends in mobile app development.",
//     "author_id": 8
// },
// {
//     "id": 9,
//     "title": "Cybersecurity Essentials",
//     "content": "Protecting your systems from cyber threats.",
//     "author_id": 9
// },
// {
//     "id": 10,
//     "title": "Machine Learning Basics",
//     "content": "An introduction to machine learning concepts.",
//     "author_id": 10
// }
// ]


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {

    axios.get('http://localhost:5000/api/posts') //response data is given above
      .then((response) => {
        console.log(response)
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  const handleViewPost = postId => {
    // Toggle the selected post based on whether it's already selected
    setSelectedPost(prevSelectedPost => (prevSelectedPost === postId ? null : postId));
  };

  return (
    <div >
      {loading ?
        <div className="loader-container">
          <ThreeDots color="#somecolor" height={80} width={80} />
        </div> : (
          <div className='post-container'>
            {posts.map((post) => (
              <div key={post.id} className='post-container-card'>
                  <h2>{post.title}</h2>
                  <p>Author ID: {post.author_id}</p>

                {selectedPost === post.id && <p>{post.content}</p>}
                <button onClick={() => handleViewPost(post.id)}>
                  {selectedPost === post.id ? 'Hide Full Post' : 'View Full Post'}
                </button>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default App;

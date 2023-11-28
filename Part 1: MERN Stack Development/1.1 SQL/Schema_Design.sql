-- Design a MongoDB schema for a blog application with the following entities: User, Post, and Comment. Include relevant fields and relationships.

-- User Table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Post Table
CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

-- Comment Table
CREATE TABLE comments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  text TEXT,
  author_id INT,
  post_id INT,
  FOREIGN KEY (author_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

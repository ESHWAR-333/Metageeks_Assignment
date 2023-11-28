-- Write a MongoDB/SQL query to find all posts created by a specific user, including the user details.

SELECT posts.*, users.username as author_username, users.email as author_email
FROM posts
JOIN users ON posts.author_id = users.id
WHERE users.id = '4';

-- query output
-- id	      title	                            content	                    author_id	    author_username	      author_email
-- 4	The Art of Writing Code	   Best practices for writing clean code.	   4	       alice_carter	    alice.carter@email.com


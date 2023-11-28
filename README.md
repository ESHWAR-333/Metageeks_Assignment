# Metageeks_Assignment

## Part 1: MERN Stack Development
### 1.1 SQL
#### Query
- SQL query for finding all posts created by a specific user is available in `Query.sql`.

#### Schema Design
- Design a MongoDB schema for a blog application with the following entities: User, Post, and Comment. Include relevant fields and relationships as outlined in `Schema_Design.sql`.

### 1.2 Express.js
#### Middleware
- The Express.js middleware, logging timestamp and requested URL for every incoming request, is implemented in `middleware.js`.
- 
Run the script:

    ```bash
    node middleware.js
    ```
    
#### Route
- Express.js route to retrieve a list of posts from the database and return it as JSON is implemented in `route.js`.

Run the script:

    ```bash
    node route.js
    ```

### 1.3 React.js
#### Component
- A React.js functional component displaying a list of blog posts is located in `src/App.js`.

#### State Management
- React.js state management, handling the loading state while fetching blog posts, is implemented in `src/App.js`.

Run the script:

```bash
    npm start
```


### 1.4 Node.js
#### File System
- Node.js script reading a JSON file containing user data, manipulating the data to include the total number of posts each user has created, and writing the modified data back to a new JSON file is available in `file_system.js`.

Run the script:

```bash
    node file_system.js
```

#### API Integration
- Node.js function fetching data from an external API (e.g., JSONPlaceholder) and returning a list of users along with their posts is implemented in `api.js`.

Run the script:

```bash
    node api.js
```

## Part 2: General Programming Questions

### Algorithmic Problem

#### Palindrome Checker
- A function to check if a given string is a palindrome is implemented in `Algorithmic_Problem.py`.

- Run the script:

```bash
    python Algorithmic_Problem.py
```

### Database Concepts

#### SQL vs. NoSQL
- Detailed explanation of the difference between SQL and NoSQL databases, along with use case examples, can be found in `Database Concepts.txt`.

### Web Technologies

#### CORS Explanation
A comprehensive explanation of CORS, how it works, and how to handle CORS-related issues in a web application is provided in `Web Technologies.txt`.

### Coding Best Practices

#### Best Practices Discussion
- A discussion of three coding best practices for maintaining a clean and efficient codebase is available in `Coding Best Practices.txt`.

  
## File Structure
```
├── Part 1: MERN Stack Development/
│   ├── 1.1 SQL/
│   │   ├── Query.sql
│   │   ├── Schema_Design.sql
│   ├── 1.2 Express.js/
│   │   ├── middleware.js
│   │   ├── route.js
│   ├── 1.3 React.js/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── App.js
│   │   │   ├── App.css
│   │   │   ├── index.html
│   │   │   ├── index.css
│   ├── 1.4 Node.js/
│   │   ├── api.js
│   │   ├── file_system.js
│   │   ├── input.json
│   │   ├── output.json
├── Part 2: General Programming Questions/
│   ├── Algorithmic_Problem.py
│   ├── Coding Best Practices/
│   ├── Database Concepts/
│   ├── Web Technologies/
└── README.md```

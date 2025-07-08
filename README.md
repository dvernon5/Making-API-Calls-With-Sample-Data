# Axios API Practice Project
 
This project demonstrates how to use Axios, a promise-based HTTP client, to interact with APIs. It includes examples of performing basic HTTP requests (GET, POST, PUT, DELETE) using a dummy API provided by JSONPlaceholder.

## Table of Contents
* Project Overview
* Features
* Prerequisites
* Installation
* Usage
* Code Structure
* License

## Project Overview
This project is a learning exercise to practice making HTTP requests using Axios in a Node.js environment. It interacts with the JSONPlaceholder API to perform CRUD (Create, Read, Update, Delete) operations, helping users understand how to fetch and manipulate data from external endpoints.

## Features
* **GET Request:** Retrieve a list of posts and display the first five posts' titles and bodies.
* **POST Request:** Create a new post with a sample payload.
* **PUT Request:** Update an existing post by ID with a new payload.
* **DELETE Request:** Delete a post by ID.
* Error handling for all API requests.

## Prerequisites
To run this project, you need:
* Node.js (version 14 or higher recommended)
* npm (comes with Node.js)
* Basic understanding of JavaScript and asynchronous programming

## Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/your-username/your-repo-name.git
```
2. Navigate to the project directory:
```
cd your-repo-name
```
3. Install the required dependencies:
```
npm install axios
```

## Usage
1. Save the code in a file (e.g., `index.js`).
2. Uncomment the function calls in the code to execute specific API operations. For example, to fetch data:
```
fetchData();
```
3. Run the script using Node.js:
```
node app.js
```

## Example Operations
* ### Fetch Posts:
    * Uncomment `fetchData()`; to retrieve and log the first five posts from the JSONPlaceholder API.
    * Output example:
    ```
    Post 1: sunt aut facere repellat provident occaecati excepturi optio reprehenderit - quia et suscipit...
    ---
    Post 2: qui est esse - est rerum tempore vitae...
    ---
    ```
* ### Create a Post:
    * Uncomment `createPost()`; to send a POST request with a sample payload.
    * Logs the payload being sent.

* ### Update a Post:
    * Uncomment `updatePost(1)`; to update the post with ID `1`.
    * Logs the updated payload.

* ### Delete a Post:
    * Uncomment `deletePost(1)`; to delete the post with ID `1`.
    * Logs a success message or error.

**Note:** The JSONPlaceholder API is a mock API, so POST, PUT, and DELETE requests simulate responses but do not persist changes.

## Code Structure
* `app.js`: The main JavaScript file containing the Axios HTTP request functions:
    * `fetchData()`: Performs a GET request to retrieve posts.
    * `createPost()`: Performs a POST request to create a new post.
    * `updatePost(postId)`: Performs a PUT request to update a post by ID.
    * `deletePost(postId)`: Performs a DELETE request to delete a post by ID.

## Contributing
Contributions are welcome! If you have suggestions or improvements:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for detai

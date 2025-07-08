const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        for (let i = 0; i < 5; i++) {
            console.log(`Post ${ i + 1 }: ${ response.data[i].title } - ${ response.data[i].body }`);
            console.log('---');
        }
    } catch (error) {
        console.error('Error fetching data', error.message);
    }
}

// fetchData();

async function createPost() {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
        const payload = {
            title: "My New Post",
            body: "This is the content of my new post.",
            userId: 1
        }
        console.log('Creating post with payload:', payload);
    } catch (error) {
        console.error('Error creating post', error.message);
    }
}

// createPost();

async function updatePost(postId) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const payload = {
            title: "Updated Post Title",
            body: "This is the updated content of the post.",
            userId: 1
        }
        console.log(`Updating post with ID ${ postId } with payload:`, payload);
    } catch (error) {
        console.error('Error updating post', error.message);
    }
}

//updatePost(1);

async function deletePost(postId) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        console.log(`Post with ID ${ postId } deleted successfully.`);
    } catch (error) {
        console.error('Error deleting post', error.message);
    }
}

// deletePost(1);
// client/src/api/index.js

import axios from 'axios';

// Create an axios instance with the base URL for your backend
const API = axios.create({ baseURL: 'https://snapped-lvgi.onrender.com' });

// Now use this 'API' instance for all your calls
// This automatically adds the base URL to every request

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

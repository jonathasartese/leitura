
const api = process.env.REACT_APP_LEITURA_API_URL || 'http://localhost:3001'

// Generate a unique  token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
    
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)

export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)

/*export const addPost = (category, post) =>
  fetch(`${api}/${category}/posts`, {
    method: "POST",
    headers ,
    id: ,
    timestamp: new Date().getTime() ,
    title: JSON.stringify({ post.title }),
    body: JSON.stringify({ post.body }),
    author: JSON.stringify({ post.author }),
    category: category,
     })
    .then(res => res.json())
    .then(data => data.posts)
*/
export const getPost = (post) =>
  fetch(`${api}/posts/${post.id}`, { headers })
    .then(res => res.json())
    .then(data => data.post)
/*
export const votePost = (post) =>
  fetch(`${api}/posts/${post.id}`, { headers }, option: )
    .then(res => res.json())
    .then(data => data.post)
*/
/*
export const editPost = (post) =>
  fetch(`${api}/posts/${post.id}`, { 
    method: "PUT",
    headers, 
    title: JSON.stringify({ title }),
    body: JSON.stringify({ body }) })
    .then(res => res.json())
*/
export const deletePost = (post) =>
  fetch(`${api}/posts/${post.id}`, { 
    method: "DELETE",
    headers})
    .then(res => res.json())
    .then(data => data.post)

export const getAllComments = (post) =>
  fetch(`${api}/${post.id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.comments)

/*export const addComments = () =>
  fetch(`${api}/${category}/posts`, { method: "POST", headers })
    .then(res => res.json())
    .then(data => data.posts)
*/
export const getComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, { headers })
    .then(res => res.json())
    .then(data => data.comment)
/*
export const voteComments = (comments) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data.posts)
*/
export const editComment = (comment) =>
fetch(`${api}/comments/${comment.id}`, { 
  method: "PUT",
  headers, 
  timestamp: new Date().getTime() ,
  body: JSON.stringify({ comment }) })
  .then(res => res.json())

export const deleteComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, { 
    method: "DELETE",
    headers})
    .then(res => res.json())
    .then(data => data.comment)


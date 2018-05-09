import { 
    LOAD_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST, 
    VOTE_POST } from "./types_act";
import * as ReadableAPI from '../utils/ReadableAPI';

export function fetchPosts() {
    return (dispatch) => {    
      ReadableAPI.getAllPosts().then(
        (resp) => dispatch(getAllPosts(resp.posts)
      ))
    }
}

export function fetchPostsbyCategory(category) {
    return (dispatch) => {    
      ReadableAPI.getAllPosts().then(
        (resp) => dispatch(getAllPosts(category, resp.posts)
      ))
    }
}


export function loadPosts (posts){
    return{
        type: LOAD_POSTS,
        posts
    }
}

export function addPost (category){
    return{
        type: ADD_POST,
        category
    }
}

export function editPost (post){
    return{
        type: EDIT_POST,
        post
    }
}

export function deletePost (category, post){
    return{
        type: DELETE_POST,
        category, 
        post
    }
}

export function votePosts (category, post){
    return{
        type: VOTE_POST,
        post
    }
}


  ////////////////////////////////////////////////////////////////////////////////
  


  export function getPostByIdAction(data) {
    return {
      type: FETCH_POST_BY_ID,
      payload: data
    }
  }
  
  export function addPostAction({ type, id, timestamp, title, body, author, category }){
    return {
      type: ADD_POST,
      id,
      timestamp,
      title,
      body,
      author,
      category
    }
  }
  
  export function votePostAction(id, newVoteScore) {
    return {
      type: VOTE_POST,
      id,
      newVoteScore
    }
  }
  
  export function editPostAction(id, title, body) {
    return {
      type: EDIT_POST,
      id,
      title,
      body
    }
  }
  
  export function deletePostAction (id) {
    return {
      type: DELETE_POST,
      id
    }
  }
  
  export function commentCountAction (id, newCommentCount) {
    return {
      type: COMMENT_COUNT,
      id,
      newCommentCount
    }
  }
  
  export function resetPostAction () {
    return {
      type: RESET_POST
    }
  } 
  

  export function getAllPosts(posts) {
    return {
      type: GET_ALL_POSTS,
      posts
    }
  }
  
  export function fetchPostsData() {
    return (dispatch) => {    
      API.getAllPosts().then(
        (response) => dispatch(getAllPosts(response)
      ))
    }
  }
  
  export function getPostsFromCategory(posts) {
    return {
      type: GET_POSTS_FROM_CATEGORY,
      posts
    }
  }
  
  export function fetchPostsFromCategoryData(category) {
    return (dispatch) => {    
      API.getPostsFromCategory(category).then(
        (response) => dispatch(getPostsFromCategory(response)
      ))
    }
  }
  
  export function getPost(post) {
    return {
      type: GET_POST,
      post
    }
  }
  
  export function fetchPostData(id) {
    return (dispatch) => {    
      API.getPost(id).then(
        (response) => dispatch(getPost(response)
      ))
    }
  }


export const LOAD_POSTS = 'LOAD_POSTS'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const LOAD_COMMENTS = 'LOAD_COMMENTS'

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export function loadPosts (){
    return{
        type: LOAD_POSTS
    }
}

export function loadCategories (){
    return{
        type: LOAD_CATEGORIES
    }
}

export function loadComments (){
    return{
        type: LOAD_COMMENTS
    }
}

export function changeCategories ({category}){
    return{
        type: CHANGE_CATEGORY ,
        category
    }
}

/*
export function addPosts (){
    return{
        type: ADD_POST
    }
}
*/
export function editPosts (post){
    return{
        type: EDIT_POST,
        post
    }
}

export function editPosts (post){
    return{
        type: DELETE_POST,
        post
    }
}

export function votePosts (post){
    return{
        type: VOTE_POST,
        post
    }
}


/*
export function addComment (){
    return{
        type: ADD_COMMENT
    }
}
*/
export function editComment (comment){
    return{
        type: EDIT_COMMENT,
        comment
    }
}

export function editComment (comment){
    return{
        type: DELETE_COMMENT,
        comment
    }
}

export function voteComment (comment){
    return{
        type: VOTE_COMMENT,
        comment
    }
}

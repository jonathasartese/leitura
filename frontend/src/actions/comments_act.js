import { LOAD_CATEGORIES, CHANGE_CATEGORY } from "./types_act";
import * as ReadableAPI from '../utils/ReadableAPI';

export function loadComments (){
    return{
        type: LOAD_COMMENTS
    }
}

export function addComment (category, post, comment){
    return{
        type: ADD_COMMENT,
        category,
        post,
        comment
    }
}

export function editComment (category, post, comment){
    return{
        type: EDIT_COMMENT,
        category,
        post,
        comment
    }
}

export function editComment (category, post, comment){
    return{
        type: DELETE_COMMENT,
        category,
        post,
        comment
    }
}

export function voteComment (category, post, comment){
    return{
        type: VOTE_COMMENT,
        category,
        post,
        comment
    }
}
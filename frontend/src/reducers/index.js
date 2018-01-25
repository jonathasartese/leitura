import {
    LOAD_POSTS,
    LOAD_CATEGORIES,
    LOAD_COMMENTS,
    CHANGE_CATEGORY,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    VOTE_POST,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    VOTE_COMMENT,
  } from '../actions'

  function timeline (state , action){
    switch (action.type){
        case LOAD_POSTS :
            return{}
        case LOAD_CATEGORIES :
            return{}
        case LOAD_COMMENTS :
            return{}
        case CHANGE_CATEGORY :
            return{}
        case ADD_POST :
            return{}
        case EDIT_POST :
            return{}
        case DELETE_POST :
            return{}
        case VOTE_POST :
            return{}
        case ADD_COMMENT :
            return{}
        case EDIT_COMMENT :
            return{}
        case DELETE_COMMENT :
            return{}
        case VOTE_COMMENT :
            return{}
        default:
            return state

    }

  }
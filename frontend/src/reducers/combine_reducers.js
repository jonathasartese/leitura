import { combineReducers } from 'redux'

import categories from './categories_reducers'
import comments from './comments_reducers'
import posts from './posts_reducers'

export default combineReducers ({
  categories,
  comments,
  posts
})
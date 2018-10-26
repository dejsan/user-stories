import { combineReducers } from 'redux'
import blog from './blog'
import addPost from './addPost'
import viewPost from './viewPost'

export default combineReducers({
  blog,
  addPost,
  viewPost
})

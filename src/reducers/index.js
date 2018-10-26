import { combineReducers } from 'redux'
import blog from './blog'
import addPost from './addPost'

export default combineReducers({
  blog,
  addPost
})

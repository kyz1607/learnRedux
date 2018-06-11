import { combineReducers } from 'redux'
import todos from './todos'
import num from './num'
import visibilityFilter from './visibilityFilter'
import {auth} from './auth'

const todoApp = combineReducers({
  todos,
  num,
  auth,
  visibilityFilter
})

export default todoApp
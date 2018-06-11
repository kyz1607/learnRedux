let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const addNum = num => {
  return {
    type: 'ADD_NUM',
    num
  }
}

export const delNum = num => {
  return {
    type: 'DEL_NUM',
    num
  }
}

export function login(){
  return {type:'LOGIN'}
}
export function logout(){
  return {type:'LOGOUT'}
}
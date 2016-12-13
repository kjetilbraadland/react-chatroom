let nextTodoId = 0
let nextMessageId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const addMessage = (text) => {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const readMessage = (read) => {
  return {
    type: 'READ_MESSAGE',
    read
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
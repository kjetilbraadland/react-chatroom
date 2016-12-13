const message = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { id: action.id,  text: action.text, read: false  }
    case 'READ_MESSAGE':
      if (state.id !== action.id) {return state}
      return Object.assign({}, state, { read: !state.read })
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [ ...state, message(undefined, action) ]
    case 'READ_MESSAGE':
      return state.map(t => message(t, action))
    default:
      return state
  }
}

export default messages
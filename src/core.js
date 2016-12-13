export function setEntries(state, entries) {
  return state.set('entries', entries);
}

export function addMessage(state, newMessage) {
  var newList = list.slice(); // copy the array
  newList.concat(['item']);
  return state.set('messages', newList);
  
}
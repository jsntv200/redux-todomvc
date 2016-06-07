export function toggleComplete(itemId) {
  return {
    type: 'TOGGLE_COMPLETE',
    itemId
  }
}

export function clearCompleted() {
  return {
    type: 'CLEAR_COMPLETED'
  }
}

export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export function cancelEditing(itemId) {
  return {
    type: 'CANCEL_EDITING',
    itemId
  }
}

export function doneEditing(itemId, newText) {
  return {
    type: 'DONE_EDITING',
    itemId,
    newText
  }
}

export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    text
  }
}

export function editItem(itemId) {
  return {
    type: 'EDIT_ITEM',
    itemId
  }
}

export function deleteItem(itemId) {
  return {
    type: 'DELETE_ITEM',
    itemId
  }
}
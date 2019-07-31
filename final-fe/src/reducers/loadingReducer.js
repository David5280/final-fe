export const loadingReducer = (state = true, action) => {
  switch(action.type) {
    case 'DONE_LOADING':
      return state = false
    default:
      return state;
  }
}

export const errorReducer = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return state = action.error
    default:
      return state;
  }
}


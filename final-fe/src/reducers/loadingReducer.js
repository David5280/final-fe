export const loadingReducer = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return state = action.error
    default:
      return state;
  }
}
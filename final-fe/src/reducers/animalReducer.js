export const animalReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_ANIMALS':
      return [...state, action.animals]
    default:
      return state;
  }
}
export const donationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_DONATIONS':
      return [...state, ...action.donations]
    default:
      return state;
  }
}
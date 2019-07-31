export const donationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_DONATIONS':
      return [...state, ...action.donations]
    case 'ADD_DONATION':
      return [...state, action.donation]
    default:
      return state;
  }
}
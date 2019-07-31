export const donationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_DONATIONS':
      console.log(action.donations)
      return [...state, ...action.donations]
    default:
      return state;
  }
}
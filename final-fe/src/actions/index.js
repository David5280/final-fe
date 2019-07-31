export const loadAnimals = (animals) => ({
  type: 'LOAD_ANIMALS',
  animals
});

export const loadDonations = (donations) => ({
  type: 'LOAD_DONATIONS',
  donations
});

export const doneLoading = () => ({
  type: 'DONE_LOADING',
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
});
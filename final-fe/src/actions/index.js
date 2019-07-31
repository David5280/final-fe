export const loadAnimals = (animals) => ({
  type: 'LOAD_ANIMALS',
  animals
});

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
});
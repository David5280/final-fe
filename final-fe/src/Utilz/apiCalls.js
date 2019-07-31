export const getAnimals = async () => {
  try {
    const response = fetch('http://localhost:3001/api/v1/rescue-animals')
    if (!response.ok) {
      throw new Error('Error retrieving animals from server')
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message)
  }
};
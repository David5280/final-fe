export const getAnimals = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/rescue-animals');
    if (!response.ok) {
      throw new Error('There was an error with the server')
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was an fetching animals...')
  }
};

export const getDonations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/donations');
    if (!response.ok) {
      throw new Error('There was an error with the server')
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was an fetching donations...')
  }
};

export const postDonation = async (donation) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/donations/', {
      method: 'POST',
      body: JSON.stringify({
        donation
      })
    })
    console.log(response)
  } catch (error) {
    throw new Error('There was an error posting new donation...')
  }
}

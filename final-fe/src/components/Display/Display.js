import React from 'react';

const Display = ({ animals }) => {
  const allAnimals =  animals.map(animal => {
    return (
      <article className='main-display'>
        <h2>{animal.name}</h2>
        <p>{animal.description}</p>
        <img src={animal.img} alt={animal.name} />
      </article>
    )
  })
  return (
    <section className='main-display'>
      {allAnimals}
    </section>
  )
};

export default Display;
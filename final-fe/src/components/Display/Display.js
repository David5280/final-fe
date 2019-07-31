import React from 'react';
import './Display.css';

const Display = ({ animals, donations }) => {
  const allAnimals =  animals.map(animal => {
    return (
      <article className='main-display' key={animal.id}>
        <h2>{animal.name}</h2>
        <p>{animal.species}</p>
        <p>{animal.description}</p>
        <img src={animal.img} alt={animal.name} className='animal-img'/>
      </article>
    )
  });
  const allDonations = donations.map(donation => {
    return (
      <article>
        <h3>{donation.name}</h3>
        <p>{donation.donation}</p>
      </article>
    )
  })
  return (
    <section className='info-display'>
      <section className='animal-display'>
        {allAnimals}
      </section>
      <section className='donation-display'>
        {allDonations}
      </section>
      </section>
  )
};

export default Display;
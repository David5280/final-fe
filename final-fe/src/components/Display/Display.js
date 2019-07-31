import React from 'react';
import './Display.css';

const Display = ({ animals, donations }) => {
  const allAnimals =  animals.map(animal => {
    return (
      <article className='animal-display' key={animal.id}>
        <h3>{animal.name}</h3>
        <p>{animal.species}</p>
        <p>{animal.description}</p>
        <img src={animal.img} alt={animal.name} className='animal-img'/>
      </article>
    )
  });
  const allDonations = donations.map(donation => {
    return (
      <article className='donation-display' key={donation.id}>
        <h3>Name:  {donation.name}</h3>
        <p>Amount:  ${donation.donation}</p>
        <button id={donation.id}
      </article>
    )
  })
  return (
    <section className='info-display'>
      <section className='animal-container'>
        <h2>Current Animals!</h2>
        {allAnimals}
      </section>
      <section className='donation-container'>
        <h2>Current Donations</h2>
        <section className='donation-list'>
          {allDonations}
        </section>
      </section>
      </section>
  )
};

export default Display;
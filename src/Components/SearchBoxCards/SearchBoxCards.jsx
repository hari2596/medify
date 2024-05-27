import { useState } from 'react';
import './SearchBoxCards.css' ;

function SearchBoxCards({ services }) {
  const [active, setActive] = useState(0);

  return (
    <div className='cards'>
      <p className='header'>You may be looking for </p>
      <div className='services'>
        {services.map((item) => (
          
          <div
            className={item.id === active ? "card current" : "card"}
            key={item.id}
            onClick={() => setActive(item.id)}
          >
            <img src={item.image} alt='Icon' />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBoxCards;

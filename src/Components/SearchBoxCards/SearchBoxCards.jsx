import { useState } from 'react';

function SearchBoxCards({ services }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <p>You may be looking for </p>
      <div className='Category'>
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

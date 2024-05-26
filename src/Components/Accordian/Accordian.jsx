import {useState} from 'react'
import AccordianCard from '../AccordianCard/AccordianCard';
import { FaqData } from '../Faq/FaqData';

function Accordian() {
    const [active, setActive] = useState(-1);

  return (
    <div className='accordian'>
            {FaqData.map((data, index) =>
            (
                <AccordianCard 
                    data={data} 
                    active={active} 
                    setActive={setActive} 
                    index={index}
                />
            ))}
        </div>
  )
}

export default Accordian

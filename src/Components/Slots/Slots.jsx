import './Slots.css';

const Slots = ({ slotdata, handleClick, type, selectedSlot, setSelectedSlot }) => {
    return (
        <div>
            <div className='slots'>
                <span>{type}</span>
                <div className='slottimings'>
                    {slotdata.map((slot, index) => (
                        <span
                            key={index} // Added key prop
                            className={selectedSlot.index === index && selectedSlot.type === type ? `time selected` : 'time'}
                            onClick={() => {
                                handleClick(slot.time);
                                setSelectedSlot({ type, index });
                            }}
                        >
                            {slot.time}
                        </span>
                    ))}
                </div>
            </div>
            <p className={type !== "Evening" ? 'hr' : ''}></p>
        </div>
    );
};

export default Slots;

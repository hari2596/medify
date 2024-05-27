import { useState } from 'react';
import Searchbar from '../Components/SearchBar/SearchBar';
import './FindDoc.css'
import MedCentres from '../Components/MedicalCenters/MedCenter';
import Faq from '../Components/Faq/Faq'

const FindDoc = () =>
{   
    const [location, setLocation] = useState({})

    return(
        <div className='finddoc'>
            <Searchbar type="querys" setLocation={setLocation}/>
            <MedCentres location={location}/>
            <Faq/>
        </div>
    )
}

export default FindDoc;
import { faGear, faHouse, faMagnifyingGlass, faUser  } from '@fortawesome/free-solid-svg-icons';
import Sections from '../components/navbar/Sections'


const Root = () => {

    return (
      <>
     <div className='flex justify-around py-6  bg-zinc-800 text-white'>
        <Sections icon={faHouse} />
        <Sections icon={faMagnifyingGlass} />
        <Sections icon={faUser} />
        <Sections icon={faGear}/>
      </div>

      </>
    )
}

export default Root

//fixed inset-x-0 bottom-0
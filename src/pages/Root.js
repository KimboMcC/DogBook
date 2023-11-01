import { faGear, faHouse, faMagnifyingGlass, faUser  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sections from '../components/navbar/Sections'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom';

const Root = () => {
  const loggedIn = false;

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <div className='flex justify-around py-6 fixed inset-x-0 bottom-0 z-50 bg-zinc-800 text-white'>
            <Link to='/' > <Sections icon={faHouse} /> </Link> 
            <Link to="search"> <Sections icon={faMagnifyingGlass} /> </Link>
            <Link to="profile"> <Sections icon={faUser} /> </Link> 
            <Link to="settings"> <Sections icon={faGear}/> </Link> 
          </div>
          <Outlet />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Root;

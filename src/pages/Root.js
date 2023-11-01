import { faGear, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Sections from '../components/navbar/Sections';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/accounts/accountsSlice';
import { useEffect } from 'react';



const Root = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.loggedIn) {
      navigate('/')
    }
  }, [user.loggedIn, navigate])

  return (
    <>
      {user.loggedIn ? (
        <>
          <Header />
          <div className='flex justify-around py-6 fixed inset-x-0 bottom-0 z-50 bg-zinc-800 text-white'>
            <Link to='/discover'> <Sections icon={faHouse} /> </Link>
            <Link to="search"> <Sections icon={faMagnifyingGlass} /> </Link>
            <Link to="profile"> <Sections icon={faUser} /> </Link>
            <Link to="settings"> <Sections icon={faGear} /> </Link>
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
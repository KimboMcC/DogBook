import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import Sections from './Sections'

const Navbar = () => {

    return (
        <div className='bg-neutral-900 text-white mt-4'>
            <div className='flex justify-between items-center pt-3 px-4 rounded-2xl'>
                <div className='flex '>
                    <img src={logo} alt="PetBook logo" width='50px'/>
                    <div className='ml-4'>
                        <h2 className='text-2xl font-bold uppercase'>PetBook</h2>
                        <p className='font-light'>Share your furry friends</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faMoon} />
            </div>
            <div className='flex justify-around py-8'>
                <Sections title={'Home'} />
                <Sections title={'Discover'} />
                <Sections title={'Profile'} />
            </div>
        </div>
    )
}

export default Navbar
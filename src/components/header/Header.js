import logo from '../../images/logo.png';

const Header = () => {

    return (
      
            <div className='bg-gradient-to-b from-zinc-700  text-white py-7'>
                <div className='flex justify-between items-centerrounded-2xl'>
                    <div className='flex items-center mx-auto'>
                        <img src={logo} alt="PetBook logo" width='60px' className='bg-gradient-to-r from-blue-400 to-red-400 rounded-xl p-2'/>
                        <div className='ml-4'>
                            <h2 className='text-5xl font-semibold uppercase'>PetBook</h2>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Header
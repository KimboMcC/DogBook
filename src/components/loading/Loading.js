import logo from '../../images/logo.png'

const Loading = () => {
    
    return (
        <div className='flex flex-col w-2/5 m-auto items-center justify-center h-screen'>
            <img src={logo} className='mb-4'/>
            <p className='text-center text-white font-light text-2xl'> Loading...</p>
        </div>
    )
    
}

export default Loading
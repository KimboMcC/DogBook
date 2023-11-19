import './register.css';
import pp1 from '../../images/Rectangle 1.png';
import pp2 from '../../images/Rectangle 2.png';
import pp3 from '../../images/Rectangle 3.png';
import pp4 from '../../images/Rectangle 4.png';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/accounts/accountsSlice';


const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ fName, setFName ] = useState("")
    const [ lName, setLName ] = useState("") 
    const [ selectedPicture, setSelectedPicture ] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'firstName' ? setFName(value) : setLName(value) 
  };
  
  const handlePictureChange = (event) => {
    const { value } = event.target
    setSelectedPicture(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({firstName: fName, lastName: lName, pp: selectedPicture}))
    navigate("/discover")
  };
 
 //ADD SIGN-UP NOW TEXT/register
  return (
    <div className="text-white md:w-3/5 lg:w-2/5 m-auto h-screen lg:text-2xl">
      <div className="mb-8 mt-48 text-center">
        <p className="text-xl mb-1 font-light">Welcome to</p>
        <h1 className="text-5xl mb-16 font-extrabold tracking-wide ">PETBOOK</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className='text-lg lg:text-2xl mb-6 font-semibold border-b-2 text-center'>Enter your name:</h2>
        <div className='justify-center flex mb-4'>
          <label htmlFor="firstName" className='mr-2'>First name: </label>
          <input
            className="rounded-sm bg-zinc-800 border-white p-0.5 outline-2 focus:outline-white focus:outline focus:outline-opacity-50"
            type="text"
            id="firstName"
            name="firstName"
            required
            onChange={handleChange}
          />
        </div>
        <div className='justify-center flex'>
          <label htmlFor="lastName" className='mr-2'>Last name: </label>
          <input
            className="rounded-sm bg-zinc-800 border-white p-0.5 outline-2 focus:outline-white focus:outline focus:outline-opacity-50"
            type="text"
            id="lastName"
            name="lastName"
            required
            onChange={handleChange}
          />
        </div>
        
        <h2 className="text-lg mb-6 font-semibold border-b-2 text-center mt-12 lg:text-2xl">
          Choose a profile picture:
        </h2>
        <div className="grid px-5 grid-cols-4 w-full justify-items-center">
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp1}
              //checked={selectedPicture === pp1}
              onChange={handlePictureChange}
              required
            />
            <img src={pp1} alt="Option 1" width="70px" />
          </label>
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp2}
             //checked={selectedPicture === pp2}
              onChange={handlePictureChange}
              required
            />
            <img src={pp2} alt="Option 2" width="70px" />
          </label>
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp3}
              //checked={selectedPicture === pp3}
              onChange={handlePictureChange}
              required
            />
            <img src={pp3} alt="Option 3" width="70px" />
          </label>
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp4}
              //checked={selectedPicture === pp4}
              onChange={handlePictureChange}
              required
            />
            <img src={pp4} alt="Option 4" width="70px" />
          </label>
        </div>
        <button type="submit" className='mt-16 py-3 px-4 rounded-md bg-zinc-700 w-3/5 items-center font-bold flex justify-center'>Submit and continue</button>
      </form>
    </div>
  );
};

export default Register;
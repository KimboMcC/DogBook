import './register.css';
import pp1 from '../../images/Rectangle 1.svg';
import pp2 from '../../images/Rectangle 2.svg';
import pp3 from '../../images/Rectangle 3.png';
import pp4 from '../../images/Rectangle 4.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate()

    const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    picture: '',
  });

  const [selectedPicture, setSelectedPicture] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const nextPage =() => {
    navigate("/discover")
  }

  const handlePictureChange = (event) => {
    setSelectedPicture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    account.picture = selectedPicture;
    console.log(account);
    
  };

  return (
    <div className="text-white p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl mb-2 font-bold">Welcome to PETBOOK!</h1>
        <p className="text-md mb-2">
          The internet's best and cutest pet social-media app.
        </p>
        <p className="text-sm">Share, save, and scroll through pet photos. Cute!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg uppercase mb-4 font-semibold">Create account:</h2>
        <label htmlFor="firstName">Your first name: </label>
        <input
          className="bg-zinc-700 mb-2 rounded-md p-0.5"
          type="text"
          id="firstName"
          name="firstName"
          value={account.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Your last name: </label>
        <input
          className="bg-zinc-700 rounded-md p-0.5"
          type="text"
          id="lastName"
          name="lastName"
          value={account.lastName}
          onChange={handleChange}
        />
        <br />
        <p className="font-semibold text-md uppercase mb-4 mt-8">
          Select a profile picture from the choices below:
        </p>
        <div className="grid px-6 grid-cols-4 py-4 justify-items-center">
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp1}
              checked={selectedPicture === pp1}
              onChange={handlePictureChange}
            />
            <img src={pp1} alt="Option 1" width="60px" />
          </label>
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp2}
              checked={selectedPicture === pp2}
              onChange={handlePictureChange}
            />
            <img src={pp2} alt="Option 2" width="60px" />
          </label>
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp3}
              checked={selectedPicture === pp3}
              onChange={handlePictureChange}
            />
            <img src={pp3} alt="Option 3" width="60px" />
          </label>
          <label className="mb-4">
            <input
              type="radio"
              name="picture"
              value={pp4}
              checked={selectedPicture === pp4}
              onChange={handlePictureChange}
            />
            <img src={pp4} alt="Option 4" width="60px" />
          </label>
        </div>
        <button type="submit" onClick={nextPage}>Submit and continue</button>
      </form>
    </div>
  );
};

export default Register;
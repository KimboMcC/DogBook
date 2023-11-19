import { useDispatch, useSelector } from "react-redux"
import { changeName, selectUser } from "../../redux/accounts/accountsSlice"
import { logIn } from "../../redux/accounts/accountsSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ChangeName = ({ visiblea, sendData}) => {
    const user = useSelector(selectUser)
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        name === 'firstName' ? setFName(value) : setLName(value) 
      };

      const backPage = () => {
        sendData('hidden')
        setFName('')
        setLName('')
      }
 
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName({firstName: fName, lastName: lName})) 
        sendData('hidden')
        alert(`Your name has been changed to '${user.firstName} ${user.lastName}'`)
        setFName('')
        setLName('')
      };

    return (
        <div className={visiblea}>
            <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center text-white mt-14 gap-5">
                <h2 className='text-lg mb-6 font-semibold border-b-2 text-center'>Enter your name:</h2>
                <p>Your current name is: {user.firstName} {user.lastName}</p>
                <div className='justify-center flex mb-4'>
                <label htmlFor="firstName" className='mr-2'>First name: </label>
                <input
                    className="rounded-sm bg-zinc-800 border-white p-0.5 outline-2 focus:outline-white focus:outline focus:outline-opacity-50"
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    onChange={handleChange}
                    value={fName}
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
                    value={lName}
                />
            </div>
                <button type="submit" className='mt-4 py-2 px-4 rounded-md bg-zinc-700 w-3/5 items-center font-bold flex justify-center'>Submit changes</button>
            </form>
            <button className='mt-4 text-white py-1 rounded-md bg-zinc-700 w-3/5 mx-auto items-center font-bold flex justify-center' onClick={backPage}>Undo change name</button>
            </div>
        </div>
    )
}

export default ChangeName
import { logOut } from "../../redux/accounts/accountsSlice"
import { useDispatch } from "react-redux"

const LogOut = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logOut())
    }



    return (
        <div>
            <button onClick={handleClick}className='mx-auto text-white mt-16 py-3 px-4 rounded-md bg-zinc-700 w-4/5 items-center font-bold flex justify-center'>Log Out</button>

        </div>
    )
}

export default LogOut
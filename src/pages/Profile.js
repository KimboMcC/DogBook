import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectUser } from "../redux/accounts/accountsSlice"
import { useDispatch } from "react-redux"
import pp1 from '../images/Rectangle 1.png'

const Profile = () => {
    const user = useSelector(selectUser)

    return (
        <div>        
            <div className="flex flex-col justify-center py-6 bg-zinc-600">
                <img className="mx-auto mb-2" src={pp1} width="120px" alt="user profile"></img>
                <h2 className="text-3xl mx-auto text-white font-semibold">Tomithy Charlemain</h2>
            </div>
        </div>

    )
}

export default Profile
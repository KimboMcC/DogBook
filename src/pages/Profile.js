import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectUser } from "../redux/accounts/accountsSlice"
import { useDispatch } from "react-redux"
import pp1 from '../images/Rectangle 1.png'

const Profile = () => {
    const user = useSelector(selectUser)

    return (
        <div>        
            <div className="flex">
                <img src={pp1} width="120px" alt="user profile image"></img>
                <h2>{user.firstName}{user.lastName}</h2>
            </div>
        </div>

    )
}

export default Profile
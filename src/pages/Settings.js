import { useDispatch } from "react-redux"
import LogOut from "../components/settings/LogOut"
import ChangeName from "../components/settings/ChangeName"
import { selectUser } from "../redux/accounts/accountsSlice"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState } from "react"


const Settings = () => {
    const [ visible, setVisible] = useState('hidden')
    const user = useSelector(selectUser)

    const handleVisible = () => {
        visible === 'hidden' ? setVisible('block') : setVisible('hidden')
        console.log(visible)
    }

    const takeData = (data) => {
        setVisible(data)
    }
    
    return (
        <>        
            <div className="mx-auto text-white bg-zinc-600 flex flex-col items-center">
                <p className="text-white text-lg font-semibold my-4">Settings</p>
            </div>
        <div className="m-auto flex flex-col align-center">
            <ChangeName visiblea={visible} sendData={takeData}/> 
            <button onClick={handleVisible} className={'mx-auto text-white mt-16 py-3 px-4 rounded-md bg-zinc-700 w-4/5 items-center font-bold flex justify-center ' + (visible === 'hidden' ? 'block' : 'hidden')}>Edit name</button> 
            <LogOut/>
        </div>
        </>

    )
}

export default Settings

    
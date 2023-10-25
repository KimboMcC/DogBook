import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


const AddComment = () => {

    return (
        <div className="bg-zinc-800 flex justify-between rounded-md p-2 px-3 items-center">
            <div className='flex items-center'>
                <div className='w-8 h-8 mr-2'>
                    <img className="rounded-full" src='http://placekitten.com/200/200'/>
                </div>
                <p>Write comment</p>
            </div>
            <FontAwesomeIcon icon={faPaperPlane} />
        </div>
    )
}

export default AddComment
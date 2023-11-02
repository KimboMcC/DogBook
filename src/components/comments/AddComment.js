import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/accounts/accountsSlice'
import { addComment, selectComments } from '../../redux/comments/commentsSlice';


const AddComment = ( props ) => {
    const { postKey } = props
    const [ comment, setComment ] = useState('')
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const commentArray = useSelector(selectComments)
    

    function getCurrentDateAsString() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds();
      
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
      }
      
      const currentDateString = getCurrentDateAsString();
      
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from actually submitting
      
        // Define the comment object
        const newComment = {
          message: comment,
          owner: {
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
            picture: user.pp,
          },
          post: postKey, // Use postKey directly
          id: `${Math.floor(Math.random() * 99999)}`,
          publishDate: currentDateString
        };
      
        // Dispatch the action to add the comment
        dispatch(addComment(newComment));
      
        // Clear the comment input field
        setComment('');
      };
      

    return (
        <div className="bg-zinc-800 flex rounded-md p-2 px-3">
            <div className='flex w-full'>
                <div className='w-10 h-10 pt-0.5 mr-2'>
                    <img className="rounded-full" src={user.pp} alt="profile"/>
                </div>
                <form className='flex justify-between w-full items-center' onSubmit={handleSubmit}>
                    <input
                        className="bg-zinc-800 w-full outline-none"
                        type='text'
                        id='comment'
                        name='comment'
                        placeholder='Write comment here'
                        value={comment} // Use value to make the input controlled
                        onChange={(e) => setComment(e.target.value)} // Update the comment state
                    />
                    <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                </form>
                
            </div>
            
        </div>
    )
}

export default AddComment
/*
Comment Create
Comment data to create new item.
{
message: string(length: 2-500)
owner: string(User Id)
post: string(Post Id)
}
*/
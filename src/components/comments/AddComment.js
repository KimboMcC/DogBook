import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const AddComment = ({ addComment }) => {
    const [ comment, setComment ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from actually submitting
        console.log(comment); // Log the comment value
        addComment({
            message: comment,
            owner: {
                firstName: 'steve', //Import created name from REDUX
                lastName: 'Steveson', //Import created name from REDUX
                id: '08236423492347', //Import from REDUX. will have to create a random placeholder ID
                picture: 'http://placekitten.com/200/200' //Import created PP from REDUX
            },
            post: '06292347',
            key: `${Math.floor(Math.random() * 99999)}`
        })
        setComment('')
      };

      
    return (
        <div className="bg-zinc-800 flex rounded-md p-2 px-3">
            <div className='flex w-full'>
                <div className='w-10 h-10 pt-0.5 mr-2'>
                    <img className="rounded-full" src='http://placekitten.com/200/200' alt="profile"/>
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
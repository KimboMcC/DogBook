import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faHeart, faComment, faClock, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import Tag from '../tag/Tag'
import { loadComment, selectComments } from '../../redux/comments/commentsSlice';
import CommentSection from '../comments/CommentSection';
import AddComment from '../comments/AddComment';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike, selectPostArray, selectPost } from '../../redux/posts/postsSlice';
import { savePost } from '../../redux/accounts/accountsSlice';


function getTimeAgo(APItime) {
    const apiDate = new Date(APItime)
    const currentDate = new Date('2020-05-24T17:42:22.808Z')
    const timeDifference = currentDate - apiDate

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    if (years > 0) {
        return `${years}y`
    } else if (months > 0 ) {
        return `${months}mo`;
    } else if (days > 0 ) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
      } else if (minutes > 0) {
        return `${minutes}m`;
      }  else {
        return `< 1m`;
      }
}

const Post = ( props ) => {
    const { userFirst, userLast, time, text, likes, pp, tags, postKey, content, key } = props
    const timeAgo = getTimeAgo(time);
    const [comments, setComments] = useState([])
    const [postComments, setPostComments] = useState([])
    const [ isVisible, setIsVisible ] = useState(false)
    const {commentArray} = useSelector(selectComments)
    const dispatch = useDispatch()
    const [ liked, setLiked ] = useState(false)
    const [ saved, setSaved ] = useState(false)


    

    function toggleComments() {
        setIsVisible(!isVisible)
        console.log(postComments)
    }

    const mapState = state => {
        const filteredItems = selectPost(state)
        console.log(filteredItems)
    }

    function likePlus() {
        if (liked) {
            dispatch(removeLike(postKey))
            setLiked(false)
        } else {
            dispatch(addLike(postKey))
            setLiked(true)
        }
    }

    function postSave() {
        if (saved) {
            setSaved(false)
        } else {
            setSaved(true)
            dispatch(savePost(props))
        }
    }

    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/post/${postKey}/comment`, {
            headers: {
            'app-id': process.env.REACT_APP_API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
            const newComments = data.data.filter((newComment) => {
                // Check if the comment already exists in your Redux store
                return !commentArray.some((existingComment) => existingComment.id === newComment.id);
            });

            // Dispatch only the new comments to your Redux store
            dispatch(loadComment(newComments));
            })
            .catch((error) => console.error('Error', error));
    }, [ dispatch, postKey ]);

    useEffect(() => {
        const newPostComments = commentArray.filter((comment) => comment.post === postKey);
        setPostComments(newPostComments);
      }, [commentArray, postKey]);

    return (
        <div className="whole/post text-white mb-2 w">
            <div className=''>
                <img alt='users post' src={content}></img>
            </div>
            <div className='flex justify-between p-4 mt-2'>
                <div className='gap-5 flex-col flex w-full'>
                    <div className="flex space-around justify-between items-center">
                        <div className='flex items-center'>
                            <div className='w-12 mr-4'>
                                <img className='rounded-full' alt="User profile" src={pp}></img>
                            </div>
                            <p className='font-medium'>{userFirst} {userLast}</p>
                        </div>
                        <div className="interactions items-center flex w-min">
                            <p className='mr-2 font-medium'>{timeAgo}</p>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                    </div>
                            <p className='text-lg w-full'>{text}</p>
                         <div className='flex'>
                            {tags.map((tag, index) => (
                                 <Tag key={index} tags={tag}/>
                            ))}
                        </div>
                        <div className='flex justify-around ml-7'>
                            <div className="interactions items-center flex justify-between relative">
                                    <p className='mr-2 font-medium absolute right-4'>{likes}</p>
                                    <FontAwesomeIcon icon={liked ? fasHeart : faHeart} onClick={likePlus}/>
                            </div>
                            <div onClick={toggleComments} className="interactions items-center relative flex w-min">
                                    <p className='mr-2 font-medium absolute right-4'>{postComments.length}</p>
                                    <FontAwesomeIcon icon={faComment} />
                            </div>
                            <div className="interactions items-center flex w-min">
                                    <FontAwesomeIcon icon={saved ? fasBookmark : faBookmark} onClick={postSave}/>
                            </div>
                        </div>
                        <AddComment postKey={postKey}/> 
                        { isVisible && <CommentSection comments={postComments}/> }
                        { postComments.length > 0 ? isVisible ? 
                            <p className="-my-2 mx-auto font-light  text-sm" onClick={toggleComments}>Hide comments</p>
                            : <p className="-my-2 mx-auto font-light  text-sm" onClick={toggleComments}>View all comments</p> : null}
                    </div>
            </div>
        </div>    
    )   
}

export default Post;


import { faHeart, faComment, faClock } from '@fortawesome/free-regular-svg-icons';
import Interactions from './interactions'

const Post = ( props ) => {
    const { user, time, likes, comments, pp, content, cat } = props

    return (
        <>
            <div className="text-white whole-post w-full">
                <div className='flex justify-between p-4'>
                    <div className="flex space-x-4 items-center">
                        <div className="bg-green-300 w-10 h-10"></div>
                        <h3 >{user}</h3>
                    </div>
                    <Interactions 
                        data={`${time}m`}
                        icon={faClock}
                    />
                </div>
                <div className="post-content">
                    <img src={`http://placekitten.com/${cat}/400`}></img>
                </div>
                <div className="flex pt-4 justify-around">
                    <Interactions 
                        data={likes}
                        icon={faHeart}
                    />
                    <Interactions 
                        data={comments}
                        icon={faComment}
                    />
                </div>
                <div className='bg-gray-300 w-full h-0.5 mt-4 mb-4'></div>
            </div>
        </>
    )
}

export default Post;

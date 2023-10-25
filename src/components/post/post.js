import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faClock } from '@fortawesome/free-regular-svg-icons';
import Tag from '../tag/Tag'

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
    const { userFirst, userLast, time, text, likes, comments, pp, tags, content } = props
    const timeAgo = getTimeAgo(time);

    return (
        <div className="whole/post text-white mb-2">
            <div className=''>
                <img src={content}></img>
            </div>
            <div className='flex justify-between p-4 mt-2'>
                <div className='gap-7 flex-col flex w-full'>
                    <div className="flex space-around justify-between items-center ">
                        <div className='flex items-center'>
                            <div className='w-10 h-10 mr-4'>
                                <img className='rounded-xl' src={pp}></img>
                            </div>
                            <div className='font-medium'>{userFirst} {userLast}</div>
                        </div>
                        <div className="interactions items-center flex w-min">
                            <p className='mr-2 font-medium'>{timeAgo}</p>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        </div>
                            <p className='font-medium w-full'>{text}</p>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                {tags.map((tag) => (
                                    <Tag tags={tag}/>
                                ))}
                            </div>
                            <div className="interactions items-center flex w-min">
                                <p className='mr-2 font-medium'>{likes}</p>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>    
    )   
}

export default Post;

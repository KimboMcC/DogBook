import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectUser } from "../redux/accounts/accountsSlice"
import { useDispatch } from "react-redux"
import pp1 from '../images/Rectangle 1.png'
import Post from "../components/post/post"
import { getSavedPosts } from "../redux/posts/postsSlice"

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Profile = () => {
    const user = useSelector(selectUser)
    const aa = useSelector(getSavedPosts)

    return (
        <div>        
          <div className="flex flex-col justify-center py-6 bg-zinc-600">
            <img className="mx-auto mb-2" src={user.pp} width="120px" alt="user profile" />
            <h2 className="text-3xl mx-auto text-white font-semibold">{user.firstName} {user.lastName}</h2>
          </div>
            <h2 className="text-white bg-zinc-600 text-lg font-semibold text-center py-2">Your saved posts</h2>
            {aa.map((post) => {
              return (
                <>
                  <Post 
                    postKey={post.id}
                    userFirst={post.owner.firstName || 'Unknown'}
                    userLast={post.owner.lastName || 'Unknown'}
                    text={post.text}
                    likes={post.likes}
                    pp={post.owner.picture}
                    time={post.publishDate}
                    tags={post.tags}
                    content={post.image}
                  />
                </>
              );
            })}
            <div className="mb-44 mt-24 text-center text-white">
          <p className='italic text-sm'>"Nothing to see here, move along"</p>
          <p>Try saving posts to see them here.</p>
          </div>
        </div>
      );
}

export default Profile
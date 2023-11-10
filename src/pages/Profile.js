import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectUser } from "../redux/accounts/accountsSlice"
import { useDispatch } from "react-redux"
import pp1 from '../images/Rectangle 1.png'
import Post from "../components/post/post"

const Profile = () => {
    const user = useSelector(selectUser)
    console.log('Type of savedPosts:', typeof user.savedPosts);
console.log('savedPosts:', user.savedPosts);

    return (
        <div>        
          <div className="flex flex-col justify-center py-6 bg-zinc-600">
            <img className="mx-auto mb-2" src={user.pp} width="120px" alt="user profile" />
            <h2 className="text-3xl mx-auto text-white font-semibold">{user.firstName} {user.lastName}</h2>
          </div>
      
          {user.savedPosts.length === 0 ? (
            <p>No posts</p>
          ) : (
            user.savedPosts.map((post) => {
              return (
                <Post 
                  key={post.id}
                  postKey={post.id}
                  userFirst={post.userFirst || 'Unknown'}
                  userLast={post.userLast || 'Unknown'}
                  text={post.text}
                  likes={post.likes}
                  pp={post.pp || 'default-picture-url'}
                  time={post.time}
                  tags={post.tags}
                  content={post.content}
                />
              );
            })
          )}
        </div>
      );
}

export default Profile
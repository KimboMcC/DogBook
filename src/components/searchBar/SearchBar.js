import { useState } from "react"
import { useSelector } from "react-redux"
import { getTags } from "../../redux/posts/postsSlice"
import Post from "../post/post"

const SearchBar = () => {
    const [ searchTag, setSearchTag ] = useState("")
    const t = useSelector(getTags(searchTag))

    const handleChange = (event) => {
        setSearchTag(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div className="mx-auto text-white">
            <p className="text-white">Type below to search for relevant tags</p>
            <form onSubmit={handleSubmit}>
                <input
                    className="text-black"
                    type="text"
                    id="searchContent"
                    required
                    onChange={handleChange}
                />
                
        </form>
        <p>Found {t.length} posts.</p>
        {t.map((post) => {
            return (
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
            )
        })}
        <div className="mb-44 mt-24 text-center text-white">
            <p className='italic text-sm'>"Nothing to see here, move along"</p>
        </div>
        </div>
    )

}

export default SearchBar 


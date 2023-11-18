import { useState } from "react"
import { useSelector } from "react-redux"
import { getTags } from "../../redux/posts/postsSlice"
import Post from "../post/post"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <>
        <div className="mx-auto text-white bg-zinc-600 flex flex-col items-center">
            <p className="text-white text-lg font-semibold my-4">Search posts for relevant tags</p>
            <form onSubmit={handleSubmit}>
                <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />
                <input
                    className="text-white rounded-sm bg-zinc-800 border-white p-0.5 outline-2 focus:outline-white focus:outline focus:outline-opacity-50"
                    type="text"
                    id="searchContent"
                    required
                    onChange={handleChange}
                />
            </form>
            <div className="flex font-light text-sm my-2">
                <p>Found {t.length} posts matching: </p>
                <p className="italic"> {searchTag}</p>
            </div>
        </div>
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
        </>
    )

}

export default SearchBar 


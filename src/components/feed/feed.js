import Post from '../post/post';

const Feed = () => {

    return (
        <div className="w-8/12 mx-auto max-w-2xl">
            <Post 
                user={"Kim"}
                time={Math.ceil(Math.random() * 60)}
                likes={Math.floor(Math.random() * 999)}
                comments={Math.floor(Math.random() * 666)}
                cat={700}
            />
            <Post 
                user={"Barry"}
                time={Math.ceil(Math.random() * 60)}
                likes={Math.floor(Math.random() * 999)}
                comments={Math.floor(Math.random() * 666)}
                cat={800}
            />
            <Post 
                user={"Steve"}
                time={Math.ceil(Math.random() * 60)}
                likes={Math.floor(Math.random() * 999)}
                comments={Math.floor(Math.random() * 666)}
                cat={750}
            />
            <Post 
                user={"Dylan"}
                time={Math.ceil(Math.random() * 60)}
                likes={Math.floor(Math.random() * 999)}
                comments={Math.floor(Math.random() * 666)}
                cat={700}
            />
        </div>
    )
}

export default Feed;
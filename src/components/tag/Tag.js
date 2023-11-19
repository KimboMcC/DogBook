
const Tag = ( props ) => {

    return (
        <div className="bg-zinc-700 text-sm text-white px-3 py-2 rounded-md mr-2 lg:text-xl">
            <h4>{props.tags}</h4>
        </div>
    )
}

export default Tag;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interactions = (props) => {
    const { data, icon } = props

    return (
        <>
            <div className="flex items-center space-x-2">
                <p>{data}</p>
                <FontAwesomeIcon icon={icon} />
            </div>
        </>
    )
}

export default Interactions;

// Can post width be set to em/rem of container? Might make it easier to re-size/rescale in future.
// If not set to 60% of vw? 
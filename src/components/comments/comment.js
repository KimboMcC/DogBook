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
      return `${months}h`;
  } else if (days > 0 ) {
      return `${days}m`;
  } else if (hours > 0) {
      return `${hours}m`;
    } else if (minutes > 0) {
      return `${minutes}s`;
    }  else {
      return `< 1m`;
    }
  }

function Commentz( props ) {
  const { pp, posted, message, time } = props
  const timeAgo = getTimeAgo(time);

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <div className='w-8'>
          <img src={pp} alt='user profile' className="rounded-full"/>
        </div>
        <div>
          <p className='text-xs opacity-80'>{posted}</p>
          <p className="text-s">{message}</p>
        </div>
      </div>
      <p className='text-xs'>
        {timeAgo}
      </p>
    </div>
  )
}

export default Commentz;

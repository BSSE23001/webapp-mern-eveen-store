import { Link } from 'react-router-dom'
const AnnouncementBar = () => {
  let sale = { percentage: 70, isRunning: true }

  return (
    <>
      {sale.isRunning && (
        <div
          className='items-center text-center
        bg-amber-300 p-[15px]'
        >
          <Link className='text-[18px] leading-[1.1] font-inter p-[15px] m-0 text-[#333e48] hover:text-[#fed700] font-[700] transition-all duration-[.35s] ease-in-out'>
            Azadi Sale is Live UPTO {sale.percentage}% OFF
          </Link>
        </div>
      )}
    </>
  )
}

export default AnnouncementBar

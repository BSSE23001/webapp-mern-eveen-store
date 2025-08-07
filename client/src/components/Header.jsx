import { Link } from 'react-router-dom'

const Header = () => {
  let sale = { percentage: 70, isRunning: true }

  return (
    <>
      {sale.isRunning && (
        <div
          className='container-fluid items-center text-center
        bg-amber-300 p-3'
        >
          <Link className='text-[18px] leading-[1.1] font-inter p-0 m-0 text-[#333e48] hover:text-[#fed700] font-[700] transition-all duration-[.35s] ease-in-out'>
            Summer Sale is Live UPTO {sale.percentage}% OFF
          </Link>
        </div>
      )}
      <div className='leading-[1.3] border-b border-[#333e481a] pt-1.5 pb-1.5'>
        <div className='container w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto'>
          <div className='flex justify-between'>
            <div className='flex'>
              <ul className='list-none flex text-[#333e48]'>
                <li className='flex items-center m-0 pt-0 pb-0 pr-[7px] pl-[7px] text-[13px]'>
                  <span className='text-[#fed700] flex items-centers mr-0.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-3.5 h-3.5'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </span>
                  <span></span>
                </li>
                <li className='m-0 p-0'>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header

// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useDispatch, useSelector } from 'react-redux'
// import { useState } from 'react'
// import ThemeToggle from './ThemeToggle'
// import { useLogoutMutation } from '../features/auth/authApi'
// import { setCredentials } from '../features/auth/authSlice'

// const UserNavbar = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false)
//   const user = useSelector((state) => state.auth.user)
//   const [logout] = useLogoutMutation()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleLogout = async () => {
//     const res = await logout().unwrap()
//     dispatch(setCredentials(res.data))
//     navigate('/auth/login')
//   }

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: 'spring', stiffness: 120 }}
//       className='bg-white dark:bg-gray-900 shadow-md transition-colors duration-500'
//     >
//       <div className='container mx-auto p-4 flex justify-between items-center'>
//         <Link
//           to='/user'
//           className='text-2xl font-bold text-gray-900 dark:text-white'
//         >
//           BugNest
//         </Link>

//         <div className='flex items-center space-x-6'>
//           <NavLink
//             to='/user'
//             end
//             className={({ isActive }) =>
//               `text-gray-600 dark:text-gray-400 transition-colors duration-300 ${
//                 isActive
//                   ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600'
//                   : 'hover:text-blue-600 dark:hover:text-blue-400'
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to='/user/projects'
//             className={({ isActive }) =>
//               `text-gray-600 dark:text-gray-400 transition-colors duration-300 ${
//                 isActive
//                   ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600'
//                   : 'hover:text-blue-600 dark:hover:text-blue-400'
//               }`
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to='/user/issues'
//             className={({ isActive }) =>
//               `text-gray-600 dark:text-gray-400 transition-colors duration-300 ${
//                 isActive
//                   ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600'
//                   : 'hover:text-blue-600 dark:hover:text-blue-400'
//               }`
//             }
//           >
//             Issues
//           </NavLink>

//           <ThemeToggle />

//           <div className='relative'>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsProfileOpen(!isProfileOpen)}
//               className='flex items-center space-x-2 text-gray-600 dark:text-gray-400'
//             >
//               <div className='h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>
//                 {user.name.charAt(0)}
//               </div>
//               <span>{user.name}</span>
//             </motion.button>
//             {isProfileOpen && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95, y: -10 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                 className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5'
//               >
//                 <div className='py-1'>
//                   <Link
//                     to='/user/profile'
//                     className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700'
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   )
// }

// export default UserNavbar

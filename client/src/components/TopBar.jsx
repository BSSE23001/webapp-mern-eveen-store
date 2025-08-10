import { useState } from 'react'

function TopBar() {
  const [currency, setCurrency] = useState('PKR')

  const topBarItems = [
    {
      type: 'phone',
      content: '+92 335-8544254',
      icon: (
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
      ),
    },
    {
      type: 'email',
      content: 'eveendotpk@gmail.com',
      icon: (
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 64 64'
        >
          <title>mail-1</title>
          <path d='M59.456 53.696v-27.392q-1.152 1.28-2.496 2.304-9.536 7.36-15.232 12.096-1.792 1.536-2.944 2.368t-3.072 1.792-3.648 0.832h-0.128q-1.664 0-3.648-0.832t-3.072-1.792-2.944-2.368q-5.632-4.736-15.232-12.096-1.344-1.024-2.496-2.304v27.392q0 0.448 0.384 0.832t0.768 0.32h52.608q0.448 0 0.768-0.32t0.384-0.832zM59.456 16.192v-0.896t-0.064-0.448-0.064-0.448-0.192-0.32-0.32-0.256-0.512-0.128h-52.608q-0.448 0-0.768 0.384t-0.384 0.768q0 6.016 5.312 10.176 6.848 5.376 14.272 11.264 0.256 0.192 1.28 1.088t1.6 1.344 1.6 1.088 1.792 1.024 1.536 0.32h0.128q0.704 0 1.536-0.32t1.792-1.024 1.6-1.088 1.6-1.344 1.28-1.088q7.424-5.888 14.336-11.264 1.92-1.536 3.584-4.16t1.664-4.672zM64 14.848v38.848q0 2.368-1.664 4.032t-4.032 1.728h-52.608q-2.304 0-4.032-1.728t-1.664-4.032v-38.848q0-2.368 1.664-4.032t4.032-1.664h52.608q2.368 0 4.032 1.664t1.664 4.032z'></path>
        </svg>
      ),
    },
  ]

  const rightSideItems = [
    {
      type: 'location',
      content: 'Store Location',
      link: '/pages/store-location',
      icon: (
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 49 64'
        >
          <title>electro-marker-icon</title>
          <path d='M22.912 0h3.84c6.848 0.896 13.632 3.968 17.92 9.536 2.752 3.52 4.224 7.872 4.544 12.288v3.072c-0.512 5.824-2.688 11.328-5.504 16.32-4.928 8.64-11.968 15.808-18.944 22.784h-0.128c-7.424-6.464-13.44-14.4-18.752-22.656-3.136-4.928-5.44-10.56-5.888-16.448v-2.624c0.512-8.384 5.888-16.192 13.44-19.648 2.944-1.472 6.208-2.176 9.472-2.624M14.336 6.976c-4.928 2.688-8.768 7.616-9.664 13.184-0.704 4.8 0.576 9.6 2.496 13.888 4.096 9.216 10.688 16.896 17.472 24.192 0.192-0.128 0.512-0.32 0.64-0.448 6.016-6.72 11.904-13.76 16.256-21.696 2.496-4.736 3.968-10.112 3.2-15.488-0.832-6.144-5.248-11.456-10.752-14.208-6.144-3.136-13.696-2.688-19.648 0.576zM23.296 12.992c4.288-0.512 9.024 1.408 11.2 5.248 2.304 4.48 1.28 10.752-2.944 13.696-5.504 3.968-14.592 1.984-17.344-4.352-1.472-3.136-0.704-6.72 0.832-9.6 1.728-2.88 4.992-4.608 8.256-4.992M22.336 17.472c-1.92 0.64-3.648 2.112-4.224 4.16-1.152 3.776 1.984 8.256 6.016 8.192 3.776 0.384 7.808-2.688 7.36-6.72 0-4.48-5.184-7.168-9.152-5.632z'></path>
        </svg>
      ),
    },
    {
      type: 'account',
      content: (
        <>
          <a href='/account/login'>Sign in</a>
          <span className='mx-1'>or</span>
          <a href='/account/register'>Register</a>
        </>
      ),
      icon: (
        <a href='https://eveen.pk/account/login'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='13'
            viewBox='0 0 59 64'
          >
            <title>electro-user-icon</title>
            <path d='M28.224 0h2.496c4.544 0.256 9.088 1.984 12.48 5.056 5.568 4.928 8.256 13.056 6.336 20.288-1.216 4.864-4.416 9.024-8.384 12.032 6.4 2.944 12.16 7.744 15.040 14.272 1.728 3.712 2.56 7.744 2.88 11.776v0.576h-5.888c-0.064-5.568-2.112-11.2-5.824-15.36-4.864-5.568-12.416-8.576-19.776-7.872-7.296 0.576-14.144 4.864-18.176 11.008-2.368 3.584-3.328 7.936-3.52 12.224h-5.888v-0.64c0.384-4.032 1.216-8 2.88-11.712 2.88-6.528 8.64-11.328 15.040-14.272-6.144-4.16-9.536-11.776-8.832-19.072 0.704-9.728 9.472-17.792 19.136-18.304M26.304 6.208c-5.44 0.96-9.92 5.376-11.136 10.752-1.92 7.040 2.56 15.168 9.6 17.216 6.848 2.24 14.976-1.024 18.176-7.552 2.88-5.696 1.216-13.056-3.648-17.216-3.456-3.136-8.448-4.16-12.992-3.2z'></path>
          </svg>
        </a>
      ),
    },
    {
      type: 'language',
      content: (
        <div className='relative cursor-pointer group'>
          <span className='flex'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fal'
              data-icon='globe'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'
              className='w-5 h-5 fill-current'
            >
              <path
                fill='currentColor'
                d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z'
              ></path>
            </svg>
          </span>

          <div className='absolute top-full right-0 w-52 bg-white rounded-b-xl shadow-lg border border-body-border-color border-t-2 border-main-color z-10 max-h-[60vh] overflow-y-auto hidden group-hover:block transition-all duration-300 ease-in-out'>
            <div className='flex'>
              <div className='flex-1'>
                <div className='flex items-center justify-between p-gutter-xxs text-body-color text-xs font-bold uppercase border-b border-body-border-color'>
                  <span>Currencies</span>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 41 64'
                    className='ml-1 hidden'
                  >
                    <path d='M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z'></path>
                  </svg>
                </div>
                <ul className='lc-currencies-list'>
                  <li
                    data-value='PKR'
                    className='p-gutter-xxs text-xs uppercase cursor-pointer text-body-color hover:text-body-link-hover bg-body-color-rgba/[0.05] border-l-2 border-transparent border-main-color'
                  >
                    {currency}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className='hidden lg:block bg-[var(--topbar-bg-color)] py-[6px] border-b border-[rgba(var(--topbar-text-color-rgba),0.1)]'>
      <div className='container w-full'>
        <div className='flex justify-between'>
          {/* Topbar Left */}
          <div className='flex'>
            <ul className='list-none flex'>
              {topBarItems.map((item, index) => (
                <li
                  key={index}
                  className='flex relative items-center px-[7px] text-[var(--topbar-text-color)] text-[calc(var(--body-font-size) - 1px)] xl:px-[var(--gutter-xs)]
                  after:content-[""] after:absolute after:top-3/6 after:right-0 after:h-[15px] after:w-[1px] after:bg-[rgba(var(--topbar-text-color-rgba), 0.1)] after:-translate-y-1/2
                  first:ps-0 last:pe-0 last:after:hidden'
                >
                  <span className='flex items-center me-1.5 text-[var(--main-color)]'>
                    {item.icon}
                  </span>
                  <span className='text'>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Topbar Right */}
          <div className='flex'>
            <ul className='list-none flex'>
              {rightSideItems.map((item, index) => (
                <li
                  key={index}
                  className='flex relative items-center px-[7px] text-[var(--topbar-text-color)] text-[calc(var(--body-font-size) - 1px)] xl:px-[var(--gutter-xs)]
                  after:content-[""] after:absolute after:top-3/6 after:right-0 after:h-[15px] after:w-[1px] after:bg-[rgba(var(--topbar-text-color-rgba), 0.1)] after:-translate-y-1/2
                  first:ps-0 last:pe-0 last:after:hidden'
                >
                  {item.link ? (
                    <a href={item.link} className='flex items-center'>
                      <span className='flex items-center me-1.5 text-[var(--main-color)]'>
                        {item.icon}
                      </span>
                      <span className='text'>{item.content}</span>
                    </a>
                  ) : (
                    <>
                      <span className='flex items-center me-1.5 text-[var(--main-color)]'>
                        {item.icon}
                      </span>
                      <span className='text'>{item.content}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar

// <div className='hidden lg:block bg-[var(--topbar-bg-color)] py-[6px] border-b border-[rgba(var(--topbar-text-color-rgba),0.1)]'>
//   <div className='container w-full'>
//     <div className='flex justify-between'>
//       <div className='flex'>
//         <ul className=''>
//           <li className=''>
//             <span className='text-[#fed700] flex items-centers mr-0.5'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 viewBox='0 0 24 24'
//                 fill='currentColor'
//                 className='w-3.5 h-3.5'
//               >
//                 <title>phone</title>
//                 <path
//                   fill-rule='evenodd'
//                   d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
//                   clip-rule='evenodd'
//                 />
//               </svg>
//             </span>
//             <span>+92 335-8544254</span>
//           </li>
//           <li className='flex relative items-center px-[7px]'>
//             <span></span>
//             <span></span>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div>
//       <div>
//         <ul>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>

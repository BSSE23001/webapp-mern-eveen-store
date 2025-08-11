// const Footer = () => {
//   return (
//     <div className='mt-auto'>
//       <h1>Hello</h1>
//     </div>
//   )
// }
// export default Footer

import React from 'react'

// Assuming you have SVG components for your icons
// For example:
// const PaperPlaneIcon = () => ( ... your SVG here ... );
// const PhoneIcon = () => ( ... your SVG here ... );
// etc.

const Footer = () => {
  // Use state to manage the menu toggle on small screens
  const [activeMenu, setActiveMenu] = React.useState(null)

  const handleToggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  return (
    <div className='mt-auto'>
      {/* Newsletter Section */}
      <div className='relative mb-[-33px] bg-main'>
        <div className='container mx-auto px-[15px]'>
          <div className='p-gutter-xs rounded-lg md:flex md:items-center md:justify-between'>
            <div className='flex items-center text-size-heading-h3 pt-[6px] pb-[15px] leading-[1.1] font-normal md:pb-[6px] md:pe-gutter-sm'>
              {/* Assuming the SVG is a React component */}
              <svg
                width='30px'
                height='30px'
                aria-hidden='true'
                focusable='false'
                data-prefix='fal'
                data-icon='paper-plane'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='me-[7px]'
              >
                <path
                  fill='currentColor'
                  d='M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z'
                ></path>
              </svg>
              <span className='text-body'>Sign up to Newsletter</span>
            </div>
            <div className='hidden text-body pb-[6px] pt-[8px] pe-gutter-sm xl:block'>
              <p className='m-0'>
                and receive
                <strong>
                  {' '}
                  updates on special promotions, gift ideas, sales and more.
                </strong>
              </p>
            </div>
            <form
              method='post'
              action='/contact#ContactFooter'
              id='ContactFooter'
              acceptCharset='UTF-8'
              className='w-full flex flex-wrap md:w-auto xl:w-[40%]'
            >
              <div className='w-full'>
                <div className='flex flex-wrap w-full'>
                  <input
                    type='email'
                    name='contact[email]'
                    placeholder='Enter your email'
                    aria-label='Enter your email'
                    aria-required='true'
                    autoCorrect='off'
                    autoCapitalize='off'
                    required
                    className='border-0 outline-0 bg-white text-body text-size-body font-normal pt-gutter-xxs pb-gutter-xxs pl-gutter-xs pr-gutter-xs flex-[0_0_100%] h-[42px] md:flex-1 md:border md:border-body-border md:rounded-l-[25px] md:rounded-r-none'
                  />
                  <button
                    type='submit'
                    className='pt-[6px] pb-[6px] pl-[35px] pr-[35px] h-[42px] font-body text-[14px] font-normal rounded-[25px] bg-btn1-hover-bg text-btn1-hover border border-btn1-hover-border flex-[0_0_100%] mt-gutter-xs md:mt-0 md:flex-initial md:rounded-l-none md:rounded-r-[25px] cursor-pointer w-fit'
                  >
                    <span className='btn-text'>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Widgets Section */}
      <div className='bg-[#f8f8f8] pt-[92px] pb-[66px]'>
        <div className='pr-[40px] pl-[40px] container mx-auto'>
          <div className='grid grid-cols-1 gap-gutter-lg md:grid-cols-4 md:gap-gutter-sm lg:justify-between'>
            {/* Contact Information Block */}
            <div className='flex flex-col'>
              <div className='flex'>
                <a href='/' className='decoration-0 text-body-link'>
                  <img
                    className='w-[200px]'
                    src='//eveen.pk/cdn/shop/files/logo_94a8b223-deab-4122-b823-38fd49b52dde_200x.png?v=1671623025'
                    alt='eveen.pk'
                  />
                </a>
              </div>
              <div className='pt-gutter-sm md:pt-[60px]'>
                <ul className='flex items-center space-x-gutter-sm'>
                  <li>
                    <a
                      href='https://www.facebook.com/eveen.pk'
                      target='_blank'
                      rel='noopener'
                      title='Facebook'
                    >
                      <svg
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 37 64'
                      >
                        <path d='M34.24 0.448v9.408h-5.568q-3.072 0-4.16 1.28t-1.088 3.84v6.784h10.496l-1.408 10.56h-9.088v27.136h-10.944v-27.136h-9.088v-10.56h9.088v-7.808q0-6.656 3.712-10.304t9.92-3.648q5.248 0 8.128 0.448z'></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/eveen.pk/'
                      target='_blank'
                      rel='noopener'
                      title='Instagram'
                    >
                      <svg
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 55 64'
                      >
                        <path d='M44.16 32q0-1.664-0.384-3.2h11.264v22.016q0 3.584-2.496 6.144t-6.080 2.56h-37.888q-3.584 0-6.080-2.56t-2.496-6.144v-22.016h11.136q-0.256 2.048-0.256 3.2 0 6.784 4.864 11.712t11.776 4.928q6.784 0 11.712-4.928t4.928-11.712zM46.464 4.48q3.584 0 6.080 2.496t2.496 6.080v9.344h-13.952q-4.992-7.040-13.568-7.040-8.832 0-13.568 7.040h-13.952v-9.344q0-3.584 2.496-6.080t6.080-2.496h37.888zM50.56 15.104v-4.608q0-1.536-1.536-1.536h-4.608q-1.536 0-1.536 1.536v4.608q0 0.512 0.448 1.024t1.088 0.512h4.608q1.536 0 1.536-1.536zM37.76 32q0 4.224-3.008 7.232t-7.232 3.008-7.232-3.008-3.008-7.232q0-4.352 3.008-7.296t7.232-2.944 7.232 2.944 3.008 7.296z'></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h6
                className='flex items-center justify-between cursor-pointer md:cursor-default'
                onClick={() => handleToggleMenu('quick-links')}
              >
                Quick Links
                <span className='flex items-center transition-transform duration-350 md:hidden'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 41 64'
                  >
                    <path d='M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z'></path>
                  </svg>
                </span>
              </h6>
              <ul
                className={`mt-gutter-sm menu-list ${activeMenu === 'quick-links' ? 'block' : 'hidden'} md:block md:mt-gutter-md`}
              >
                <li className='list-none mb-[12px]'>
                  <a
                    href='/pages/about-us'
                    className='text-body-color hover:font-bold'
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div
              className={`block-menu ${activeMenu === 'customer-service' ? 'active' : ''}`}
            >
              <h6
                className='flex items-center justify-between cursor-pointer md:cursor-default'
                onClick={() => handleToggleMenu('customer-service')}
              >
                Customer Services
                <span className='flex items-center transition-transform duration-350 md:hidden'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 41 64'
                  >
                    <path d='M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z'></path>
                  </svg>
                </span>
              </h6>
              <ul
                className={`mt-gutter-sm menu-list ${activeMenu === 'customer-service' ? 'block' : 'hidden'} md:block md:mt-gutter-md`}
              >
                <li className='list-none mb-[12px]'>
                  <a
                    href='/pages/privacy-statement'
                    className='text-body-color hover:font-bold'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className='list-none mb-[12px]'>
                  <a
                    href='/pages/exchange-policy'
                    className='text-body-color hover:font-bold'
                  >
                    Exchange Policy
                  </a>
                </li>
                <li className='list-none mb-[12px]'>
                  <a
                    href='/pages/advance-payment-policy'
                    className='text-body-color hover:font-bold'
                  >
                    Advance Payment Policy
                  </a>
                </li>
                <li className='list-none mb-[12px]'>
                  <a
                    href='/pages/terms-of-service'
                    className='text-body-color hover:font-bold'
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div
              className={`block-menu ${activeMenu === 'contact-us' ? 'active' : ''}`}
            >
              <h6
                className='flex items-center justify-between cursor-pointer md:cursor-default'
                onClick={() => handleToggleMenu('contact-us')}
              >
                Contact Us
                <span className='flex items-center transition-transform duration-350 md:hidden'>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 41 64'
                  >
                    <path d='M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z'></path>
                  </svg>
                </span>
              </h6>
              <ul
                className={`mt-gutter-sm menu-list ${activeMenu === 'contact-us' ? 'block' : 'hidden'} md:block md:mt-gutter-md`}
              >
                <li className='list-none mb-[12px]'>
                  <a href='#' className='text-body-color hover:font-bold'>
                    ▤ Mon - Sun / 9:00 AM - 11:00 PM
                  </a>
                </li>
                <li className='list-none mb-[12px]'>
                  <a
                    href='mailto:eveendotpk@gmail.com'
                    className='text-body-color hover:font-bold'
                  >
                    ✉ eveendotpk@gmail.com
                  </a>
                </li>
                <li className='list-none mb-[12px]'>
                  <a
                    href='tel:+923358544254'
                    className='text-body-color hover:font-bold'
                  >
                    ✆ +92 335-8544254
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Payment Section */}
      <div className='bg-[#eaeaea] py-gutter-xxs'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='text-body-color text-center mb-gutter-xxs md:text-left md:mb-0'>
              © 2025{' '}
              <strong>
                <a href='/' title=''>
                  eveen.pk
                </a>
              </strong>
              . All Rights Reserved
            </div>
            {/* The payment icons list is empty in the original HTML, but you can populate it here */}
            <div className='flex justify-center md:justify-end'>
              <ul className='flex list-none'>
                {/* Add your payment icon list items here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

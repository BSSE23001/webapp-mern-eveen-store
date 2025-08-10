import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen leading-[1.3] bg-white font-normal text-[14px] text-[var(--body-color)] font-inter flex flex-col lg:transition-transform lg:duration-350 lg:ease-in-out'>
      <header>
        <Header />
      </header>
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout

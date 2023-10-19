/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success(`${user.displayName} Logged Out Successfully`))
      .catch((error) => console.error(error))
  }

  return (
    <header className='z-50 flex flex-wrap w-full py-3 text-sm bg-white border-b border-gray-200 sm:justify-start sm:flex-nowrap sm:py-0 dark:bg-gray-800 dark:border-gray-700'>
      <nav
        className='relative w-full px-4 mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center justify-between gap-4'>
          <NavLink
            to='/'
            className='flex-none text-xl font-semibold dark:text-white'
            href='#'
            aria-label='Brand'
          >
            <img src='https://i.ibb.co/DCmXkQL/ms10logo2.png' alt='' />
          </NavLink>
          <div className='sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              <svg
                className='w-4 h-4 hs-collapse-open:hidden'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  // fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
              <svg
                className='hidden w-4 h-4 hs-collapse-open:block'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className='hidden overflow-hidden text-xl transition-all duration-300 hs-collapse basis-full grow sm:block '
        >
          <div className='flex flex-col mt-5 gap-y-4 gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
            <NavLink
              to='/'
              className='font-medium text-blue-600 sm:py-6 dark:text-blue-500'
              href='#'
              aria-current='page'
            >
              Home
            </NavLink>
            <NavLink
              to='addproduct'
              className='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'
              href='#'
            >
              Add Product
            </NavLink>
            <NavLink
              to='mycart'
              className='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'
              href='#'
            >
              My Cart
            </NavLink>

            {user && (
              <>
                <Link className='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'>
                  {user?.displayName}
                </Link>
                <Link className='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'>
                  <img
                    className='object-cover w-10 rounded-full'
                    src={user?.photoURL}
                  />
                </Link>
              </>
            )}

            {user ? (
              <button
                onClick={handleLogOut}
                className='flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500'
                href='#'
              >
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                </svg>
                Log Out
              </button>
            ) : (
              <NavLink
                to='/login'
                className='flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500'
                href='#'
              >
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                </svg>
                Log in
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <ToastContainer />
    </header>
  )
}
export default Navbar

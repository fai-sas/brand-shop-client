/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { updateProfile } from 'firebase/auth'
import { AuthContext } from '../providers/AuthProvider'

const Register = () => {
  const { createUserWithEmail } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, email, password)

    if (password.length < 6) {
      toast.error('Password should be at least 6 characters or longer')
      return
    } else if (!/(?=.*[A-Z])(?=.*[@#$%^&+=!])/.test(password)) {
      toast.error(
        'Password should have at least one upper case and one special character.'
      )
      return
    }

    createUserWithEmail(email, password)
      .then((result) => {
        toast.success('Successfully Registered')
        e.target.reset()
        navigate('/login')
        console.log(result.user)

        const createdAt = result.user?.metadata?.creationTime
        const user = { email, createdAt: createdAt }

        fetch(
          'https://brand-shop-server-6hfij00m5-coding-freaks-projects.vercel.app/user',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(user),
          }
        ).then((data) => {
          if (data.insertedId) {
            console.log('user added to the database')
          }
        })

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL:
            'https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg',
        })
          .then(() => console.log('profile updated'))
          .catch()
      })

      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='container relative p-8 mx-auto my-8 overflow-hidden'>
      <div className='max-w-screen-md px-4 py-12 mx-auto sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8'>
        <div className='md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12'>
          <h1 className='py-8 text-3xl font-bold text-center text-gray-800 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200'>
            <span className='text-blue-600 dark:text-blue-500'>Sign Up</span>
          </h1>

          <form onSubmit={handleRegister}>
            <div className='mb-4'>
              <label
                htmlFor='hs-hero-name-2'
                className='block text-sm font-medium dark:text-white'
              >
                <span className='sr-only'>Full name</span>
              </label>
              <input
                type='text'
                name='name'
                id='hs-hero-name-2'
                className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                placeholder='Full name'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='hs-hero-email-2'
                className='block text-sm font-medium dark:text-white'
              >
                <span className='sr-only'>Email address</span>
              </label>
              <input
                type='email'
                name='email'
                id='hs-hero-email-2'
                className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                placeholder='Email Address'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='hs-hero-password-2'
                className='block text-sm font-medium dark:text-white'
              >
                <span className='sr-only'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                id='hs-hero-password-2'
                className='block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                placeholder='Password'
              />
            </div>

            <div className='grid'>
              <button
                type='submit'
                className='inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:p-4'
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" rounded-lg hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
      <ToastContainer />
    </div>
  )
}
export default Register

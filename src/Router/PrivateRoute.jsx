/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div
        className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full'
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    )
  }

  if (user) {
    return children
  }

  return <Navigate to='/login'></Navigate>
}
export default PrivateRoute

import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {id} = useParams()
  return (
    <div className='text-white bg-gray-700 text-center p-10 text-3xl'>
       User :{id}
    </div>
  )
}

export default User

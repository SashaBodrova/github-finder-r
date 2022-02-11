import React from 'react'
import spinner from './assets/cat.gif'

const Spinner = props => {
  return (
    <div className='w-80 mt-20'>
      <img width={180} className='text-center mx-auto' src={ spinner } alt='Loading...'/>
    </div>
  )
}

export default Spinner
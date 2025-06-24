import React from 'react'

const Button = ({name}) => {
  return (
    <button className='ring-1 ring-black px-3 py-1 rounded-full hover:ring-2 text-sm font-bold'>{name}</button>
  )
}

export default Button
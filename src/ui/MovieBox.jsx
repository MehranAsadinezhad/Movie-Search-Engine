import React from 'react'

export default function MovieBox({children}) {
  return (
    <div className='bg-midPurple
     w-[400px] h-[500px] rounded-lg overflow-y-scroll'>{children}</div>
  )
}
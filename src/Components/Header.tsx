import React from 'react'
import DateRange from './DateRange'
import Month from './Month'

const Header = () => {
  return (
    <header className='mb'>
      <div className='mb'>
        <DateRange /> 
      </div>
      <Month />
    </header>
  )
}

export default Header
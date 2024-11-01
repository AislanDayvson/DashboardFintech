import React from 'react'
import DateRange from './DateRange'
import Month from './Month'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    if(location.pathname === '/'){
      setTitle('Resumo')
      document.title = 'Fintech | Resumo'
    } else if(location.pathname === '/vendas'){
      setTitle('Vendas')
      document.title = 'Fintech | Vendas'
    }
  }, [location])
  return (
    <header className='mb'>
      <div className='daterange mb'>
        <DateRange /> 
        <h1 className='box bg-3'>{title}</h1>
      </div>
      <Month />
    </header>
  )
}

export default Header
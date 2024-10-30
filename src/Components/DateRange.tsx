import React from 'react'
import DateInput from './DateInput'

const DateRange = () => {
    const [inicio, setInicio] = React.useState('')
    const [final, setFinal] = React.useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <DateInput value={inicio} label='Início' onChange={({target}) => setInicio(target.value)} />
            {inicio}
        <DateInput value={final} label='Final' onChange={({target}) => setFinal(target.value)} />
            {final}
    </form>
  )
}

export default DateRange
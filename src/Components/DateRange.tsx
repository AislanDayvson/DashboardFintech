import DateInput from './DateInput'
import { useData } from '../Context/DataContext'

const DateRange = () => {
  const {inicio, setInicio, final, setFinal} = useData()
  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
        <DateInput value={inicio} label='Início' onChange={({target}) => setInicio(target.value)} />
        <DateInput value={final} label='Final' onChange={({target}) => setFinal(target.value)} />
    </form>
  )
}

export default DateRange
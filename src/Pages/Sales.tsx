import { useData } from '../Context/DataContext'
import SaleItem from '../Components/SaleItem'

const Sales = () => {
    const {data} = useData()
    if(data === null) return null
  return (
    <ul>
        {data.map((venda) => <li key={venda.id}><SaleItem venda={venda}/></li>)}
    </ul>
  )
}

export default Sales
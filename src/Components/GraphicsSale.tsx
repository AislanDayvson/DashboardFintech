import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IVenda } from '../Context/DataContext'

type VendaDia = {
    data: string;
    pago: number;
    processando: number;
    falha: number;
}

function transformData(data: IVenda[]): VendaDia[]{
    const days = data.reduce((acc: {[key: string]: VendaDia}, item) => {
        const day = item.data.split(' ')[0]
        if(!acc[day]){
            acc[day] = {
                data: day,
                pago: 0,
                falha: 0,
                processando: 0,
            }
        } 
        acc[day][item.status] += item.preco
        return acc
    }, {})  
    return Object.values(days).map((day) => ({...day, data: day.data.substring(5)}))
}

const GraphicsSale = ({data}: {data: IVenda[]}) => {
    const transformedData = transformData(data)
  return (
    <ResponsiveContainer width={"99%"} height={400}>
        <LineChart data={transformedData}>
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3} />
            <Line type="monotone" dataKey="processando" stroke="#fbcb21" strokeWidth={3}/>
            <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3}/>
        </LineChart>
    </ResponsiveContainer>
  )
}

export default GraphicsSale
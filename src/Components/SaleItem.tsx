import React from 'react'
import { IVenda } from '../Context/DataContext'
import { NavLink } from 'react-router-dom'

const SaleItem = ({venda}: {venda: IVenda}) => {
  return (
    <div className='sale box'>
        <NavLink to={`/vendas/${venda.id}`} style={{fontFamily: "monospace"}}>{venda.id}</NavLink>
        <div>{venda.nome}</div>
        <div>{venda.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
    </div>
  )
}

export default SaleItem
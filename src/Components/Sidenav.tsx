import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import FintechSVG from '../assets/FintechSVG'
import { NavLink } from 'react-router-dom'
const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title='fintech logo' />
      <ul>
        <li>
          <span><img src={resumo} alt="" /></span>
          <NavLink to='/'>Resumo</NavLink>
        </li>
        <li>
          <span><img src={vendas} alt="" /></span>
          <NavLink to='/sales'>Vendas</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
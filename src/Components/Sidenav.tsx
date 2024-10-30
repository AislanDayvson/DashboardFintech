import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import FintechSVG from '../assets/FintechSVG'
const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title='fintech logo' />
      <ul>
        <li>
          <span><img src={resumo} alt="" /></span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span><img src={vendas} alt="" /></span>
          <a href="">Vendas</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
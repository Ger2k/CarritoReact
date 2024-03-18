import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Práctica prueba técnica de React</h4>
      <h5>Shopping Cart con useContext</h5>
    </footer>
  )
}
import { Link } from 'react-router-dom'
import forvetLogo from '../../../assets/forvet_logo.svg'

export default function HeaderLogo() {
   return (
      <Link className='logo-container' to='/'>
         <img src={forvetLogo} alt="forvet" />
      </Link>
   )
}

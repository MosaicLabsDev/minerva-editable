import './Header.css'
import HeaderNavList from './HeaderNavList/HeaderNavList';

export default function Header() {

   return (
      <header className={'navbar'}>

         <nav className='nav-container'>
            <a className='logo-container' href='/'>
               <img src='https://forvet.org/static/media/forvet_logo.888beb8dce69f774ef126801401a1a95.svg' alt="forvet" />
            </a>

            < HeaderNavList />

         </nav>

      </header>
   )
}
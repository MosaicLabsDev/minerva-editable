
import './MegaMenuContainer.css'
import { useHeaderContext } from '../../../../context/Header/HeaderContext'

export default function MegaMenuContainer({ children}) {
   const {isMegaMenu} = useHeaderContext()
   return (
      <nav className={`mega-menu-container ${isMegaMenu ? 'mega-menu--open' : ''}`}>
         <ul className='mega-menu-list'>
            {children}
         </ul>
      </nav>
   )
}

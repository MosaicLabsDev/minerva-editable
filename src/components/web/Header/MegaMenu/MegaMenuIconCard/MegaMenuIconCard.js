import { Link } from 'react-router-dom'
import './MegaMenuIconCard.css'

export default function MegaMenuIconCard({info}) {
   return (
      <Link className='mega-menu-iconCard-container-link' to={`/cursos?tipo=${info.text}`}>
         <div className='mega-menu-iconCard-image-container'>
            {info.icon}
         </div>
         <div className='mega-menu-iconCard-content'>
            <span className='mega-menu-iconCard-link-text'>{info.text}</span>
         </div>
      </Link>
   )
}

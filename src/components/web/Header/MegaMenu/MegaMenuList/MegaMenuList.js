import { Link } from 'react-router-dom'
import './MegaMenuList.css'

export default function MegaMenuList({info, icon}) {
   const text = info.name ?? ''
   return (
      <Link to={`/especializaciones/${info._id}`} className='mega-menu-listItem-container'>
         {/*{icon}*/}
         <span className='mega-menu-listItem-text'>{text}</span>
      </Link>
   )
}

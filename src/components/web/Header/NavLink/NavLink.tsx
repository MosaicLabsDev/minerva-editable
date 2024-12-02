import './NavLink.css'

export default function NavLink({ text = '', to = '/', withMenu, onClick, children, ...others }) {

   return (
      !withMenu ? <a className="navLink" href={to} >{text}</a>
         :
         <>
            <li onClick={onClick ?? null} className='mega-menu-chevron-group' {...others}>
               <div className='mega-menu-chevron-row'>
                  <span className="navLink">{text}</span>
               </div>
               {children}
            </li>

         </>
   )
}
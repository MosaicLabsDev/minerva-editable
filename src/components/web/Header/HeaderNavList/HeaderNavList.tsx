import { Button } from '@mantine/core'
import NavLink from '../NavLink/NavLink'

export default function HeaderNavList() {

   return (
      <ul className={`navbar-navlinks-container `}>
         < NavLink text='Inicio' to='/' />
         < NavLink text='Institucional' to='/institucional' />

         

         < NavLink text='Contacto' to='/contacto' />

         <Button  fw='normal' color='secondaryColor' radius='normal'>
            CAMPUS
         </Button>
      </ul>
   )
}

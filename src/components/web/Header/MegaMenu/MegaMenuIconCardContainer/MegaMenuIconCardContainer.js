import './MegaMenuIconCardContainer.css'
import MegaMenuIconCard from '../MegaMenuIconCard/MegaMenuIconCard'

export default function MegaMenuIconCardContainer({ itemsToMap }) {
   return (
      <div className='mega-menu-iconCard-container'>
         {itemsToMap?.map(item => (
            < MegaMenuIconCard
               key={item.text}
               info={item}
            />
         ))}
      </div>
   )
}

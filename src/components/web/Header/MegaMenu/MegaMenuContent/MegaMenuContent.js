import './MegaMenuContent.css'
import MegaMenuCarouselCardInfo from '../MegaMenuCarouselCardInfo/MegaMenuCarouselCardInfo'
import MegaMenuIconCardContainer from '../MegaMenuIconCardContainer/MegaMenuIconCardContainer'
import MegaMenuListContainer from '../MegaMenuListContainer/MegaMenuListContainer'

export default function MegaMenuContent({itemsToMap, cardVariant }) {

   return (
      <div className='mega-menu-content-container'>
         {cardVariant === 'CardPhotoBg'
            && < MegaMenuCarouselCardInfo itemsToMap={itemsToMap} />
         }
         
         {cardVariant === 'MegaMenuIconCard'
            && <MegaMenuIconCardContainer itemsToMap={itemsToMap} />
         }

         {cardVariant === 'MegaMenuList'
            && <MegaMenuListContainer itemsToMap={itemsToMap} />
         }
      </div>
   )
}

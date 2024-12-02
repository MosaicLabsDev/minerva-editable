import './MegaMenuListContainer.css'
import { naturalIcons } from '../../../../utils/megaMenuList-icons'
import MegaMenuList from '../MegaMenuList/MegaMenuList'
import MegaMenuListSkeleton from '../MegaMenuList/MegaMenuListSkeleton'
import { useAppContext } from '../../../../context/AppState/AppContext'

export default function MegaMenuListContainer({ itemsToMap }) {
   const { specialtiesInfo } = useAppContext()
   const {isLoading,error} = specialtiesInfo

   return (
      <>
         {
            isLoading &&
            <div className='mega-menu-list-container'>
               < MegaMenuListSkeleton numberOfSkeletons={40} />
            </div>
         }
         {
            (error && !isLoading)
            && 
               <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
                  <p style={{ fontSize: 'var(--fs-body)' }}>Lo siento, ha ocurrido un error</p>
               </div>
         }
         {
            (!error && !isLoading && itemsToMap)
            && <div className='mega-menu-list-container'>
               {itemsToMap && itemsToMap?.map((item, idx) => (
                  < MegaMenuList icon={naturalIcons[idx]} key={item.name} info={item} />
               ))}
            </div>
         }
      </>
   )
}

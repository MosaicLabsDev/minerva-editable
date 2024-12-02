import './MegaMenuFilters.css'

export default function MegaMenuFilters({ handleChange, megaMenuFilter,itemsToMap }) {

   return (
      <form onChange={handleChange} className='mega-menu-section-formFilter'>
         {itemsToMap.map(item => (
            <div key={item.title} className='mega-menu-filterGroup'>
               < input className={`mega-menu-filter-input`} type='radio' name='mega-menu-input' value={item.value} checked={item.value === megaMenuFilter} />
               <div className={`mega-menu-filter-content`}>
                  {item.icon}
                  <span className='mega-menu-filter-text' >{item.title}</span>
                  <p className='mega-menu-filter-description'>{item.description}</p>
               </div>
            </div>
         ))}
      </form>
   )
}

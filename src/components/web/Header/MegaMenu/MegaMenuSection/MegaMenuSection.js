import './MegaMenuSection.css'
import MegaMenuContent from '../MegaMenuContent/MegaMenuContent'
import {useState} from 'react'
import {useHeaderContext} from '../../../../context/Header/HeaderContext'
import MegaMenuFilters from '../MegaMenuFilters/MegaMenuFilters'
import {Button} from "@mantine/core";
import {useNavigate} from "react-router-dom";

export default function MegaMenuSection({
                                            buttonText = 'Ver mas',
                                            to = '/',
                                            withButton = false,
                                            ...others
                                        }) {

    const {INFO_MEGA_MENU,} = useHeaderContext()
    const [megaMenuFilter, setMegaMenuFilter] = useState('Clases abiertas')
    const navigate = useNavigate();

    const handleChange = (event) => {
        setMegaMenuFilter(prevState => prevState = event.target.value)
    }

    const handleFilter = () => {
        if (!INFO_MEGA_MENU) return
        const results = INFO_MEGA_MENU.find(item => item.title === megaMenuFilter)
        return results
    }

    const itemsToShow = handleFilter()

    return (
        <div className='mega-menu-wrapper'>
            <section className='mega-menu-section-container'>

                <MegaMenuContent
                    itemsToMap={itemsToShow.data || []}
                    cardVariant={itemsToShow.cardVariant}
                />
                <div className='mega-menu-section-heading'>
                    <MegaMenuFilters handleChange={handleChange} itemsToMap={INFO_MEGA_MENU}
                                      megaMenuFilter={megaMenuFilter}/>
                </div>

            </section>

           <div className="mega-menu-buttons">

              <Button
                  fw="normal"
                  color="secondaryColor.3"
                  size={'lg'}
                  onClick={() => navigate('/cursos')}
              >
                 VER OFERTA ACADÉMICA COMPLETA
              </Button>
           </div>
        </div>
    )
}

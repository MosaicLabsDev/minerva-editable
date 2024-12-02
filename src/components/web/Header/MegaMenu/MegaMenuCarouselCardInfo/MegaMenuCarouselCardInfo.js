import {Carousel} from "@mantine/carousel";
import {IconChevronDown, IconChevronUp} from '@tabler/icons-react';
import {Skeleton} from "@mantine/core";
import {useAppContext} from "../../../../context/AppState/AppContext";
import {useNavigate} from "react-router-dom";
import CardPhotoBg from "../../../CardPhotoBg/CardPhotoBg";
import {openUrl} from "../../../../utils/openUrl";

export default function MegaMenuCarouselCardInfo({itemsToMap}) {
    const {openSource} = useAppContext()
    const {isLoading, error} = openSource

    const navigate = useNavigate();
    const handleButtonClick = (item) => {
        if (item?.comercialInformation?.outsideCampus) {
            openUrl(item?.comercialInformation?.outsideCampusUrl)
        } else {
            navigate(`/curso/${item._id}`)
        }
    }

    return (
        <>
            {error &&
            <div style={{width: '100%', height: '100%', display: 'grid', placeItems: 'center'}}>
                <p style={{fontSize: 'var(--fs-body)'}}>Lo siento, ha ocurrido un error</p>
            </div>
            }

            {isLoading && < Skeleton height={450}/>}

            {!isLoading && !error && itemsToMap.length === 0 &&
            <div style={{
                width: '100%',
                height: '100%',
                minHeight: "372px",
                display: 'grid',
                placeItems: 'center',
                textAlign: "center"
            }}>
                <p style={{fontSize: 'var(--fs-body)'}}>
                    De momento no hay clases abiertas disponibles.
                    Vuelve pronto para encontrar nuevas oportunidades de aprendizaje.
                </p>
            </div>
            }

            {(!isLoading && !error && itemsToMap && itemsToMap.length !== 0) &&
            <Carousel
                orientation={"vertical"}
                height={450}
                slidesToScroll={1}
                slideGap={'1%'}
                withControls
                nextControlIcon={
                    <IconChevronDown
                        style={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: '#212121',
                            borderRadius: '50%',
                            color: '#ffff'
                        }}/>
                }
                previousControlIcon={
                    <IconChevronUp
                        style={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: '#212121',
                            borderRadius: '50%',
                            color: '#ffff'
                        }}/>
                }
                align={'center'}
                loop
            >
                {itemsToMap && itemsToMap?.map(item => (

                    <Carousel.Slide key={item._id}>
                        <CardPhotoBg
                            imgUrl={item.comercialInformation?.image}
                            title={item.comercialInformation?.name}
                            description={item.comercialInformation?.description}
                            tags={[item?.type, 'gratis']}
                            buttonAction={() => handleButtonClick(item)}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
            }
        </>
    )
}

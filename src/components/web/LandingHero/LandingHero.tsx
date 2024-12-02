import { FormEvent, useEffect, useState } from "react";
import { Button } from "@mantine/core";
import "./LandingHero.css";
import { Typewriter } from "react-simple-typewriter";
import { useAppContext } from "../../../contexts/AppContext/AppContext";
import { Config } from "../../../types/interfaces";

function LandingHero() {
 
   const [shake, setShake] = useState(false);
   //  const {width} = useWindowDimensions();
   //  const isMediumScreen = width <= 1200;
   //  const isMobile = width <= 768;

   //  const getButtonSize = () => {
   //      if (isMobile) {
   //          return "sm";
   //      } else if (isMediumScreen) {
   //          return "lg";
   //      } else {
   //          return "xl";
   //      }
   //  }


   useEffect(() => {
      const intervalId = setInterval(() => {
         setShake(true);

         setTimeout(() => {
            setShake(false);
         }, 2000);
      }, 5000);

      return () => clearInterval(intervalId);
   }, []);


   const { config, setConfig } = useAppContext()
   console.log({texts: config.texts.inicio})
   const {title, subtitle, buttonText, typeWriterWords} = config.texts.inicio.landingHero;
   const {leftImage: Hero1, rightImage: Hero2} = config.media?.inicio?.hero
   console.log({config})
   return (
      <div className="landingHero__container">
         <div className="landingHero__column landingHero__column--left">
            <h1 className="landingHero__title">
               <span contentEditable 
                 onBlur={(e: FormEvent<HTMLDivElement>) => {
                  const newTitle = e.currentTarget.textContent || ''; // Captura el nuevo valor del título
                  setConfig(conf => ({
                    ...conf,
                    texts: {
                      ...conf.texts,
                      inicio: {
                        ...conf.texts.inicio,
                        landingHero: {
                          ...conf.texts.inicio.landingHero,
                          title: newTitle, // Actualiza el título en el estado
                        },
                      },
                    },
                  }));
                }}
               >{title}<br /></span>
               
               <span className="landingHero__gradient" onClick={() => console.log()}>
                  <Typewriter
                     words={["COMPARTEN", "CONSTRUYEN", "COLABORAN", "TRANSFORMAN"]}
                     delaySpeed={1500}
                     cursor={true}
                     cursorStyle="|"
                     cursorBlinking={true}
                     loop={false}
                  />
               </span>
            </h1>
            <div className="landingHero__block">
               <p className="landingHero__text" contentEditable onInput={(e: React.FormEvent<HTMLDivElement>) => {
                  console.log(e.currentTarget.innerText);
               }}>
                  Potenciá tus conocimientos y habilidades bajo la mentoría de
                  expertos reconocidos internacionalmente para marcar la diferencia en
                  la comunidad veterinaria. Juntos, redefiniendo el futuro de la
                  profesión.
               </p>
            </div>
            <Button
               className={`landingHero__button ${shake ? 'shake' : ''}`}
               variant="contained"
               bg="var(--color-tertiary)"
               size={'lg'}
               fw="normal"
               onClick={() => null}
            >
               EXPLORA NUESTROS CURSOS
            </Button>
         </div>
         <div className="landingHero__column landingHero__column--right">
            <img className="landingHero__image-1" src='https://forvet.org/static/media/hero1.23c30c4f4b987f385bac.png' alt="hero_cat" />
            <img className="landingHero__image-2" src='https://forvet.org/static/media/hero2.91308d8df7a9f8184fcd.png' alt="hero_dog" />
         </div>
      </div>
   );
}

export default LandingHero;

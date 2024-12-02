import { Button } from '@mantine/core'
import './Login.css'

export default function Login() {
   return (
      <main className="LoginPage-container">
         <div className="LoginPage--component">
            <div className="LoginPage-wrapper">
               <header className='LoginPage-header-container'>
                  <figure className='LoginPage-header--group'>
                     < img className='LoginPage-header--logo' src={'https://forvet.org/static/media/forvet_logo.888beb8dce69f774ef126801401a1a95.svg'} alt='logo' />
                  </figure>
                  <div className='LoginPage-header--group'>
                     <Button size="lg" radius='md' color='var(--color-primary)' onClick={() => null}>Ingresar</Button>
                  </div>
               </header>

               <section className="LoginPage-heading-title-container">
                  <h1 className="LoginPage-heading-title">Bienvenido al campus</h1>
               </section>

               <div className="LoginPage-separator--line"></div>



               <section className="LoginPage-content-container">
                  <div className="LoginPage-carousel-container">
                     <article className='LoginSlide-container'>
                        <h3 className='LoginSlide-title'>TERAPIAS FÍSICAS Y REHABILITACIÓN VETERINARIA</h3>
                        <p className='LoginSlide-description'>El presente curso está dirigido a médicos veterinarios que deseen incorporar servicio de rehabilitación física y fisioterapia aplicando diferentes técnicas como cinesioterapia, masoterapia básica, electroestimulación transcutánea, magnetoterapia, ultrasonido, fototerapia, corrientes galvánicas, entre otros.</p>
                        <Button
                           onClick={() => null}
                           variant='outline'
                           radius='md'
                           w='max-content'
                           m={{ base: 'auto', sm: 'unset' }}
                        >
                           Ver más
                        </Button>
                     </article>
                  </div>
               </section>
            </div>

            <footer className="LoginPage-footer-container">
               {/* <AvalCarousel itemsToMap={avals} state={state} /> */}
            </footer>
         </div>
      </main>
   )
}

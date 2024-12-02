import './MainLayout.css'
import Header from '../../../components/web/Header/Header';
import LandingHero from '../../../components/web/LandingHero/LandingHero';
// import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";
// import WhatsAppFAB from '../../components/WhatsAppFAB/WhatsAppFAB';

function MainLayout({ children, overflow = 'visible' }) {
   return (
      <div className="mainLayout__container" style={{ overflow }} >
         <Header />
         <main>
            {children}
            {/* <WhatsAppFAB /> */}
            <section style={{ position: "relative", width: '100%' }}>
               <LandingHero />
               {/* <DecorativeCircle size={300} top={-200} left={-50} opacity={0.3} shadow={1}/>
                <DecorativeCircle size={200} top={-100} right={-100} opacity={0.5} shadow={4}/>
                <DecorativeCircle size={100} top={0} right={400} opacity={0.75} shadow={1}/>
                <DecorativeCircle size={150} bottom={-50} left={600} opacity={0.2} shadow={1}/>
                <DecorativeCircle size={200} bottom={-200} right={-200} opacity={0.2} shadow={2}/>
                <TinyDecorativeCircle size={12} top={100} left={700} opacity={1} color={1}/>
                <TinyDecorativeCircle size={32} top={500} left={100} opacity={1} color={3}/>
                <TinyDecorativeCircle size={32} top={400} right={100} opacity={1} color={3}/>
                <TinyDecorativeCircle size={48} bottom={30} left={1000} opacity={1} color={3}/> */}
            </section>
            
         </main>
         {/* <FooterContainer /> */}
      </div>
   );
}

export default MainLayout;
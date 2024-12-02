import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css';
import { AppProvider, useAppContext } from './contexts/AppContext/AppContext.tsx'
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <AppProvider>
      <WrappedApp />
   </AppProvider>
);


export default function WrappedApp() {



   const { theme } = useAppContext();
   const [currentTheme, setCurrentTheme] = useState(theme)

   useEffect(() => {
      setCurrentTheme(theme)
   }, [theme])

   return (
      <MantineProvider theme={currentTheme ?? null} defaultColorScheme={theme?.colorScheme}>
        <BrowserRouter>
            <App />
         </BrowserRouter>
      </MantineProvider>
   )
}
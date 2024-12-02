import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import MantineTheme from "../../themes/mantine.ts";
import { CONFIG, WEB_CONFIG } from '../../config/config.ts';
import { Config, Mantine } from '../../types/interfaces.ts';

interface AppContextProps {
   theme: Config
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {

   const [theme, setTheme] = useState<Mantine>();
   const [config, setConfig] = useState<Config>(WEB_CONFIG)

   useEffect(() => {
      const mantineTheme = MantineTheme(config.mantine);
      setTheme(mantineTheme);
   }, [config.mantine]);



   return (
      <AppContext.Provider value={{ theme, setTheme, config, setConfig }}>
         {children}
      </AppContext.Provider>
   );
};

export const useAppContext = () => {
   const context = useContext(AppContext);
   if (!context) {
      throw new Error('useAppContext debe usarse dentro de un AppProvider');
   }
   return context;
};

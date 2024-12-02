import { AppShell, Burger, Button, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MainLayout from './layouts/web/MainLayout/MainLayout';
import Sidebar from './components/fortech/Sidebar/Sidebar';
import { Link } from 'react-router-dom';



export default function App() {
   const [opened, { toggle }] = useDisclosure();

   return (
      <AppShell
         header={{ height: 60 }}
         navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
         }}
         padding="md"
      >
         <AppShell.Header style={{ display: 'flex', }}>
            <Burger
               opened={opened}
               onClick={toggle}
               hiddenFrom="sm"
               size="sm"
            />
            <div>
               <h1>FORTECH</h1>
            </div>
            <Flex>
               <Link to='/ventas'>Web Ventas</Link >
               <Link to='/campus'>Campus</Link >
               <Link to='/admin'>Admin</Link >
            </Flex>

         </AppShell.Header>

         <Sidebar />

         <AppShell.Main
            className='AppShell-Main-container'
         >
            <AppShell.Section className='dark-theme'>
               <MainLayout></MainLayout>
            </AppShell.Section>
         </AppShell.Main>
      </AppShell>
   );
}
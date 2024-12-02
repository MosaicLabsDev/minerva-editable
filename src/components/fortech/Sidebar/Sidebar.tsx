import { Accordion, AppShell, ColorInput } from '@mantine/core'
import { useAppContext } from '../../../contexts/AppContext/AppContext';
const root = document.documentElement;


export default function Sidebar() {
   const { setConfig, config } = useAppContext()
   console.log({ config: config.colors.primary.main })
   const NAVBAR_ITEM = [
      {
         value: 'Colores',
         description: [
            <Accordion>
               <Accordion.Item key={"Primario"} value={"Primario"}>
                  <Accordion.Control>{"Primario"}</Accordion.Control>
                  <Accordion.Panel>
                     <ColorInput label='Principal'
                        defaultValue={config.colors.primary?.main}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-primary', color);
                        }}
                     />
                     <ColorInput label='Claro'
                        defaultValue={config.colors.primary.light}
                        onChange={(color) => {
                           root?.style?.setProperty('--primary-light', color);
                        }}
                     />
                     <ColorInput label='Muy claro'
                        defaultValue={config.colors.primary.lightest}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-primary-lightest', color);
                        }}
                     />

                     <ColorInput label='Oscuro'
                        defaultChecked={config.colors.primary.dark}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-primary-dark', color);
                        }}
                     />
                     <ColorInput label='Muy oscuro'
                        defaultChecked={config.colors.primary.darkest}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-primary-darkest', color);
                        }}
                     />
                  </Accordion.Panel>
               </Accordion.Item>
            </Accordion>,
            <Accordion>
               <Accordion.Item key={"Secundario"} value={"Secundario"}>
                  <Accordion.Control>{"Secundario"}</Accordion.Control>
                  <Accordion.Panel>
                     <ColorInput label='Principal'
                        defaultValue={config.colors.secondary.main}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-secondary', color);
                        }}
                     />
                     <ColorInput label='Claro'
                        defaultValue={config.colors.secondary.light}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-secondary-light', color);
                        }}
                     />
                     <ColorInput label='Muy claro'
                        onChange={(color) => {
                           root?.style?.setProperty('--color-secondary-lightest', color);
                        }}
                     />
                     <ColorInput label='Oscuro'
                        defaultValue={config.colors.secondary.dark}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-secondary-dark', color);
                        }}
                     />
                     <ColorInput label='Muy oscuro'
                        onChange={(color) => {
                           root?.style?.setProperty('--color-secondary-darkest', color);
                        }}
                     />
                  </Accordion.Panel>
               </Accordion.Item>
            </Accordion>,
            <Accordion>
               <Accordion.Item key={"Terciario"} value={"Terciario"}>
                  <Accordion.Control>{"Terciario"}</Accordion.Control>
                  <Accordion.Panel>
                     <ColorInput label='Principal'
                        defaultValue={config.colors.tertiary.main}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-tertiary', color);
                        }}
                     />
                     <ColorInput label='Claro'
                        defaultValue={config.colors.tertiary.light}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-tertiary-light', color);
                        }}
                     />
                     <ColorInput label='Oscuro'
                        defaultValue={config.colors.tertiary.dark}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-tertiary-dark', color);
                        }}
                     />
                  </Accordion.Panel>
               </Accordion.Item>
            </Accordion>,
            <Accordion>
               <Accordion.Item key={"Textos"} value={"Textos"}>
                  <Accordion.Control>{"Textos"}</Accordion.Control>
                  <Accordion.Panel>
                     <ColorInput label='Principal'
                        defaultValue={config.colors.text.primary}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-text-primary', color);
                        }}
                     />
                     <ColorInput label='Secundario'
                        defaultValue={config.colors.text.secondary}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-text-secondary', color);
                        }}
                     />
                     <ColorInput label='Terciario'
                        defaultValue={config.colors.text.tertiary}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-text-tertiary', color);
                        }}
                     />
                     <ColorInput label='Especial'
                        defaultValue={config.colors.text.shadowText}
                        onChange={(color) => {
                           root?.style?.setProperty('--color-text-shadowText', color);
                        }}
                     />
                  </Accordion.Panel>
               </Accordion.Item>
            </Accordion>,
            config.colors.base &&  <Accordion>
            <Accordion.Item key={"Fondos"} value={"Fondos"}>
               <Accordion.Control>{"Fondos"}</Accordion.Control>
               <Accordion.Panel>
                  <ColorInput label='Principal'
                     defaultValue={config.colors.base.main}
                     onChange={(color) => {
                        root?.style?.setProperty('--color-text-primary', color);
                     }}
                  />
                  <ColorInput label='Claro'
                     defaultValue={config.colors.base.light}
                     onChange={(color) => {
                        root?.style?.setProperty('--color-base-light', color);
                     }}
                  />
                  <ColorInput label='Oscuro'
                     defaultValue={config.colors.base.dark}
                     onChange={(color) => {
                        root?.style?.setProperty('--color-base-dark', color);
                     }}
                  />
               </Accordion.Panel>
            </Accordion.Item>
         </Accordion>,
         ]
      },
   ]
   
   return (
      <AppShell.Navbar p="md" style={{overflowY: 'auto'}}>
         <Accordion>
            {NAVBAR_ITEM.map(item => (
               <Accordion.Item key={item.value} value={item.value}>
                  <Accordion.Control>{item.value}</Accordion.Control>
                  <Accordion.Panel>{item?.description?.map(input => input)}</Accordion.Panel>
               </Accordion.Item>
            ))}
         </Accordion>
      </AppShell.Navbar>
   )
}

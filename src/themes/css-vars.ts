export const cssVars = ({ root, config }) => {

   const {
      fontFamily, 
      fontSizes,
      fontWeights
   } = config.typography

   const {
      fullLayoutPaddingX,
      fullLayoutPaddingY,
      layoutPaddingX,
      layoutPaddingY,
      px, py, mt, mb,
   } = config.paddings

   const {
      boxShadow, 
      boxShadowMd, 
      boxShadowStrong
   } = config.boxShadows

   const {
      primary,
      secondary,
      tertiary,
      text,
      common,
      base,
   } = config.colors


   /* add font family on html head tag */
   const fontLink = document.createElement('link');
   fontLink.rel = 'stylesheet';
   fontLink.href = 
   `https://fonts.googleapis.com/css2?family=${
      fontFamily
         .split(',')[0]
         .replaceAll("'", "")
      }:wght@${
         fontWeights
            .join(';')}
      &display=swap`
   

   /*FONT-FAMILY*/
   root.style.setProperty('--font-primary', fontFamily);
   /*FONT-SIZES HEADING*/
   root.style.setProperty('--fs-h1', fontSizes.h1);
   root.style.setProperty('--fs-h2', fontSizes.h2);
   root.style.setProperty('--fs-h3', fontSizes.h3);
   root.style.setProperty('--fs-h4', fontSizes.h4);
   root.style.setProperty('--fs-h5', fontSizes.h5);
   root.style.setProperty('--fs-h6', fontSizes.h6);
   root.style.setProperty('--fs-body', fontSizes.body);
   root.style.setProperty('--fs-small', fontSizes.small);
   root.style.setProperty('--fs-tiny', fontSizes.tiny);

   /*PADDING & MARGIN*/
   root.style.setProperty('--layout-padding-x', layoutPaddingX);
   root.style.setProperty('--layout-padding-y', layoutPaddingY);
   root.style.setProperty('--full-layout-padding-x', fullLayoutPaddingX);
   root.style.setProperty('--full-layout-padding-y', fullLayoutPaddingY);
   root.style.setProperty('--px', px);
   root.style.setProperty('--py', py);
   root.style.setProperty('--mt', mt);
   root.style.setProperty('--mb', mb);

   /* BOX-SHADOWS */
   root.style.setProperty('--box-shadow', boxShadow);
   root.style.setProperty('--box-shadow-md', boxShadowMd);
   root.style.setProperty('--box-shadow-strong', boxShadowStrong);
   
   /* COLORS */
   root.style.setProperty('--color-primary-lightest', primary.lightest);
   root.style.setProperty('--color-primary-lightest-transparent', primary.lightestTransparent);
   root.style.setProperty('--color-primary-light', primary.light);
   root.style.setProperty('--color-primary', primary.main);
   root.style.setProperty('--color-primary-dark', primary.dark);
   root.style.setProperty('--color-primary-darkest', primary.darkest);


   root.style.setProperty('--color-secondary-light', secondary.light);
   root.style.setProperty('--color-secondary', secondary.main);
   root.style.setProperty('--color-secondary-dark', secondary.dark);
   root.style.setProperty('--color-secondary-transparent', secondary.transparent);

   root.style.setProperty('--color-tertiary-light', tertiary.light);
   root.style.setProperty('--color-tertiary', tertiary.main);
   root.style.setProperty('--color-tertiary-dark', tertiary.dark);

   root.style.setProperty('--color-base-light', base.light);
   root.style.setProperty('--color-base', base.main);
   root.style.setProperty('--color-base-dark', base.dark);

   root.style.setProperty('--color-text-primary', text.primary);
   root.style.setProperty('--color-text-secondary', text.secondary);
   root.style.setProperty('--color-text-tertiary', text.tertiary);
   root.style.setProperty('--color-text-shadow', text.shadowText);


   root.style.setProperty('--color-white', common.white);
   root.style.setProperty('--color-black', common.black);
   root.style.setProperty('--color-black-transparent', common.blackTransparent);

   root.style.setProperty('--color-red', common.red.main);
   root.style.setProperty('--color-red--light', common.red.light);
   root.style.setProperty('--color-yellow', common.yellow.main);
   root.style.setProperty('--color-yellow--light', common.yellow.light);
   root.style.setProperty('--color-green--light', common.green);

   root.style.setProperty('--mantine-color-error', common.mantineError);
}


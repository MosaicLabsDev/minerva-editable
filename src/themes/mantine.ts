import { createTheme, rem } from "@mantine/core";

export default function MantineTheme(config) {
   const {
      typography,
      colors,
      borderRadius,
      boxShadows,
   } = config

   const {
      fontSizes,
      fontFamily
   } = typography

   const { normal: radius_md, defaultRadius } = borderRadius;
   const { normal: shadow_md } = boxShadows;

   const theme = createTheme({
      fontFamily,
      fontSizes: {
         h1: rem(fontSizes?.h1),
         h2: rem(fontSizes?.h2),
         h3: rem(fontSizes?.h3),
         h4: rem(fontSizes?.h4),
         h5: rem(fontSizes?.h5),
         h6: rem(fontSizes?.h6),
         xl: rem(fontSizes?.xl),
         lg: rem(fontSizes?.lg),
         md: rem(fontSizes?.md),
         sm: rem(fontSizes?.sm),
         xs: rem(fontSizes?.xs),
      },
      colors: {
         'light': colors.light,
         'dark': colors.dark,
         'secondaryColor': colors.secondaryColor,
      },
      primaryColor: colors.primaryColor,
      colorScheme: colors.colorScheme,
      // Primary shade is used in all components to determine which color from theme.colors[color] should be used.
      primaryShade: { light: 5, dark: 5 },
      shadows: {
         'normal': [shadow_md]
      },
      radius: {
         'normal': rem(radius_md),
      },
      defaultRadius,
      focusRing: 'never',
   });

   return theme
}
export enum ThemeEnum {
  light = "light",
  dark = "dark",
}
export interface ITheme {


  media: {
    bigdesctop: string,
    desctop: string,
    laptop: string,
    tablet: string,
    portraitTablets: string,
    eReaders: string,
    smartphone: string,
  },
  delay: {
    transitionDelay: string,
  },
  opacity: {
    opacityDisabled: string;
  },

  sizes: {
    headerHeight: string,
  },
  fonts: {
    popinsMedium: string,
    josefinsansMedium: string,
    josefinsansBold: string,
    josefinsansSemibold: string,
    fontSizeXs12: string,
    fontSizeS14: string,
    fontSizeM16: string,
    fontSizeL20: string,
    fontSizeXl24: string,
    fontSize2xl28: string,
    fontSize3xl32: string,
    fontSize4xl36: string,
    fontSize5xl40: string,
    fontSize6xl48: string,

  },
  colors: {
    bgPrimary: string,
    bgSecondary: string,
    primaryColor: string,
    secondaryColor: string,
    accentedColor: string,
    accentedColorOpacity: string,
    notAccentedColor: string,
    bgGradient: string,
    errorColor: string,
    successColor: string,
  };
}

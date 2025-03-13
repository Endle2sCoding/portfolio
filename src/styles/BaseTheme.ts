import { ITheme } from "./theme";

export const BaseTheme: ITheme = {
  media: {
    "bigdesctop": "screen and (max-width:1400px)",
    "desctop": "screen and (max-width:1200px)",
    "laptop": "screen and (max-width:961px)",
    "tablet": "screen and (max-width:767px)",
    "portraitTablets": "screen and (max-width:640px)",
    "eReaders": "screen and (max-width:480px)",
    "smartphone": "screen and (max-width:400px)",
  },
  delay: {
    transitionDelay: "0.3s",
  },
  opacity: {
    opacityDisabled: "0.3"
  },

  sizes: {
    headerHeight: "100px",
  },
  fonts: {
    popinsMedium: "Poppins-Medium",
    josefinsansMedium: "JosefinSans-Medium",
    josefinsansBold: "JosefinSans-Bold",
    josefinsansSemibold: "JosefinSans-SemiBold",
    fontSizeXs12: "12px",
    fontSizeS14: "14px",
    fontSizeM16: "16px",
    fontSizeL20: "20px",
    fontSizeXl24: "24px",
    fontSize2xl28: "28px",
    fontSize3xl32: "32px",
    fontSize4xl36: "36px",
    fontSize5xl40: "40px",
    fontSize6xl48: "48px",

  },

};
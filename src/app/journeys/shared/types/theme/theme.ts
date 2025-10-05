import { FontWeight } from "../fonts/fonts";

export type Theme = {
  colors: {    
    primary1000: string;    
    primary800: string;
    primary700: string;
    primary600: string;
    primary500: string;
    primary400: string;
    primary300: string;
    primary200: string;
    primary100: string;
    primary000: string;
  };
  fonts: {
    fontWeight: {
      regular: FontWeight;
      medium: FontWeight;
      semibold: FontWeight;
      bold: FontWeight;
    };    
  };
};

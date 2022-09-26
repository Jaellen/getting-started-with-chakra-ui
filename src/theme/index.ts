import { 
    extendTheme, 
    theme as base, 
    withDefaultColorScheme,
    withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none'
            }
        }
    },
}

const brandRing = {
    _focus: {
        ring: 2,
        ringColor: 'brand.500',
    },
}

const theme = extendTheme(
    {
        colors: {
            brand: {
                50: '#f0eaff',
                100: '#d1c1f4',
                200: '#b199e7',
                300: '#9171dc',
                400: '#7248d0',
                500: '#592fb7',
                600: '#45248f',
                700: '#311968',
                800: '#1e0f40',
                900: '#0c031b',
            },
        },
        fonts: {
            heading: `Montserrat, ${base.fonts?.heading}`,
            body: `Inter, ${base.fonts?.body}`,
        },
        components: {
            Button: {
                variants: {
                  primary: (props: any) => ({
                    rounded: 'none',
                    ...brandRing,
                    color: mode('white', 'gray.900')(props),
                    backgroundColor: mode('brand.500', 'brand.200')(props),
        
                    _hover: {
                      backgroundColor: mode('brand.600', 'brand.300')(props),
                    },
        
                    _active: {
                      backgroundColor: mode('brand.700', 'brand.400')(props),
                    },
                  }),
                },
              },
            Input: { ...inputSelectStyles },
            Select: { ...inputSelectStyles },
            Checkbox: {
                baseStyle: {
                    control: {
                        borderRadius: 'none',
                        ...brandRing,
                    }
                }
            }
        }
    },
    withDefaultColorScheme({
        colorScheme: 'brand',
        components: ['Checkbox'],
    }),
    withDefaultVariant({
        variant: 'filled',
        components: ['Input', 'Select']
    }),
);

export default theme;

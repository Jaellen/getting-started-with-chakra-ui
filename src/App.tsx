import * as React from "react"
import { 
    ChakraProvider,
    Flex
} from "@chakra-ui/react"
import theme from "../src/theme/index"
import '../src/theme/styles.css';
import Cart from "../src/sections/cart"
import Details from "../src/sections/details"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Flex 
            h={{ base: 'auto', md: '100vh' }}
            py={[0, 10, 20]}
            direction={{ base: 'column-reverse', md: 'row' }}
        >
            <Details />
            <Cart />
        </Flex>
    </ChakraProvider>
)

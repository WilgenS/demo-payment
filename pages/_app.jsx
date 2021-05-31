import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import Header from "./head";

const theme = extendTheme({
    config: {
      useSystemColorMode: true,
      initialColorMode: "dark"
    }
  });

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Component {...pageProps} />
        
        </ChakraProvider>
    );
}

export default MyApp;

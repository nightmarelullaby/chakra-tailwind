"use client";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react'

//Este layout se encarga de configurar tanto el layout de chakra como de hacer un override a las clases por defecto que tienen varios componentes de Chakra.
export default function ChakraProviderLayout({children}){
    const emotionCache = createCache({
        key: 'emotion-css-cache',
        prepend: true, // ensures styles are prepended to the <head>, instead of appended
      });
    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}


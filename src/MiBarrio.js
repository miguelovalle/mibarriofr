import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './router/AppRouter';
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

export const MiBarrio = () => {
    

    return (
        <ChakraProvider>
            <QueryClientProvider client = {queryClient}>
                <Provider store = { store } >
                    <AppRouter />
                </Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>

    </ChakraProvider>
    )
}


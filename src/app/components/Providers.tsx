'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '../services/store/store';
import { ChakraProvider} from "@chakra-ui/react";


const Providers = ({ children }: { children: React.ReactNode }) => {
	const storeRef = useRef<AppStore>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return <>
        <Provider store={storeRef.current}>
            <ChakraProvider >
                {children}
            </ChakraProvider>
        </Provider>
    </>;
};

export default Providers;
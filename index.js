/**
 * @format
 */

import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { GreenTheme, GreenThemeDark } from './src/themes/GreenTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './src/redux/store'
import { persistStore } from 'redux-persist';

const queryClient = new QueryClient()
let persistor = persistStore(store)

const Application = () => {
    const scheme = useColorScheme()
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <PersistGate persistor={persistor} loading={null}>
                    <NavigationContainer theme={scheme === 'dark' ? GreenThemeDark : GreenTheme}>
                        <App />
                    </NavigationContainer>
                </PersistGate>
            </QueryClientProvider>
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => Application);

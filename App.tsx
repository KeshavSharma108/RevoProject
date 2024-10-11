import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerStack from './src/navigation/DrawerStack';
import { Root as PopupRootProvider } from 'react-native-popup-confirm-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PopupRootProvider>
        <NavigationContainer>
          <DrawerStack />
        </NavigationContainer>
      </PopupRootProvider>
    </QueryClientProvider>
  );
}

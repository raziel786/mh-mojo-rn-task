import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './components/Stack';

const App = () => {
    return (
        <SafeAreaProvider>
            <Stack direction="row" space={4}>
                <View style={{ backgroundColor: 'red', width: 100, height: 50 }} />
                <View style={{ backgroundColor: 'green', width: 100, height: 20 }} />
                <View style={{ backgroundColor: 'blue', width: 100, height: 30 }} />
                <View style={{ backgroundColor: 'red', width: 100, height: 50 }} />
                <View style={{ backgroundColor: 'green', width: 100, height: 40 }} />
                <View style={{ backgroundColor: 'blue', width: 100, height: 20 }} />
            </Stack>
        </SafeAreaProvider>
    );
};

export default App;
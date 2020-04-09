import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamsList } from './types';

const Stack = createStackNavigator<StackParamsList>();

const StackApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackApp;

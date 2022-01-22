import * as React from 'react';
import { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContext } from '../context/UserContext';
import LoginScreen from '../screens/LoginScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const userContext = useContext(UserContext);
    const isAuth = userContext.isAuth;

    useEffect( () => {
        userContext.authMe();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuth
                        ? <Stack.Screen
                            name="SuccessScreen"
                            component={SuccessScreen}
                            options={{headerShown: false}}
                        />
                        : <Stack.Screen
                            name="LoginScreen"
                            component={LoginScreen}
                            options={{headerShown: false}}
                        />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;

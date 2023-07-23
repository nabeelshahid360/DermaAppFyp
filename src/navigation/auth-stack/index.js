import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from '../../constants/routes';
import { SignIn, SignUp, SplashScreen, ForgetScreen} from '../../screens';
import { HomeScreen } from '../../screens';
const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={AuthRoutes.Splash}
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={AuthRoutes.SignIn}
                component={SignIn} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={AuthRoutes.SignUp}
                component={SignUp} 
                options={{
                    headerShown: false
                }}
            />
           <Stack.Screen
           name={AuthRoutes.HomeScreen}
           component={HomeScreen}
           options={{
            headerShown: false
        }}
        />
        <Stack.Screen
           name={AuthRoutes.ForgetScreen}
           component={ForgetScreen}
           options={{
            headerShown: false
        }}
           />
            
        </Stack.Navigator>
    );
};
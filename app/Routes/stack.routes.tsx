import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CarDetailsScreen from '../screens/CarDetailsScreen';
import ScheduleScreen from '../screens/ScheduleScreen'
import ScheduleDetailsScreen from '../screens/ScheduleDetailsScreen'
import MyCars from '../screens/MyCarsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpFirstScreen from '../screens/SignUpFirstScreen';
import SignUpSecondScreen from '../screens/SignUpSecondScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const { Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}} initialRouteName='SignIn'>
            <Screen name='SignIn' component={SignInScreen} />
            <Screen name='SignUpFirst' component={SignUpFirstScreen} />
            <Screen name='SignUpSecond' component={SignUpSecondScreen} />
            <Screen name='Home' component={HomeScreen} />
            <Screen name='CarDetails' component={CarDetailsScreen} />
            <Screen name='Schedule' component={ScheduleScreen} />
            <Screen name='ScheduleDetails' component={ScheduleDetailsScreen} />
            <Screen name='Confirmation' component={ConfirmationScreen} />
            <Screen name='MyCars' component={MyCars} />
        </Navigator>
    )
}
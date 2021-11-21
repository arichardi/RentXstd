import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CarDetailsScreen from '../screens/CarDetailsScreen';
import ScheduleScreen from '../screens/ScheduleScreen'
import ScheduleDetailsScreen from '../screens/ScheduleDetailsScreen'
import ScheduleCompleteScreen from '../screens/ScheduleCompleteScreen'
import MyCars from '../screens/MyCarsScreen';


const { Navigator, Screen} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name='Home' component={HomeScreen} />
            <Screen name='CarDetails' component={CarDetailsScreen} />
            <Screen name='Schedule' component={ScheduleScreen} />
            <Screen name='ScheduleDetails' component={ScheduleDetailsScreen} />
            <Screen name='ScheduleComplete' component={ScheduleCompleteScreen} />
            <Screen name='MyCars' component={MyCars} />
        </Navigator>
    )
}
import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
Container,
Content,
Title,
Message,
Footer,
} from './ConfirmationScreenStyle'

import LogoSVG from '../assets/logo_background_gray.svg'
import DoneSVG from '../assets/done.svg'
import ConfirmButton from '../Components/ConfirmButton';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/core';

interface Params {
    title: string;
    message: string;
    nextScreenRoute: string;
}


export default function ConfirmationScreen(){

    const { width } = useWindowDimensions();

    const navigation = useNavigation();
    const route = useRoute();

    const {title, message, nextScreenRoute} = route.params as Params

    function handleConfirmHandle(){
        navigation.navigate(nextScreenRoute)
    }

return (
<Container>
    <StatusBar 
        style='light'
        translucent
        backgroundColor='transparent'
    />
    <LogoSVG 
        width={width}
    />

    <Content>
        <DoneSVG 
            width={80}
            height={80}
        />
        <Title>{title}</Title>

        <Message>{message}</Message>

        <Footer>
            <ConfirmButton title='OK' onPress={handleConfirmHandle}/>
        </Footer>
    </Content>

</Container>
);
}
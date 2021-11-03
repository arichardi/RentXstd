import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
Container,
Content,
Title,
Message,
Footer,
} from './ScheduleCompleteScreenStyle'

import LogoSVG from '../assets/logo_background_gray.svg'
import DoneSVG from '../assets/done.svg'
import ConfirmButton from '../Components/ConfirmButton';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

export default function ScheduleCompleteScreen(){

    const { width } = useWindowDimensions();

    const navigation = useNavigation();

    function handleConfirmHandle(){
        navigation.navigate('Home')
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
        <Title>Carro Alugado!</Title>

        <Message>
            Agora você só precisa ir {`\n`}
            até uma concessionária da RentX {`\n`}
            pegar o seu carro.
        </Message>

        <Footer>
            <ConfirmButton title='OK' onPress={handleConfirmHandle}/>
        </Footer>
    </Content>

</Container>
);
}
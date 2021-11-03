import React from 'react';
import { StatusBar } from 'react-native'; 
import BackButton from '../Components/BackButton';
import theme from '../Styles/theme';
import {
Container,
Header,
Title,
RentalPeriod,
DateInfo,
DateTitle,
DateValue,
Content,
Footer,
} from './ScheduleScreenStyle'
import ArrowSvg from '../assets/arrow.svg'
import Button from '../Components/Button';
import Calendar from '../Components/Calendar'
import { useNavigation } from '@react-navigation/core';

export default function ScheduleScreen(){

    const navigation = useNavigation()

    function handleConfirmRental(){
        navigation.navigate('ScheduleDetails')
    }

return (
<Container>
    <Header>
        <StatusBar 
            barStyle='light-content'
            translucent
            backgroundColor='transparent'
        />
        <BackButton onPress={ () => {} } color={theme.colors.shape}/>
        <Title>
            Escolha uma {'\n'}
            data de inicio e {'\n'}
            fim do aluguel
        </Title>

        <RentalPeriod>
            <DateInfo>
                <DateTitle>DE</DateTitle>
                <DateValue selected={false}></DateValue>
            </DateInfo>
            
            <ArrowSvg />
            <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={false}></DateValue>
            </DateInfo>

        </RentalPeriod>
    </Header>

    <Content>
        <Calendar />
    </Content>

    <Footer>
        <Button 
            title='Escolher período do aluguel'
            onPress={handleConfirmRental}
        />
    </Footer>
</Container>
);
}
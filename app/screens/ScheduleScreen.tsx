import React, {useState} from 'react';
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
import Calendar, { MarkedDatesProps } from '../Components/Calendar'
import { useNavigation } from '@react-navigation/core';
import { DayProps } from '../Components/Calendar'
import generateInterval from '../utils/generateInterval';

export default function ScheduleScreen(){

    const navigation = useNavigation()
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>( {} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>( {} as MarkedDatesProps)

    function handleConfirmRental(){
        navigation.navigate('ScheduleDetails')
    }
    
    
    function handleGoBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start
        }

        setLastSelectedDate(end)
        const interval = generateInterval(start, end)
        setMarkedDates(interval);
    }

 
return (
<Container>
    <Header>
        <StatusBar 
            barStyle='light-content'
            translucent
            backgroundColor='transparent'
        />
        <BackButton onPress={ handleGoBack } color={theme.colors.shape}/>
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
        <Calendar 
        markedDates={markedDates}
        onDayPress={handleChangeDate}
        />
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
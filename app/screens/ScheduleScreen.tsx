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
import { useNavigation, useRoute } from '@react-navigation/core';
import { DayProps } from '../Components/Calendar'
import generateInterval from '../utils/generateInterval';
import { format } from 'date-fns';
import getPlatformDate from '../utils/getPlatformDate';
import { CarDTO } from '../dtos/CarsDtos';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO
}

export default function ScheduleScreen(){

    const navigation = useNavigation()
    const route = useRoute();
    const { car } = route.params as Params;
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>( {} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>( {} as MarkedDatesProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    function handleConfirmRental(){

        navigation.navigate('ScheduleDetails', {
            car,
            dates: Object.keys(markedDates)
        })
        
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

        const firstDate = Object.keys(interval)[0] 
        const lastDate = Object.keys(interval)[Object.keys(interval).length -1] 

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy')

        })
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
                <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
            </DateInfo>
            
            <ArrowSvg />
            <DateInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
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
            enabled={!!rentalPeriod.startFormatted}
        />
    </Footer>
</Container>
);
}
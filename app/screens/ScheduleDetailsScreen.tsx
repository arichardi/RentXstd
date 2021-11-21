import React, {useEffect, useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons'
import {
Container,
Header,
CarImage,
Content,
Details,
Description,
Brand,
Name,
Rent,
Period,
Price,
RentalPeriod,
CalendarIcon,
DateInfo,
DateTitle,
DateValue,
RentalPrice,
RentalPriceLabel,
RentalPriceDetails,
RentalPriceQuota,
RentalPriceTotal,
Acessories,
Footer,
} from './ScheduleDetailsScreenStyle'

import theme from '../Styles/theme';
import getAccessoryIcon from '../utils/getAccessoryIcon'

import BackButton from '../Components/BackButton';
import ImageSlider from '../Components/ImageSlider';
import Acessory from '../Components/Acessory';
import Button from '../Components/Button';
import { CarDTO } from '../dtos/CarsDtos';
import { format } from 'date-fns';
import getPlatformDate from '../utils/getPlatformDate';
import api from '../services/api';
import { Alert } from 'react-native';

interface Params {
    car: CarDTO;
    dates: string[];
}

interface RentalPeriod {
    start: string;
    end: string;
}

export default function ScheduleDetailsScreen(){

const navigation = useNavigation()
const route = useRoute();
const { car, dates } = route.params as Params;
const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

const rentalTotal = Number(dates.length * car.rent.price);

// Functions ----------------------------------------------------

async function handleConfirmRental(){
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)
    const unavailableDates = [
        ... schedulesByCar.data.unavailable_dates,
        ...dates
        
    ]

    await api.post('/schedules_byuser', {
        user_id: 1,
        car,
    })

    api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailableDates
    })
    .then( () => navigation.navigate('ScheduleComplete'))
    .catch( () => Alert.alert('Não foi possivel confirmar o agendamento')) 
    
}

function handleGoBack(){
    navigation.goBack();
}

useEffect( () => {
    setRentalPeriod({
        start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
        end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
}, []) 

return (
<Container>
    <Header>
        <BackButton onPress={ handleGoBack} />
    </Header>

    <CarImage>
    <ImageSlider 
        imagesUrl={car.photos}
    />
    </CarImage>

    <Content>
        <Details>
        <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
        </Description>

        <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
        </Rent>
        </Details>

        <Acessories>
            {
                car.accessories.map( accessory => 
                    <Acessory
                    key={accessory.type} 
                    name={accessory.name}
                    icon={getAccessoryIcon(accessory.type)} />
                    )
            }
        </Acessories>

    <RentalPeriod>
        <CalendarIcon>
            <Feather 
                name='calendar'
                size={24}
                color={theme.colors.shape}
            />
        </CalendarIcon>
        <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
        </DateInfo>

        <Feather 
                name='chevron-right'
                size={10}
                color={theme.colors.text}
            />
        
        <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
        </DateInfo>

    </RentalPeriod>

    <RentalPrice>
        <RentalPriceLabel>Total</RentalPriceLabel>
        <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>{`R$ ${rentalTotal}`}</RentalPriceTotal>
        </RentalPriceDetails>
    </RentalPrice>

    </Content>

    <Footer>
        <Button 
        title='Alugar agora'
        onPress={handleConfirmRental}
        color={theme.colors.success}
        />
    </Footer>

</Container>
);
}
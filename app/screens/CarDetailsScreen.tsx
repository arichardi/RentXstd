import React from 'react';
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
About,
Acessories,
Footer,
} from './CarDetailsScreenStyle'

import SpeedSvg from '../assets/speed.svg'
import AccelerationSvg from '../assets/acceleration.svg'
import ForceSvg from '../assets/force.svg'
import GasolineSvg from '../assets/gasoline.svg'
import ExchangeSvg from '../assets/exchange.svg'
import PeopleSvg from '../assets/people.svg'

import BackButton from '../Components/BackButton';
import ImageSlider from '../Components/ImageSlider';
import Acessory from '../Components/Acessory';
import Button from '../Components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';
import { CarDTO } from '../dtos/CarsDtos';

interface Params {
    car: CarDTO
}


export default function CarDetailsScreen(){

const navigation = useNavigation();
const route = useRoute();
const { car } = route.params as Params;

function handleConfirmRental(){
    navigation.navigate('Schedule')
}

function handleGoBack(){
    navigation.goBack();
}

return (
<Container>
    <Header>
        <BackButton onPress={handleGoBack} />
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
            <Period>Ao dia</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
        </Rent>
        </Details>

        <Acessories>
            { car.accessories.map( (accessory) => (
                <Acessory 
                key={accessory.type}
                name={accessory.name}
                icon={SpeedSvg} />

            ))}
 
        </Acessories>

        <About>{car.about}</About>

    </Content>

    <Footer>
        <Button 
        title='Confirmar'
        onPress={handleConfirmRental}
        />
    </Footer>

</Container>
);
}
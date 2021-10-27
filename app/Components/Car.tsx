import React from 'react';
import {
Container,
Details,
Brand,
Name,
About,
Rent,
Period,
Price,
Type,
CarImage,
} from './CarStyle'
import GasolineSvg from '../assets/gasoline.svg'

interface Cardata {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
}

interface Props {
    data: Cardata;
}

export default function Car({data}: Props){
return (
    <Container>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{`R$ ${data.rent.price}`}</Price>
                </Rent>

                <Type>
                    <GasolineSvg />
                </Type>
            </About>
        </Details>

        <CarImage
         source={{ uri: data.thumbnail}}
         resizeMode='contain'
         />

    </Container>
)}
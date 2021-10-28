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

export default function CarDetailsScreen(){
return (
<Container>
    <Header>
        <BackButton onPress={ () => {}} />
    </Header>

    <CarImage>
    <ImageSlider 
        imagesUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png',]}
    />
    </CarImage>

    <Content>
        <Details>
        <Description>
            <Brand>Audi</Brand>
            <Name>5S Coupe</Name>
        </Description>

        <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
        </Rent>
        </Details>

        <Acessories>
            <Acessory name='380 km/h' icon={SpeedSvg} />
            <Acessory name='3,2s' icon={AccelerationSvg} />
            <Acessory name='800 HP' icon={ForceSvg} />
            <Acessory name='Gasolina' icon={GasolineSvg} />
            <Acessory name='Auto' icon={ExchangeSvg} />
            <Acessory name='2 pessoas' icon={PeopleSvg} />
        </Acessories>

        <About>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi non vel, 
            hic totam commodi debitis aperiam id eaque cum unde magnam itaque, quibusdam 
            corporis odit numquam in ipsa tempore!
        </About>

    </Content>

    <Footer>
        <Button 
        title='Confirmar'
        onPress={ () => {}}
        />
    </Footer>

</Container>
);
}
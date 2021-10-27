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
} from './CarDetailsScreenStyle'
import BackButton from '../Components/BackButton';
import ImageSlider from '../Components/ImageSlider';

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

        <About>Bla bla bla bla</About>

    </Content>

</Container>
);
}
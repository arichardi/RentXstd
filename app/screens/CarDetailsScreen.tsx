import React from 'react';
import {
Container,
Header,
CarImage,
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

</Container>
);
}
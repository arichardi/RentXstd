import React from 'react';
import {
Container,
Header,
} from './CarDetailsScreenStyle'
import BackButton from '../Components/BackButton';

export default function CarDetailsScreen(){
return (
<Container>
    <Header>
        <BackButton onPress={ () => {}} />
    </Header>
</Container>
);
}
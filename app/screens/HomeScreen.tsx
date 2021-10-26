import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
} from './HomeScreenStyle'

import Logo from '../assets/logo.svg'

export default function HomeScreen(){
    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <Header>  
                <HeaderContent> 
                <Logo 
                    width={ RFValue(108)}
                    height={ RFValue(12)}
                />
                <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>
        </Container>
        )
}
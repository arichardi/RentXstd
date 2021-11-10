import React, {useEffect, useState} from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { RFValue } from 'react-native-responsive-fontsize'
import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
} from './HomeScreenStyle'
import Car from '../Components/Car'

import Logo from '../assets/logo.svg'
import api from '../services/api'
import { CarDTO } from '../dtos/CarsDtos'
import Load from '../Components/Load'

export default function HomeScreen(){

    const navigation = useNavigation()

    const [ cars, setCars] = useState([] as CarDTO [])
    const [ loading, setLoading] = useState(true)

    //functions

    useEffect( () => {
        async function fetchCars(){
            try {
                const response = await api.get('/cars')
                setCars(response.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchCars();

    }, [])

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', { car })
    }

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

            { loading ? <Load /> : 
            <CarList 
                data={cars}
                keyExtractor={ item => item.id}
                renderItem={ ({item}) => 
                <Car 
                    data={item} 
                    onPress={() => handleCarDetails(item)}
                />}
            />
            }

        </Container>
        )
}
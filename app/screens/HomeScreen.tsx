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

    const CarData = {
        brand: 'audi',
        name: 'Audi R5 Coupé',
        rent: {
            period: 'Ao dia',
            price: 500,
        },
        thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    }
    const CarDataTwo = {
        brand: 'porsche',
        name: 'Panamera',
        rent: {
            period: 'Ao dia',
            price: 350,
        },
        thumbnail: 'https://www.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_3474681900348621.png?s=fill&w=130&h=97&q=70&t=true)'
    }

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

    function handleCarDetails(){
        navigation.navigate('CarDetails')
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
                renderItem={ ({item}) => <Car data={item} 
                onPress={handleCarDetails}
                />}
            />
            }

        </Container>
        )
}
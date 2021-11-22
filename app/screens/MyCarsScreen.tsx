import React, {useState, useEffect} from 'react'
import { FlatList, StatusBar } from 'react-native'
import { Alert } from 'react-native'
import { CarDTO } from '../dtos/CarsDtos'
import api from '../services/api'
import { useNavigation } from '@react-navigation/core';
import {
    Container,
    Header,
    Title,
    Subtitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarFooter,
    CarWrapper,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
} from './MyCarsScreenStyle'

import BackButton from '../Components/BackButton'
import { AntDesign } from '@expo/vector-icons'
import theme from '../Styles/theme'
import Car from '../Components/Car'
import Load from '../Components/Load'

interface CarProps {
    car: CarDTO;
    id: string;
    user_id: string; 
    startDate: string;
    endDate: string;
}

export default function MyCars(){

    const [cars, setCars] = useState<CarProps[]>([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect( () => {
        async function fetchCars(){
            try {
                const response = await api.get(`/schedules_byuser?user_id=1`)
                setCars(response.data)
            } catch (error) {
                console.log(error)
                Alert.alert('Não foi possivel carregar os dados')
            } finally {
                setLoading(false)
            }
        }

        fetchCars();

    }, [])

    return(
        <Container>
            <Header>
                <StatusBar 
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton onPress={ handleGoBack } color={theme.colors.shape}/>
                <Title>
                    Seus agendamentos {`\n`}
                    estão aqui
                </Title>
                <Subtitle>Conforto, segurança e praticidade</Subtitle>
            </Header>

            { loading ? <Load /> :

                <Content>
                    <Appointments>
                        <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                        <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                    </Appointments>

                    <FlatList 
                        data={cars}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={ ({item}) => (
                            <CarWrapper>
                            <Car 
                                data={item.car}
                            />
                            <CarFooter>
                                <CarFooterTitle>Período</CarFooterTitle>
                                <CarFooterPeriod>
                                    <CarFooterDate>{item.startDate}</CarFooterDate>
                                    <AntDesign 
                                        name='arrowright'
                                        size={20}
                                        color={theme.colors.title}
                                        style={{ marginHorizontal: 10}}
                                    />
                                    <CarFooterDate>{item.endDate}</CarFooterDate>
                                </CarFooterPeriod>
                            </CarFooter>
                            </CarWrapper>
                        )}
                    />

                </Content>

            }
        </Container>
    )
}
import React from 'react'
import { StatusBar } from 'react-native'
import Button from '../Components/Button'
import theme from '../Styles/theme'
import {
    Container,
    Header,
    Title,
    Subtitle,
    Footer,
} from './SignInScreenStyle'

export default function SignInScreen(){
    return (
        <Container>

            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />

            <Header>
                <Title>Estamos{'\n'}quase lá</Title>
                <Subtitle>
                    Faça o login para começar{'\n'}
                    uma experiência incrível.
                </Subtitle>
            </Header>

            <Footer>
                <Button 
                    title='Login'
                    onPress={ () => {}}
                    enabled={false}
                    loading={false}
                />
                <Button 
                    title='Criar conta gratuita'
                    color={theme.colors.background_secondary}
                    onPress={ () => {}}
                    enabled={false}
                    loading={false}
                    light
                />
            </Footer>

        </Container>
    )
}
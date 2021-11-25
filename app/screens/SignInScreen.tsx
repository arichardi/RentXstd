import React, { useState } from 'react'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Button from '../Components/Button'
import Input from '../Components/Input'
import PasswordInput from '../Components/PasswordInput'
import theme from '../Styles/theme'
import {
    Container,
    Header,
    Title,
    Subtitle,
    Footer,
    Form,
} from './SignInScreenStyle'

export default function SignInScreen(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView behavior='position' enabled >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
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

                    <Form>
                        <Input 
                            iconName='mail'
                            placeholder='e-mail'
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={ (value) => setEmail(value)}
                            value={email}
                        />
                        <PasswordInput 
                            iconName='lock'
                            placeholder='Senha'
                            onChangeText={ (value) => setPassword(value)}
                            value={password}
                        />
                    </Form>

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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
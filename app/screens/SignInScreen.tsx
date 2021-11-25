import React, { useState } from 'react'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Button from '../Components/Button'
import Input from '../Components/Input'
import PasswordInput from '../Components/PasswordInput'
import * as Yup from 'yup'
import theme from '../Styles/theme'
import { useNavigation } from '@react-navigation/native'
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
    const navigation = useNavigation()

    function handleNewAccount(){
        navigation.navigate('SignUpFirst')
    }

    async function handleSignIn(){
    try {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('O Email obrigatório')
                .email('Digite um valor de email valido'),
            password: Yup.string()
                .required('A senha é obrigatória')      
        });
    
        await schema.validate({ email, password })
        
        //fazer login

    } catch (error) {
        if( error instanceof Yup.ValidationError){
            return Alert.alert ('Opa', error.message)
        }else{
            return Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer o login, verifique as credenciais')
        }
    }


    }

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
                            onPress={handleSignIn}
                            enabled={true}
                            loading={false}
                        />
                        <Button 
                            title='Criar conta gratuita'
                            color={theme.colors.background_secondary}
                            onPress={handleNewAccount}
                            enabled={true}
                            loading={false}
                            light
                        />
                    </Footer>

                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
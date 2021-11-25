import React, { useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import {
    Container,
    Header,
    BulletSteps,
    Title,
    Subtitle,
    Form,
    FormTitle,
} from './SignUpSecondScreenStyle'
import BackButton from '../Components/BackButton'
import Bullet from '../Components/Bullet'
import Button from '../Components/Button'
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import PasswordInput from '../Components/PasswordInput'
import theme from '../Styles/theme'

interface Params {
    user: {
        name: string;
        email: string;
        driverLicense: string;
    }
}

export default function SignUpSecondScreen(){

    const navigation = useNavigation ();
    const route = useRoute();
    const { user } = route.params as Params

    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    function handleBack(){
        navigation.goBack()
    }

    function handleRegister(){
        if(!password || !passwordConfirm){
            return Alert.alert('Informe a senha e a confirmação')
        }
        if(password !== passwordConfirm){
            return Alert.alert('As senhas não conferem')
        }

        //Cadastrar na API
        
        navigation.navigate('Confirmation', {
            nextScreenRoute: 'SignIn',
            title: 'Conta criada!',
            message: `Agora é só fazer o login\n e aproveitar`
        })

    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <BackButton 
                    onPress={handleBack}
                />
                <BulletSteps>
                    <Bullet />
                    <Bullet active/>
                </BulletSteps>
            </Header>

        <Title>
            Crie a sua{'\n'}
            conta
        </Title>
        <Subtitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
        </Subtitle>

        <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
                iconName='lock'
                placeholder='Senha'
                onChangeText={setPassword}
                value={password}
            />
            <PasswordInput
                iconName='lock'
                placeholder='Confirmar senha'
                keyboardType='email-address'
                onChangeText={setPasswordConfirm}
                value={passwordConfirm}
            />

        </Form>

        <Button 
            color={theme.colors.success}
            title='Cadastrar'
            onPress={handleRegister}
        />

        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
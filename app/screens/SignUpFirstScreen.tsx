import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    Container,
    Header,
    BulletSteps,
    Title,
    Subtitle,
    Form,
    FormTitle,
} from './SignUpFirstScreenStyle'
import * as Yup from 'yup'
import BackButton from '../Components/BackButton'
import Bullet from '../Components/Bullet'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import theme from '../Styles/theme'

export default function SignUpFirstScreen(){

    const navigation = useNavigation ()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [driverLicense, setDriverLicense] = useState('')

    function handleBack(){
        navigation.goBack()
    }

    async function handleNextStep(){
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('O nome é obrigatório'),
                email: Yup.string()
                    .email('E-mail invalido')
                    .required('O email é obrigatório'),
                driverLicense: Yup.string()
                    .required('A CNH é obrigatória')
            });

            const data = {name, email, driverLicense}
            await schema.validate(data)


            navigation.navigate('SignUpSecond', {user: data})
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                return Alert.alert('Opa', error.message)
            }else{
                Alert.alert('Ocorreu um erro durante o seu cadastro')
            }
        }
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
                    <Bullet active/>
                    <Bullet />
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
            <FormTitle>1. Dados</FormTitle>
            <Input 
                iconName='user'
                placeholder='Nome'
                onChangeText={setName}
                value={name}
            />
            <Input 
                iconName='mail'
                placeholder='E-mail'
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />
            <Input 
                iconName='credit-card'
                placeholder='CNH'
                keyboardType='numeric'
                onChangeText={(setDriverLicense)}
                value={driverLicense}
            />
        </Form>

        <Button 
            title='Próximo'
            onPress={handleNextStep}
        />

        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
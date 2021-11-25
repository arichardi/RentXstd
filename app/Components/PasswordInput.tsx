import React, {useState} from 'react'
import { TextInputProps } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {
    Container,
    InputText,
    IconContainer,
    ChangePasswordVisibilityButton
} from './PasswordInputStyle'
import theme from '../Styles/theme'

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name']
}

export default function PasswordInput({ iconName, ...rest }: InputProps){

    const [isPassworsVisible, setIsPasswordVisible] = useState(false)

    function handlePasswordVisibility(){
        setIsPasswordVisible(!isPassworsVisible)
    }

    return (
        <Container>
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={theme.colors.text_details}
                />
            </IconContainer>
            <InputText 
                secureTextEntry={isPassworsVisible}
                {...rest}
            />
            <ChangePasswordVisibilityButton onPress={handlePasswordVisibility}>
                <IconContainer>
                    <Feather 
                        name={isPassworsVisible ? 'eye' : 'eye-off'}
                        size={24}
                    />
                </IconContainer>
            </ChangePasswordVisibilityButton>
        </Container>
    )
}
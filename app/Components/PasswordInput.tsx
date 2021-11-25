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
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export default function PasswordInput({ iconName, value, ...rest }: InputProps){

    const [isPassworsVisible, setIsPasswordVisible] = useState(false)
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputOnFocus(){
        setIsOnFocus(true)
    };

    function handleInputOnBlur(){
        setIsOnFocus(false)
        setIsFilled(!!value)
    };

    function handlePasswordVisibility(){
        setIsPasswordVisible(!isPassworsVisible)
    }

    return (
        <Container isOnFocus={isOnFocus} >
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={(isOnFocus || isFilled ) ? theme.colors.main : theme.colors.text_details}
                />
            </IconContainer>
            <InputText 
                secureTextEntry={isPassworsVisible}
                onFocus={handleInputOnFocus}
                onBlur={handleInputOnBlur}
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
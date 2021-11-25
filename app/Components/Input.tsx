import React, {useState} from 'react'
import { TextInputProps } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {
    Container,
    InputText,
    IconContainer
} from './InputStyle'
import theme from '../Styles/theme'

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export default function Input({ iconName, value,  ...rest }: InputProps){

    const [isOnFocus, setIsOnFocus] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputOnFocus(){
        setIsOnFocus(true)
    };

    function handleInputOnBlur(){
        setIsOnFocus(false)
        setIsFilled(!!value)
    };

    return (
        <Container isOnFocus={isOnFocus} >
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={ (isOnFocus || isFilled ) ? theme.colors.main : theme.colors.text_details}
                />
            </IconContainer>
            <InputText 
                onFocus={handleInputOnFocus}
                onBlur={handleInputOnBlur}
            
            {...rest}/>
        </Container>
    )
}
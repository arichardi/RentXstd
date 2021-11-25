import React from 'react'
import { TextInputProps } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {
    Container,
    InputText,
    IconContainer
} from './InputStyle'
import theme from '../Styles/theme'

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name']
}

export default function Input({ iconName, ...rest }: InputProps){
    return (
        <Container>
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={theme.colors.text_details}
                />
            </IconContainer>
            <InputText {...rest}/>
        </Container>
    )
}
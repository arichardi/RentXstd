import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import theme from '../Styles/theme';
import {
Container
} from './BackButtonStyle'

interface Props extends BorderlessButtonProps{
    color?: string
}

export default function BackButton({color, ...rest}: Props){
return (
<Container {...rest}>
    <MaterialIcons 
        name='chevron-left'
        size={24}
        color={color ? color : theme.colors.text}
    />
</Container>
);
}

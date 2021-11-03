import React from 'react';
import theme from '../Styles/theme';
import {
Container,
Title,

} from './ButtonStyle'

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
}

export default function Button({title, color , onPress, ...rest}: Props){
return (

<Container onPress={onPress} color={color ? color : theme.colors.main} {...rest}>
    
    <Title>{title}</Title>

</Container>
);
}
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
Container,
Title,
} from './ConfirmButtonStyle'

interface Props extends RectButtonProps {
    title: string;
}

export default function ConfirmButton({title, ...rest}: Props){
return (
<Container {...rest}>
    <Title>{title}</Title>
</Container>
);
}
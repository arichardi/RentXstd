import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../Styles/theme';
import {
Container,
Title,

} from './ButtonStyle'

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
    enabled?: boolean;
    loading?: boolean;
    light? : boolean;
}

export default function Button({title, color , onPress, enabled = true, loading = false, light = false,  ...rest}: Props){
return (

<Container 
        onPress={onPress}
        color={color ? color : theme.colors.main}
        {...rest}
        enabled={enabled}
        style={{ opacity: (enabled === false || loading === true) ? .5 : 1}}
    >
    { loading 
        ? <ActivityIndicator color={theme.colors.shape}/>
        : <Title light={light} >{title}</Title>
    }
    
</Container>
);
}
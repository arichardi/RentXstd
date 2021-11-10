import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../Styles/theme';

export default function Load(){
return (
    <ActivityIndicator 
        color={theme.colors.main}
        size='large'
        style={{flex: 1}}
    />
);
}
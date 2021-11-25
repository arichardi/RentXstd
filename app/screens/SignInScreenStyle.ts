import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 0 24px;
    background-color: ${ ({theme}) => theme.colors.background_primary};
`;
export const Header = styled.View`
    width: 100%;
    margin-top: 116px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family: ${ ({theme}) => theme.fonts.secondary600};
    color: ${ ({theme}) => theme.colors.title};
`;
export const Subtitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${ ({theme}) => theme.fonts.secondary400};
    color: ${ ({theme}) => theme.colors.text};
    line-height: 24px;
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    
`;
export const Form = styled.View`
    width: 100%;
    margin: 64px 0px;
    
`;
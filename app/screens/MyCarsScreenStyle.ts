import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.colors.background_primary};

    align-items: center;

`;
export const Header = styled.View`
    width: 100%;
    height: 325px;
    
    background-color: ${ ({theme}) => theme.colors.header};

    justify-content: center;
    padding: 25px;
    padding-top: ${ getStatusBarHeight() + 30}px;

`;
export const Title = styled.Text`
    color: ${ ({theme}) => theme.colors.shape};
    font-family: ${ ({theme}) => theme.fonts.secondary600};
    font-size: ${RFValue(30)}px;
    margin-top: 24px;
`;
export const Subtitle = styled.Text`
    color: ${ ({theme}) => theme.colors.shape};
    font-family: ${ ({theme}) => theme.fonts.secondary400};
    font-size: ${RFValue(15)}px;
    margin-top: 24px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 0px 16px;
`;

export const Appointments = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0px;
`;

export const AppointmentsTitle = styled.Text`
    color: ${ ({theme}) => theme.colors.text};
    font-family: ${ ({theme}) => theme.fonts.primary400};
    font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
    color: ${ ({theme}) => theme.colors.text};
    font-family: ${ ({theme}) => theme.fonts.primary500};
    font-size: ${RFValue(15)}px;
`;

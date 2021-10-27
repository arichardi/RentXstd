import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background-color: ${ ({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    background-color: ${ ({theme}) => theme.colors.header};
    justify-content: flex-end;
    padding: 32px 24px;
    `;

export const TotalCars = styled.Text`
    font-size: ${ RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.primary400};
    color: ${({theme}) => theme.colors.text};
    
    `;

export const HeaderContent = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

`;
export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;
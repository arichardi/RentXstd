import { FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../dtos/CarsDtos';

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
export const CarList = styled(FlatList as new () => FlatList<CarDTO>)
.attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const MyCarsButton = styled(RectButton)`
     width: 60px;
     height: 60px;
     border-radius: 30px;

     background-color: ${ ({theme}) => theme.colors.main };

    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 22px;
    right: 22px;

`;
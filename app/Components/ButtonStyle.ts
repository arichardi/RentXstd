import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
    color: string
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;

    padding: 18px;
    align-items: center;
    justify-content: center;

    background-color: ${ ({ color, theme}) => 
    color ? color : theme.colors.main};
`;
export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${ ({theme}) => theme.fonts.primary500};
    color: ${ ({theme}) => theme.colors.shape};

`;
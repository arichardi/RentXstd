import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps{
    color: string
}

interface TextButtonProps {
    light: boolean
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 18px;
    align-items: center;
    justify-content: center;

    background-color: ${ ({ color }) => color };
`;
export const Title = styled.Text<TextButtonProps>`
    font-size: ${RFValue(15)}px;
    font-family: ${ ({theme}) => theme.fonts.primary500};
    color: ${ ({theme, light}) => light
    ? theme.colors.header
    : theme.colors.shape};

`;

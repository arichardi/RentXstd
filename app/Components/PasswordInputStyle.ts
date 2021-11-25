import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex-direction: row;
`;
export const IconContainer = styled.View`
    height: 56px;
    width: 56px;
    justify-content: center;
    align-items: center;
    background-color: ${ ({theme}) => theme.colors.background_secondary};  
    margin-right: 4px;
`;
export const InputText = styled(TextInput)`
    background-color: ${ ({theme}) => theme.colors.background_secondary};
    color: ${ ({theme}) => theme.colors.text};
    font-family: ${ ({theme}) => theme.fonts.primary400};
    font-size: ${RFValue(15)}px;
    padding: 0px 16px;
    flex: 1;
`;
export const ChangePasswordVisibilityButton = styled(BorderlessButton)`

`;
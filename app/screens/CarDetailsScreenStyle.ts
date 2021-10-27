import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.background_secondary};
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
import styled from 'styled-components';

export const StyledHeader = styled.div`
    min-height: ${({theme}) => theme.header.minHeight};
    display: flex;
    justify-content: center;
    padding: 15px;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    color: #fff;
`;
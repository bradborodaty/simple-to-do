import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid ${({theme}) => theme.colors.primary};

    p {
        padding: 15px;
    }
`;
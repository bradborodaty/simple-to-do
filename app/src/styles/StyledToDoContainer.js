import styled from 'styled-components';

export const StyledToDoContainer = styled.div`
    margin: auto;
    padding: 15px;
    max-width: 800px;

    form.add_item {
        display: flex;
        justify-content: center;

        input {
            border-bottom: 1px solid ${({theme}) => theme.colors.primary};
            padding: 15px 15px 0 5px;
            font-size: 1.2em;
        }
    }

    div.task_wrapper {
        display: flex;
        margin: auto;
        padding: 15px;
    }
`;
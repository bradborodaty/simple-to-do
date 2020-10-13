import styled from 'styled-components';

export const StyledTasks = styled.ul`
    width: 50%;
    display: block;
    list-style: none;
    border: 1px solid ${({theme}) => theme.colors.secondary};
    border-radius: 15px;
    margin: 15px;

    li {
        padding: 15px;
        border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
        :last-of-type {
            border: 0;
        }
        &.heading {
            font-size: 1.2em;
            font-weight: bold;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }
        .item_name {
            width: 50%;
            display: inline-block;
        }
        .item_button {
            width: 50%;
            display: inline-flex;
            justify-content: flex-end;
            button {
                margin-right: 10px;
                :last-of-type {
                    margin-right: 0;
                }
            }
        }
    }
`;
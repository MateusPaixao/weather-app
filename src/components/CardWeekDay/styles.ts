import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background-color: #222832;
    border-radius: 10px;
    transition: 200ms ease;
    cursor: pointer;

    span {
        text-transform: capitalize;
    }

    &.selected,
    &:hover {
        transform: scale(1.1);
        background: #fff;
        color: #222831;
        box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
    }

    @media all and (max-width: 660px){
        padding: 10px;
    }
`
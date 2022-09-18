import styled from 'styled-components'

export const Container = styled.div`
    background-color: #7ebdee;
    border-radius: 25px;
    padding: 20px 25px;
    width: 300px;
    min-height: 366px;
    color: #ffffff;
    box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
    transition: transform 300ms ease;
    position: relative;
    z-index: 2;

    &:hover {
        transform: scale(1.1);
    }

    @media all and (max-width: 660px){
        width: 100%;
        max-width: 250px;
    }
`

export const DateLocation = styled.div`
    section span { 
        display: block; 
        text-transform: capitalize;
    }

    p {
        display: flex;
        align-items: center;
        margin: 15px 0 100px 0;

        strong {
            font-size: 20px;
        }

        span {
            font-size: 14px;
            display: block;
            margin-left: 8px;
        }
    }

    h2 {
        text-transform: capitalize;
    }
`

export const WeatherInfo = styled.div`
    section {
        margin-top: 10px;

        h1 {
            font-size: 48px;
        }

        span {
            font-weight: bold;
            text-transform: capitalize;
        }
    }
`
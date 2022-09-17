import styled from 'styled-components'

export const Container = styled.div`
    background-color: #7ebdee;
    border-radius: 25px;
    padding: 20px 25px;
    width: 300px;
    color: #ffffff;
`

export const DateLocation = styled.div`
    p span { 
        display: block; 
    }

    p:first-child {
        strong {
            font-size: 20px;
        }

        span {
            font-size: 14px;
        }
    }

    p:last-child {
        display: flex;
        align-items: center;
        margin: 15px 0 100px 0;

        span {
            display: block;
            margin-left: 8px;
        }
    }
`

export const WeatherInfo = styled.div`
    p {
        margin-top: 10px;

        h1 {
            font-size: 48px;
            margin-bottom: 5px;
        }

        span {
            font-weight: bold;
        }
    }
`
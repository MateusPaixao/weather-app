import styled from 'styled-components'

export const Container = styled.div`
    background-color: #222830;
    border-radius: 25px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0 0 70px -10px rgb(0 0 0 / 20%);
    color: #ffffff;
    padding: 30px;
    width: 340px;
    padding-left: 60px;
    min-height: 366px;
    transform: translateX(-30px);
    position: relative;
    z-index: 1;

    @media all and (max-width: 660px){
        transform: translate(0, -30px);
        padding: 60px 15px 15px;
        width: 100%;
        max-width: 250px;
        border-radius: 25px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`

export const Details = styled.ul`
    list-style: none;
    margin-bottom: 40px;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        span:first-child {
            text-transform: uppercase;
            font-weight: bold;
        }
    }
`

export const WeekContainer = styled.div`
    display: flex;
    box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    button {
        outline: none;
        width: 100%;
        border: none;
        border-radius: 25px;
        padding: 10px;
        background-image: linear-gradient(135deg, #7ebdee 10%, #5151E5 100%);
        color: #ffffff;
        font-weight: 700;
        box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: -webkit-transform 200ms ease;
        transition: transform 200ms ease;

        &:hover {
            transform: scale(0.95);
        }

        span { 
            display: inline-block;
            margin-left: 10px;
            transform: translateY(-2px);
        }
    }
`

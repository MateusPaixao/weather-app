import styled from 'styled-components';
import { colors } from 'GlobalStyles';
// generated for Loading

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
`

export const Content = styled.div`
    border: 8px solid ${colors.whiteNeutral};
    border-top: 8px solid ${colors.purpleMedium};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`
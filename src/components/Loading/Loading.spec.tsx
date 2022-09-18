import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('Loading Component', () => {
    it('should renders correctly', () => {
        render( <Loading /> )

        const loading = screen.getByTestId('loading')

        expect(loading).toBeInTheDocument()
        expect(loading).toHaveStyle('animation: spin 1s linear infinite;')
    })
})
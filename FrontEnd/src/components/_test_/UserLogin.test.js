import { render, screen } from '@testing-library/react';

import UserLogin from '../views/UserLogin/UserLogin';
import { createMemoryHistory } from "history";
const history = createMemoryHistory();


describe('Test de home', () => {
    test('Categories', () => {
        const {getByTestId} = render(<UserLogin />)
        expect(getByTestId('email')).toBeInTheDocument();
        expect(getByTestId('password')).toBeInTheDocument();
    })
})
import { render, screen } from '@testing-library/react';

import Footer from '../componentes/Footer/Footer';
import SocialMedia from '../componentes/SocialMedia/SocialMedia'


describe('Test de footer', ()=>{
    test('Footer con componentes', () =>{
        const {getByTestId} = render(<Footer />)
        expect(getByTestId('texto')).toBeInTheDocument();
        expect(getByTestId('styleFooter')).toBeInTheDocument();
    });
    test('SocialMedia con links', () =>{
        const {getAllByTestId} = render(<SocialMedia />)
        expect(getAllByTestId('header-left').length).toBe(4);
        expect(getAllByTestId('fab').length).toBe(4);
    })
    test('Existencia de link Fackebook, Instagram, Twitter, Linkedin', () =>{
        const {getAllByRole} = render(<SocialMedia />)
        const array = getAllByRole('link');
        expect(array[0].getAttribute('href')).toBe('https://www.facebook.com/')
        expect(array[1].getAttribute('href')).toBe('https://www.linkedin.com/')
        expect(array[2].getAttribute('href')).toBe('https://twitter.com/')
        expect(array[3].getAttribute('href')).toBe('https://www.instagram.com/')

    })

})

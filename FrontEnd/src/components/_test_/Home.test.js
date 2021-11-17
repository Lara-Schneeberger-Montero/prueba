import { render, screen, cleanup } from '@testing-library/react';
import Categories from '../views/Home/HomeComponents/Categories/Categories';
import Card from '../views/Home/HomeComponents/Recomendations/Card/card'
import { Link } from "react-router-dom";
import { BrowserRouter, Router, Switch, Redirect } from 'react-router-dom';
import Recommendations from '../views/Home/HomeComponents/Recomendations/Recommendations'
import '@testing-library/jest-dom/extend-expect';
import Search from '../views/Home/HomeComponents/Search/Search';
import { DateRangePicker } from 'rsuite';

import { createMemoryHistory } from "history";
const history = createMemoryHistory();

afterEach(cleanup);
describe('Test de home', () => {
    test('Categories', () => {
        const { getByTestId } = render(
            <Router history={history}>
                <Categories />
            </Router>
        );
        expect(getByTestId('styleCategorias')).toBeInTheDocument();
        expect(getByTestId('cardsCategorias')).toBeInTheDocument();
    })

    test('Cards', () => {
        const { getByTestId, getAllByAltText } = render(
            <Router history={history}>
                <Card />
            </Router>
        );
        expect(getByTestId('card-cabecera')).toBeInTheDocument();
        expect(getByTestId('card-description')).toBeInTheDocument();
        expect(getByTestId('card-accesorios')).toBeInTheDocument();
        expect(getAllByAltText('star').length).toBe(5)
    })

    test('Recomendation', () => {
        const data = {
            key: 0,
            img: "https://i.blogs.es/e6e3bc/duramax-ss-650/450_1000.jpg",
            category: "Clásicos",
            title: "Carro clásico",
            location: "Bogotá",
            description: "El mejor autito del mundo",
            mapa: "place/Bogotá",
            calificacion: "9",
        }
        const { getByTestId } = render(
            <Router history={history}>
                <Recommendations />
            </Router>
        );
        const contenedor = render(
            <Router history={history}>
                <Card {...data} />
            </Router>)

        expect(getByTestId('Cards')).toBeInTheDocument();
        expect(contenedor).toMatchSnapshot();
    })


    test('Search', () => {
        const { getByTestId, getAllByRole, contenedor } = render(
            <Router history={history}>
                <Search />
            </Router>
        );
        expect(getByTestId('styleSearch')).toBeInTheDocument();
        expect(getByTestId('form-search')).toBeInTheDocument();
        // expect(contenedor.toMatchInlineSnapshot(<DateRangePicker className="datePicker"
        // placeholder="Seleccione la fecha"/>)).toBeTruthy();
        expect(getAllByRole('option').length).toBe(5);
    })

})

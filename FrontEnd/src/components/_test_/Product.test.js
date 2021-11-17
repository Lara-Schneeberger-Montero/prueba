import { render, screen, cleanup } from '@testing-library/react';
// import Gallery from '../../components/views/Product/Gallery/Gallery';
// import Description from '../../components/views/Product/ProductDescription/ProductDescription';
// // import Features from '../../components/views/Product/Features/Features';
// // import MapProduct from '../views/Product/MapProduct/MapProduct';
import Policies from '../../components/views/Product/Policies/Policies';
import { Link } from "react-router-dom";
import { BrowserRouter, Router, Switch, Redirect } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';


import { createMemoryHistory } from "history";
import Product from '../views/Product/Product';
const history = createMemoryHistory();

afterEach(cleanup);
describe('Test de Productos', () => {
    // test('Header Producto', () => {
    //     const { getByTestId } = render(
    //         <Router history={history}>
    //             <HeaderProduct />
    //         </Router>
    //     );
    //     expect(getByTestId('styledHeaderProducto')).toBeInTheDocument();
    //     expect(getByTestId('categoriaHeaderProducto')).toBeInTheDocument();
    //     expect(getByTestId('nombreHeaderProducto')).toBeInTheDocument();
    // })

    // test('Header Ubicación', () => {
    //     const { getByTestId, getAllByAltText } = render(
    //         <Router history={history}>
    //             <HeaderUbication />
    //         </Router>
    //     );
    //     expect(getByTestId('styledHeaderUbication')).toBeInTheDocument();
    //     expect(getByTestId('ubicacionHeaderUbication')).toBeInTheDocument();
    //     expect(getByTestId('calificacionHeaderUbication')).toBeInTheDocument();
    //     expect(getAllByAltText('star').length).toBe(5);
    // })

    // test('Gallery', () => {
    //     const { getByTestId } = render(
    //         <Router history={history}>
    //             <Gallery />
    //         </Router>
    //     );
    //     expect(getByTestId('styledGallery')).toBeInTheDocument();
    // })

    // test('Description', () => {
    //     const { getByTestId } = render(
    //         <Router history={history}>
    //             <Description />
    //         </Router>
    //     );
    //     expect(getByTestId('styledDescription')).toBeInTheDocument();
    //     expect(getByTestId('titleDescription')).toBeInTheDocument();
    //     expect(getByTestId('contentDescription')).toBeInTheDocument();
    // })

    test('Mapa', () => {
        render(
            <Router history={history}>
                <Product />
            </Router>
        );
     let useffect = jest.spyOn(React, "useEffect").mockImplementation((f) =>f());
     expect(useffect).toHaveBeenCalledTimes(1)
    })

    test('Politicas', () => {
       
        const { getByTestId } = render(
            <Router history={history}>
                <Policies />
            </Router>
        );
        expect(getByTestId('styledPoliticies')).toBeInTheDocument();
       
    })
    // const mockUseEffect = () => {
    //     useEffect.mockImplementationOnce(f => f());
    // };
    // let useEffect;
    // let store;
    // store = configureStore([thunk])({
    //     isLoading: false,
    //     error: null
    //   });
    // useEffect = jest.spyOn(React, "useEffect");
    // mockUseEffect(); // 2 times
    // mockUseEffect();

    // describe("on mount", () => {
    //     it("dispatch search action to store", () => {
    //       const actions = store.getActions();
    //       expect(actions).toEqual([{ type: "SEARCH", query: "all" }, 
    //       { type: "SEARCH_SUCCESS", recipes: fakeRecipes }]);
    //     });
    //   });
})
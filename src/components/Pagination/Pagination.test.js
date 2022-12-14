import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination';

jest.mock('react-redux', () => {
    return {
        useSelector: jest.fn(),
        useDispatch: jest.fn(),
    };
});


describe('Pagination component', () => {
    it('should render buttons for navigating between pages', () => {
        // render the component
        const {getByText} = render(<Pagination/>);

        // assert that the buttons are present in the DOM
        expect(getByText('First Page')).toBeInTheDocument();
        expect(getByText('Previous page')).toBeInTheDocument();
        expect(getByText('Next page')).toBeInTheDocument();
        expect(getByText('Last Page')).toBeInTheDocument();
    });

    it('should disable previous and first page buttons when on first page', () => {
        useSelector.mockImplementation(callback =>
            callback({
                page: 1,
                data: [1, 2, 3, 4, 5],
                itemsPerPage: 5,
            })
        );

        const { getByText } = render(<Pagination />);

        const firstPageButton = getByText('First Page');
        const previousPageButton = getByText('Previous page');

        expect(firstPageButton.disabled).toBeTruthy();
        expect(previousPageButton.disabled).toBeTruthy();
    });

    it('should disable next and last page when on the last page',()=> {
        useSelector.mockImplementation(callback =>
            callback({
                page: 3,
                data: [1,2,3,4,5,6,7,8,9,10,11],
                itemsPerPage: 5,
            })
        )

        const {getByText} = render(<Pagination/>);

         const nextPageButton = getByText('Next page');
         const lastPageButton = getByText('Last Page');

         expect(nextPageButton.disabled).toBeTruthy();
        expect(lastPageButton.disabled).toBeTruthy();

    });
});
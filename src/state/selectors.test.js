import { getResults, getPage, getItemsPerPage, getProducts } from './selectors';

describe('stories selectors', () => {
    it('should get results', () => {
        const state = {
            data: [1, 2, 3],
        };

        expect(getResults(state)).toEqual([1, 2, 3]);
    });

    it('should get page', () => {
        const state = {
            page: 2,
        };

        expect(getPage(state)).toEqual(2);
    });

    it('should get items per page', () => {
        const state = {
            itemsPerPage: 20,
        };

        expect(getItemsPerPage(state)).toEqual(20);
    });

    it('should get products', () => {
        const state = {
            products: [1, 2, 3],
        };

        expect(getProducts(state)).toEqual([1, 2, 3]);
    });
});

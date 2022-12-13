import reducer from './reducer';
import {
    STORIES_PLAN_START,
    STORIES_PLAN_START_SUCCESS,
    STORIES_PLAN_START_ERROR,
    STORIES_GROUPED_PLAN_START,
    STORIES_GROUPED_PLAN_START_SUCCESS,
} from './types';

describe('stories reducer', () => {
    it('should handle STORIES_PLAN_START', () => {
        const action = {
            type: STORIES_PLAN_START,
        };

        const expectedState = {
            loading: true,
            error: null,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: [],
        };

        expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle STORIES_PLAN_START_SUCCESS', () => {
        const action = {
            type: STORIES_PLAN_START_SUCCESS,
            payload: [1, 2, 3],
        };

        const expectedState = {
            loading: false,
            error: false,
            data: [1, 2, 3],
            page: 1,
            itemsPerPage: 10,
            products: [],
        };

        expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle STORIES_PLAN_START_ERROR', () => {
        const action = {
            type: STORIES_PLAN_START_ERROR,
            payload: 'An error occurred',
        };

        const expectedState = {
            loading: false,
            error: 'An error occurred',
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: [],
        };

        expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle STORIES_GROUPED_PLAN_START', () => {
        const action = {
            type: STORIES_GROUPED_PLAN_START,
        };

        const expectedState = {
            loading: true,
            error: null,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: [],
        };

        expect(reducer(undefined, action)).toEqual(expectedState);
    })


    it('should handle STORIES_GROUPED_PLAN_START_SUCCESS', () => {
        const action = {
            type: STORIES_GROUPED_PLAN_START_SUCCESS,
            payload: [1, 2, 3],
        };

        const expectedState = {
            loading: false,
            error: null,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: [1, 2, 3],
        };

        expect(reducer(undefined, action)).toEqual(expectedState);
    });
})


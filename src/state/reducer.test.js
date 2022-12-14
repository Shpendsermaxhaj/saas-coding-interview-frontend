import reducer from './reducer';
import {
    STORIES_PLAN_START,
    STORIES_PLAN_START_SUCCESS,
    STORIES_PLAN_START_ERROR,
    STORIES_GROUPED_PLAN_START,
    STORIES_GROUPED_PLAN_START_SUCCESS, STORIES_GROUPED_PLAN_START_ERROR, GROUP_PRODUCTS, CHANGE_PAGE,

} from './types';
import * as assert from "assert";

describe('stories reducer', () => {

    it('initial default state ', ()=>{

        const initialState = {
            loading: true,
            error: false,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {},
        };
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    it('initial state is returned when no action type matches',()=>{
        const dummyAction = {
            type: 'DUMMY_ACTION'
        }

        const initialState = {
            loading: true,
            error: false,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {},
        };

        const result = reducer(initialState, dummyAction);

        assert.deepEqual(result, initialState);

    })



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
            products: {},
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
            products: {},
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
            products: {},
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
            products: {},
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


    it('should handle STORIES_GROUPED_PLAN_ERROR', () => {
        const dummyPayload = {
            error: 'There was an error'
        };

        const action = {
            type: STORIES_GROUPED_PLAN_START_ERROR,
            payload: dummyPayload
        };

        const initialState = {
            loading: true,
            error: false,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {},
        };

        const expectedState = {
            loading: false,
            error: dummyPayload,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {},
        };

        const result = reducer(initialState, action);

        assert.deepEqual(result, expectedState);
    })

    it('sets the products property to the payload of the action', () => {
        const initialState = {
            loading: true,
            error: false,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {},
        };

        const action = {
            type: GROUP_PRODUCTS,
            payload: {
                product1: [],
                product2: [],
            },
        };

        const expectedState = {
            loading: true,
            error: false,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {
                product1: [],
                product2: [],
            },
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('sets the page property to the payload of the action', () => {
        const initialState = {
            loading: true,
            error: false,
            data: [],
            page: 1,
            itemsPerPage: 10,
            products: {},
        };

        const action = {
            type: CHANGE_PAGE,
            payload: 2,
        };

        const expectedState = {
            loading: true,
            error: false,
            data: [],
            page: 2,
            itemsPerPage: 10,
            products: {},
        };

        expect(reducer(initialState, action)).toEqual(expectedState);
    });



})


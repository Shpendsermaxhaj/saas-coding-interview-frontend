import {
    STORIES_PLAN_START,
    STORIES_PLAN_START_SUCCESS,
    STORIES_PLAN_START_ERROR,
    STORIES_GROUPED_PLAN_START,
    STORIES_GROUPED_PLAN_START_SUCCESS,
    STORIES_GROUPED_PLAN_START_ERROR,
} from './types';

const initialState = {
    loading: true,
    error: false,
    data: [],
    page: 1,
    itemsPerPage: 10,
    products: {},
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STORIES_PLAN_START:
            return { ...state, loading: true, error: null };

        case STORIES_PLAN_START_SUCCESS:
            return { ...state, loading: false, data: action.payload };

        case STORIES_PLAN_START_ERROR:
            return { ...state, loading: false, error: action.payload };

        case STORIES_GROUPED_PLAN_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case STORIES_GROUPED_PLAN_START_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null,
            };
        case STORIES_GROUPED_PLAN_START_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'GROUP_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'CHANGE_PAGE':
            return {
                ...state,
                page: action.payload,
            };

        default:
            return state;
    }
}

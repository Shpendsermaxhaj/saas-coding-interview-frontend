import { getStories, getStory } from '../repository/stories';
import {
    STORIES_PLAN_START,
    STORIES_PLAN_START_SUCCESS,
    STORIES_PLAN_START_ERROR,
    STORIES_GROUPED_PLAN_START,
    STORIES_GROUPED_PLAN_START_SUCCESS,
    STORIES_GROUPED_PLAN_START_ERROR,
} from './types';

// Find Hacker News API here
// https://github.com/HackerNews/API

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
export function loadTopstories() {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: STORIES_PLAN_START,
            });

            const response = await getStories();

            if (response.data) {
                dispatch({
                    type: STORIES_PLAN_START_SUCCESS,
                    payload: response.data,
                });
            } else {
                dispatch({
                    type: STORIES_PLAN_START_ERROR,
                    payload: {
                        message: 'Stories were not found',
                    },
                });
            }
        } catch (error) {
            dispatch({
                type: STORIES_PLAN_START_ERROR,
                payload: {
                    message: 'Stories were not found',
                },
            });
        }
    };
}

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)
export function fetchStoryById(ids, page, itemsPerPage) {
    return async dispatch => {
        dispatch({
            type: STORIES_GROUPED_PLAN_START,
        });
        try {
            // Calculate the offset for the current page
            const offset = (page - 1) * itemsPerPage;
            // Use the Promise.all() method to fetch the products one at a time
            // and then group them together in the Redux store
            const fetchedProducts = await Promise.all(
                ids.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(async id => {
                    const response = await getStory(id, offset, itemsPerPage);
                    return response.data;
                })
            );

            const groupedProducts = fetchedProducts.reduce((acc, product) => {
                acc[product.id] = product;
                return acc;
            }, {});

            dispatch({
                type: STORIES_GROUPED_PLAN_START_SUCCESS,
                payload: groupedProducts,
            });
        } catch (error) {
            dispatch({
                type: STORIES_GROUPED_PLAN_START_ERROR,
                payload: {
                    message: 'Stories were not found' || error,
                },
            });
        }
    };
}

/*
task1 (react, redux, api)
implement a list view with news from the Hacker News API (more info in the actions.js)
implement as much as you think is needed to show us your experience
also implement a pagination with for example 10 items per page
*/

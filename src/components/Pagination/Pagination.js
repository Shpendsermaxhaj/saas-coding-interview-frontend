import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CHANGE_PAGE} from "../../state/types";

const Pagination = () => {
    const page = useSelector(state => state.page);
    const results = useSelector(state => state.data);
    const itemsPerPage = useSelector(state => state.itemsPerPage);
    const dispatch = useDispatch();

    const handlePageChange = page => {
        dispatch({
            type: CHANGE_PAGE,
            payload: page,
        });
    };

    return (
        <>
            <button onClick={() => handlePageChange(1)} disabled={page === 1}>
                First Page
            </button>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                Previous page
            </button>
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === Math.ceil(results?.length / itemsPerPage)}
            >
                Next page
            </button>
            <button
                onClick={() => handlePageChange(Math.ceil(results?.length / itemsPerPage))}
                disabled={page === Math.ceil(results?.length / itemsPerPage)}
            >
                Last Page
            </button>
            <p>Page: {page}</p>
        </>
    );
};

export default Pagination;

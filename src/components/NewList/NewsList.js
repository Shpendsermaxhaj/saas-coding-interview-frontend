import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTopstories, fetchStoryById } from '../../state/actions';
import Pagination from '../Pagination/Pagination';
import {getItemsPerPage, getPage, getProducts, getResults} from "../../state/selectors";
import NewsListEntry from "../NewsListEntry/NewsListEntry";
import Loading from "../Loading/Loading";

const NewsList = () => {
    const results = useSelector(getResults);
    const page = useSelector(getPage);
    const itemsPerPage = useSelector(getItemsPerPage);
    const products = useSelector(getProducts);
    const dispatch = useDispatch();

    // Fetch top stories with all the ids
    useEffect(() => {
        dispatch(loadTopstories());
    }, [dispatch]);

    // Dispatch fetchStoryById  with results, an array of ids and displayed itemsPerPage as an argument
    useEffect(() => {
        fetchData();
    }, [results, page]);

    async function fetchData() {
        dispatch(fetchStoryById(results, page, itemsPerPage));
    }



    if (products && Object.values(products).every(item => item === null)) {
        return <Loading/>
    }


    return (
        <div>
           <NewsListEntry products={products}/>
            <Pagination />
        </div>
    );
};

export default NewsList;
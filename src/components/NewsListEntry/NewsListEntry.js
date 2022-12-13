import React from 'react';

const NewsListEntry = ({products}) => {
    return (
        <>
    <ul>
        {Object.keys(products).map(id => (
            <li key={id}>
                By: {products[id].by} Descendants: {products[id].descendants}
            </li>
        ))}
    </ul>
        </>)
};

export default NewsListEntry;

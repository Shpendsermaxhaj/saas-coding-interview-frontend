import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsListEntry from './NewsListEntry';

afterEach(cleanup);

const products = {
    "1": {
        "by": "John Doe",
        "descendants": 5
    },
    "2": {
        "by": "Shpend Sermaxhaj",
        "descendants": 10
    }
};

it('renders the list of products', () => {
    const { getByText } = render(<NewsListEntry products={products} />);

    expect(getByText('By: John Doe Descendants: 5')).toBeDefined();
    expect(getByText('By: Shpend Sermaxhaj Descendants: 10')).toBeDefined();
});

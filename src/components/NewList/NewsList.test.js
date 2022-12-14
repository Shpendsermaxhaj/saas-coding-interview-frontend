import React from 'react';
import {shallow} from 'enzyme';
import {useSelector, useDispatch, Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme'
import Pagination from "../Pagination/Pagination";
import NewsListEntry from "../NewsListEntry/NewsListEntry";
import NewsList from './NewsList';


configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));



describe('NewsList', () => {
    const wrapper = shallow(
            <NewsList />
    );

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render a loading component if products are not loaded', () => {
        useSelector.mockImplementation(() => {});
        useSelector.mockImplementation(callback =>
            callback({
                products: {},
            })
        )

        expect(wrapper.find('Loading')).toHaveLength(0);
    });

    it('should render a NewsListEntry component', () => {
        expect(wrapper.find('NewsListEntry')).toHaveLength(1);
    });

    it('should render a Pagination component', () => {
        expect(wrapper.find('Pagination')).toHaveLength(1);
    });
});

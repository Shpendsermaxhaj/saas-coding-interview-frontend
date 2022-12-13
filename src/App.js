import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import store from './state/store';
import NewsList from "./components/NewList/NewsList";
import { Task2 } from './Task2/Task2';

/*
task1 (react, redux, api)
implement a list view with news from the Hacker News API (more info in the actions.js)
implement as much as you think is needed to show us your experience
also implement a pagination with for example 10 items per page
*/

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography variant="h4">Hacker News Topstories</Typography>
                <NewsList />
                 {/*<Task2 />*/}
            </Container>
        </Provider>
    );
}

export default App;

import API from '../services/api';

// Stories APIs

// Get All Stories
export const getStories = async () => {
    return await API.get(`/askstories.json`);
};

// Get a single story
export const getStory = async id => {
    return await API.get(`/item/${id}.json`);
};

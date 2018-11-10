import axios from '../axios-hackerNews';

const PAGE_LIMIT = 30;

const getPageSlice = (limit, page = 0) => {
    return {
        begin: page * limit,
        end: (page + 1) * limit
    }
}

const getPageValues = ({begin, end, items}) => items.slice(begin, end);

const getStory = id => {
    return axios.get('/item/' + id + '.json');
}

export const getStoriesByPage = (ids, page) => {
    const {begin, end} = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({begin, end, items: ids});
    const storyPromises = activeIds.map(id => getStory(id));
    return Promise.all(storyPromises);
}
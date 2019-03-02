import * as actionTypes from '../actions/actionTypes';

const initialState = {
    newStories: [],
    newStoriesId: [],
    page: 0,
    fetching: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_STORIES_START:
        case actionTypes.FETCH_STORIES_ID_START: return {
            ...state,
            fetching: true
        }
        case actionTypes.FETCH_STORIES_ID_SUCCESS: return {
            ...state,
            newStoriesId: state.newStoriesId.concat(action.newStoriesId)
        }
        case actionTypes.FETCH_STORIES_FAIL: return {
            ...state,
            fetching: false,
            error: true
        }
        case actionTypes.FETCH_STORIES_ID_FAIL: return {
            ...state,
            fetching: false,
            error: true
        }
        case actionTypes.FETCH_STORIES_SUCCESS: return {
            ...state,
            newStories: [...state.newStories, ...action.stories],
            page: state.page + 1,
            fetching: false
        }
        default: return state;
    }
}

export default reducer;


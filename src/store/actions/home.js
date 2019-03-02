import * as actionTypes from './actionTypes';
import axios from '../../axios-hackerNews';
import { getStoriesByPage } from '../service';

export const setStories = story => {
    return {
        type: actionTypes.SET_STORIES,
        story
    }
}

const fetchStoriesIdStart = () => {
    return {
        type: actionTypes.FETCH_STORIES_ID_START
    }
}

const fetchStoriesIdSuccess = storyId => {
    return {
        type: actionTypes.FETCH_STORIES_ID_SUCCESS,
        newStoriesId: storyId
    }
}

const fetchStoriesIdFail = error => {
    return {
        type: actionTypes.FETCH_STORIES_ID_FAIL,
        error: error
    }
}

const fetchStoriesStart = (storyId, page) => {
    return {
        type: actionTypes.FETCH_STORIES_START,
        storyId,
        page
    }
}

const fetchStoriesSuccess = stories => {
    return {
        type: actionTypes.FETCH_STORIES_SUCCESS,
        stories
    }
}

const fetchStoriesFail = error => {
    return {
        type: actionTypes.FETCH_STORIES_FAIL,
        error: error
    }
}

export const fetchStories = (storyId, page = 0) => {
    return dispatch => {
        dispatch(fetchStoriesStart(storyId, page))
        getStoriesByPage(storyId, page).then(stories => {
            dispatch(fetchStoriesSuccess(stories.map(story => story.data)))
        }).catch(err => {
            console.log('fetch stories fail..', err)
            dispatch(fetchStoriesFail(err.res))
        })
    }
}

export const newStoriesFetch = () => {
    return dispatch => {
        dispatch(fetchStoriesIdStart())
        axios.get('/topstories.json')
            .then(res => {
                dispatch(fetchStoriesIdSuccess(res.data));
                dispatch(fetchStories(res.data, 0));
            })
            .catch(err => {
                dispatch(fetchStoriesIdFail(err.res))
            })
    }
}
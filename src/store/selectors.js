import { createSelector } from 'reselect';

const storyIdsSelector = state => state.newStoriesId;
const storySelector = state => state.newStories;

export const hasMoreStoriesSelector = createSelector(
    storyIdsSelector,
    storySelector,
    (storyIds, story) => storyIds.length > story.length
);
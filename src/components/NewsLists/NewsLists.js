import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import NewsList from "./NewsList/NewsList";
import Spinner from "../UI/Spinner/Spinner";
import * as actions from "../../store/actions/home";
import { hasMoreStoriesSelector } from "../../store/selectors";
import "./NewsLists.css";

class newsLists extends Component {
  fetchStories = () => {
    const { newStoriesId, page, onFetchStories, fetching } = this.props;
    if (!fetching) {
        onFetchStories(newStoriesId, page);
    }
  };

  render() {
    const { newStories, hasMoreStories } = this.props;
    let newsListsRender = <Spinner />;

    if (this.props.newStories.length > 20) {
      newsListsRender = this.props.newStories.map(story => {
        return <NewsList key={story.id} story={story} />;
      });
    }

    return (
      <div className="NewsLists">
        <InfiniteScroll
          dataLength={newStories.length}
          next={this.fetchStories}
          hasMore={hasMoreStories}
          loader={<Spinner />}
          style={{
            height: "100%",
            overflow: "visible"
          }}
        >
          {newsListsRender}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newStories: state.newStories,
    newStoriesId: state.newStoriesId,
    page: state.page,
    fetching: state.fetching,
    hasMoreStories: hasMoreStoriesSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchStories: (storyIds, page) =>
      dispatch(actions.fetchStories(storyIds, page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newsLists);

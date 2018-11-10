import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './NewsList.css';

const newsList = props => (
    <div className="NewsList">
        <h4><a href={props.story.url}>{props.story.title}</a></h4>
        <div className="Info">
        {props.story.score} points | 
        <a href={'https://news.ycombinator.com/user?id='+props.story.by}>{props.story.by}</a> | 
        <a href={'https://news.ycombinator.com/item?id='+props.story.id}><Moment fromNow>{props.story.time * 1000}</Moment></a> | 
        <a href={'https://news.ycombinator.com/item?id='+props.story.id}> {props.story.descendants !== 0 ? props.story.descendants + ' comments |' : null }</a>
        <a href={props.story.url}>({props.story.url})</a>
        </div>
        <div className="Spacer"></div>
    </div>
)

export default newsList;
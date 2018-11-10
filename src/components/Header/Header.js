import React from 'react';
import './Header.css';
import image from "../../assets/hackerNews.svg";

const header = props => {
    return (
        <header className="Header">
          <div className="Left">
            <div>
              <img src={image} alt="logo" />
            </div>
            <div className="Header__2nd">
              <h3>Hacker News</h3>
              <ul>
                <li><a href='https://news.ycombinator.com/newest'>news</a></li>
                <li><a href='https://news.ycombinator.com/newcomments'>comments</a></li>
                <li><a href='https://news.ycombinator.com/show'>show</a></li>
                <li><a href='https://news.ycombinator.com/ask'>ask</a></li>
                <li><a href='https://news.ycombinator.com/jobs'>job</a></li>
                <li><a href='https://news.ycombinator.com/submit'>submit</a></li>
              </ul>
            </div>
          </div>
          <a href='https://news.ycombinator.com/login?goto=news' className="Right">Login</a>
        </header>
    )
}

export default header;
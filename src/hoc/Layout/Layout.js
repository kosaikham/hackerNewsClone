import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NewsLists from '../../components/NewsLists/NewsLists';
import './Layout.css';

const layout = props => {
    return (
        <div className="Layout">
            <Header />
            <Route path="/" exact component={NewsLists} />
        </div>
    )
}

export default layout;
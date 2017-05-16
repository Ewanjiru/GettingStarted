import React from "react";
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import './Sidebar.scss';

const Sidebar = (props) => {
    const { updateCategory } = props;
    return (
        <div className="aside">
            <h3 className="search">Search A source</h3>
            <input type="text" className="searchField" placeholder="search a source" />
            <div id="navbar">
                <ul value="politics" onClick={() => updateCategory('politics')}>Politics</ul>
            </div>
        </div>
    );
}

export default Sidebar;
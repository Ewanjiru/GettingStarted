import React from "react";
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Sidebar from '../Sidebar/Sidebar.js';
import './Sort.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      sortSourceby: ''
    }
    this._onChange = this._onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    newsStore.addListener(this._onChange);
  }

  componentWillUnmount() {
    newsStore.removeListener(this._onChange);
  }
  
  handleChange(evt) {
    const sortedBy = evt.target.value
    this.setState({
      sortSourceby: sortedBy
    })
    NewsActions.returnSortbySources(sortedBy);
  }

  _onChange() {
    this.setState({
      sortSourceby: newsStore.getSelectedSortBy(),
    });
  }

  render() {
    return (
      <div className="sortDiv">
        <h5>Sort Source By:</h5>
        <select className="searchField" value={this.state.sortby} onChange={this.handleChange}>
          <option value=''>All Sources</option>
          <option value="entertainment">Entertainment</option>
          <option value="gaming">Gaming</option>
          <option value="business">Business</option>
          <option value="general">General</option>
          <option value="music">Music</option>
          <option value="politics">Politics</option>
          <option value="science-and-nature">Science and Nature</option>
          <option value="sport">Sport</option>
          <option value="technology">Technology</option>
        </select>
      </div>
    );
  }
}

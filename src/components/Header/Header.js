import React from "react";
import './Header.scss';
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Login from '../Login/Login.js';


export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedSource: newsStore.getSelectedSource(),
			sortby: 'top'
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
			sortby: sortedBy
		})
		NewsActions.returnSortbySources(this.state.selectedSource, sortedBy);
		console.log(sortedBy)
	}

	_onChange() {
		this.setState({
			selectedSource: newsStore.getSelectedSource(),
			sortby: newsStore.getSelectedSortBy(),
		});

	}

	render() {
		return (
			<div className="header">
				<div className="logo">
					<img src="./../../../images/news_burned.png" alt="icon" />
				</div>
				<div className="title">{}</div>

				<div className="menuIcon">
					<Login />
				</div>
			</div>
		);
	}
}

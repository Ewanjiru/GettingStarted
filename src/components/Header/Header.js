import React from "react";
import './Header.scss';
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Login from '../Login/Login.js';

export default class Header extends React.Component {
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

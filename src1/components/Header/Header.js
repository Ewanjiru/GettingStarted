import React from "react";
import './Header.scss';
export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="menuIcon">
				<img src = "./../../../images/menu.png" alt= "icon"/>
				</div>

				<span className="title">{this.props.title}</span>

                <input type="text" className="searchField" placeholder="search a source" />
				
				<div className="searchIcon" >
					
				</div>

			</div>
		);
	}
}

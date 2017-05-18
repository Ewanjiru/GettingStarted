import React from "react";
import Header from "../components/Header/Header.js"
import Content from "../components/Content/content.js"
import Login from "../components/Login/Login.js"

export default class App extends React.Component {

	render() {
		return (
			<div className="main-frame">
				<Header title="THE WORLD NEWS" />
				<Content />
			</div>
		)
	}
}
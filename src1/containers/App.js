import React from "react";
import Header from "../components/Header/Header.js"
import Content from "../components/Content/content.js"

export default class App extends React.Component {
	
	render() {
		return (
			<div className="notifications-frame">
				<div className="panel">
					<Header title="Hello World!" />
					<Content />
				</div>
			</div>
		)
	}
}
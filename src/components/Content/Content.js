import React from "react";
import './Content.scss';
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Sidebar from '../Sidebar/Sidebar.js';


export default class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: newsStore.getArticles(),
			filteredArticles: [],
			source: 'the-next-web',
		}

		this._onChange = this._onChange.bind(this);
		this.handleSourceChange = this.handleSourceChange.bind(this);
	}

	componentDidMount() {
		newsStore.addListener(this._onChange);
		NewsActions.loadHeadlines();
	}

	componentWillUnmount() {
		newsStore.removeListener(this._onChange);
	}

	_onChange() {
		const data = newsStore.getArticles();
		const newSource = newsStore.getSelectedSource();
		this.setState({
			articles: data,
			filteredArticles: data,
			source: newSource
		});

	}
	//function to handle when source is changed
	handleSourceChange(source) {
		NewsActions.onclickGetHeadlines(source);
		NewsActions.onclickUpdateSource(source);
	}

	//display a div having the articles' headlines,url,author and descriptions
	render() {
		const { filteredArticles } = this.state;
		//console.log(this.state.source);
		return (
			<div className="container">
				<Sidebar
					updateSelectedSource={this.handleSourceChange}
				/>
				<div className="content">
					{
						filteredArticles.map((headline, index) => {
							return (
								<div className="item" id={index} key={index}>
									<h3>{headline.title}</h3>
									<p>{headline.description}</p>
									<h5>{headline.publishedAt}</h5>
									<h5>By:{headline.author}</h5>
									<p><a target="_blank" href={headline.url}>Read Article</a></p>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}
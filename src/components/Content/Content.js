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
		return (
			<div className="container">
				<Sidebar
					updateSelectedSource={this.handleSourceChange}
				/>
				<div className="content">
					{
						filteredArticles.map((headline, index) => {
							const date = new Date(headline.publishedAt).toString()
							let author = headline.author
							if (author == null) {
								author = this.state.source
							}
							return (
								<a target="_blank" href={headline.url}><div className="item" id={index} key={index}>
									<h3>{headline.title}</h3>
									<p>{headline.description}</p>
									<h5>{date}</h5><h5>By:{author}</h5>
								</div></a>
							);
						})}
				</div>
			</div>
		);
	}
}
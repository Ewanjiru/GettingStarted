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
			category: '',
		}

		this._onChange = this._onChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.filterState = this.filterState.bind(this);
	}

	componentDidMount() {
		newsStore.addListener(this._onChange);
		NewsActions.getHeadlines();

	}

	// displayNews() {
	// 	NewsActions.getHeadlines();
	// }

	componentWillUnmount() {
		newsStore.removeListener(this._onChange);
	}

	_onChange() {
		const data = newsStore.getArticles();
		if (data) {
			this.setState({
				articles: data,
				filteredArticles: data,
			});
		} else {
			alert("An error occured");
		}
	}

	handleCategoryChange(category) {
		this.setState({ category }, this.filterState);
	}

	filterState() {
		const {
			articles,
			category,
		} = this.state;
		const filteredData = articles.filter(article => article.category === category);
		this.setState({
			filteredArticles: filteredData
		});
	}

	//display a div having the articles' headlines,url,author and descriptions
	render() {
		const { filteredArticles } = this.state;
		return (
			<div className="container">
				<Sidebar
					updateCategory={this.handleCategoryChange}
				/>
				{
					filteredArticles.map((headline, index) => {
						return (
							<div className="item" id={index} key={index}>
								<h3>{headline.author}</h3>
								<h3>{headline.title}</h3>
								<p>{headline.description}</p>
								<b>{headline.publishedAt}</b>
								<p><a href={headline.url}>Read Article</a></p>
							</div>
						);
					})};
				</div>
		);
	}
}
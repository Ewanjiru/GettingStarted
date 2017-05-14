import React from "react";
import './Content.scss';
import newsStore from './../../stores/NewsStore';

export default class Content extends React.Component {

	getInitialState(){
		return(
				articles: newsStore.getArticles
			)
	}
	
	componentDidMount(){
		newsStore.addChangeListener(this._onChange);
	}	

	componentWillUnmount(){
		newsStore.removeChangeListener(this._onChange);
	}	

	_onChange(){
		this.setState({
			articles: newsStore.getArticles
		})
	}	
	
	//display a div having the articles' headlines,url,author and descriptions
	render() {
		const articles = this.state.articles;
		return (

			<div className="content">
				{
				articles.map((headline, index) => {
				return (
							<div className="item" id={index} key={index}>
								<h3>{headline.author}</h3>
								<h3>{headline.title}</h3>
								<p>{headline.description}</p>
								<b>{headline.publishedAt}</b>
								<p><a href={headline.url}>Read Article</a></p>
							</div>
						);

					})}
			</div>
		);
	}
}
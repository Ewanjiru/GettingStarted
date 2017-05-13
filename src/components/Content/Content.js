import React from "react";
import './Content.scss';
export default class Content extends React.Component {

	constructor(props) {
		// Pass props to parent class
		super(props);
		// Set initial state
		this.state = {
			articles:[]
		}
	}
					
		// Lifecycle method		
	componentWillMount() {
			// Make HTTP reques with Axios
		 
			axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=14ddece6f2294cbfada7f4d14d46d364')
				.then( (articlesResponse) => {  
					 // Set state with result 
					this.setState({ 
						articles: articlesResponse.data.articles
					 })
				})
				.catch(error => console.log(error))
		
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
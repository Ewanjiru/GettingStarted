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
			sourceSortbys: newsStore.getSourceSortbys(),
			selectedDropDownSort:newsStore.getSelectedDropDownSort()
		}

		this._onChange = this._onChange.bind(this);
		this.handleSourceChange = this.handleSourceChange.bind(this); 
		this.handleSortByDropDown = this.handleSortByDropDown.bind(this)
	}

	componentDidMount() {
		newsStore.addListener(this._onChange);
		NewsActions.loadHeadlines();
	}

	componentWillUnmount() {
		newsStore.removeListener(this._onChange);
	}

	//function to handle when source is changed
	handleSourceChange(source) {
		NewsActions.onclickGetHeadlines(source.id);
		NewsActions.onclickUpdateSource(source.id);
		NewsActions.sortOptions(source.sortBysAvailable);
	}

	  handleSortByDropDown(event) {
    const selectedSortBy = event.target.value
    this.setState({
      selectedDropDownSort: selectedSortBy
    })
		NewsActions.onclickUpdateArticleSort(selectedSortBy)
    NewsActions.loadSortByArticles(this.state.source,selectedSortBy);
  }

	_onChange() {
		const data = newsStore.getArticles();
		this.setState({
			articles: data,
			filteredArticles: data,
			source: newsStore.getSelectedSource(),
			sourceSortbys: newsStore.getSourceSortbys(),
			selectedDropDownSort:newsStore.getSelectedDropDownSort(),
		});
	}

	//display a div having the articles' headlines,url,author and descriptions
	render() {
		const { filteredArticles } = this.state;
		const { sourceSortbys } = this.state
		return (
			<div className="container">
				<Sidebar
					updateSelectedSource={this.handleSourceChange}
				/>
				<div className="content">
				<h3>Source:{this.state.source}</h3> 
					<select value={this.state.selectedDropDownSort} onChange={this.handleSortByDropDown}>
					{
					sourceSortbys.map((sorts) => {
					return (
						<option value={sorts.sortBysAvailable}>{sorts}</option>		
						);
					})
					}
					</select>
			
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
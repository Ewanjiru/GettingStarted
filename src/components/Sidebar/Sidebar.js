import React from "react";
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Sort from '../sort/Sort.js';
import './Sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        const updateSelectedSource  = this.props.updateSelectedSource;

        this.state = {
            sources: newsStore.getSources(),
            selectedSource: newsStore.getSelectedSource(),
            searchSource: newsStore.getSearchSource()
        }
        this._onChange = this._onChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        newsStore.addListener(this._onChange);
        NewsActions.returnSources();
    }

    componentWillUnmount() {
        newsStore.removeListener(this._onChange);
    }

    handleSearch(event) {
       let searchInput = event.target.value
        this.setState({
             searchSource: searchInput
        });
        NewsActions.searchSource(searchInput)
    }

    _onChange() {
        this.setState({
            sources: newsStore.getSources(),
            searchSource: newsStore.getSearchSource()
        });
        
    }

    render() {
       let filteredSources;
       const { searchSource } = this.state;
       if (searchSource == '') {
             filteredSources = this.state.sources;
       } else {
            filteredSources = this.state.sources.filter((sources) => {
                return sources.name.toLowerCase().indexOf(this.state.searchSource.toLowerCase()) !== -1
                });
       }
        return (
            <div className="aside">
                <h5 className="search">Search A source</h5>
                <input type="text" className="searchField" placeholder="search a source" onKeyUp={this.handleSearch}/>
                <Sort />
                <div className="navbar">
                    {  
                        filteredSources.map((newsSource) => {
                            return (
                                <ul key={newsSource.id} value={newsSource.id} onClick={() => {
                                    this.props.updateSelectedSource(newsSource);
                                    
                                }}>{newsSource.name}</ul>
                            );

                        })
                    };
                </div>
            </div >
        );
    }
}

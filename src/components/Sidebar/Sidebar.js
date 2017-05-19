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
            selectedSource: newsStore.getSelectedSource()
        }
        this._onChange = this._onChange.bind(this);
        
    }

    componentDidMount() {
        newsStore.addListener(this._onChange);
        NewsActions.returnSources();
    }

    componentWillUnmount() {
        newsStore.removeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            sources: newsStore.getSources()
        });

    }

    render() {
        const { sources } = this.state;
        return (
            <div className="aside">
                <h5 className="search">Search A source</h5>
                <input type="text" className="searchField" placeholder="search a source" />
                <Sort />
                <div className="navbar">
                    {  
                        sources.map((newsSource) => {
                            const sortBys = newsSource.sortBysAvailable;
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

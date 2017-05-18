import React from "react";
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Sort from '../sort/Sort.js';
import './Sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        const { updateSelectedSource } = props;
        this.state = {
            sources: newsStore.getSources(),
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
        const data = newsStore.getSources();
        if (data) {
            this.setState({
                sources: data
            });
        } else {
            alert("An error occured");
        }
    }

    render() {
        const { sources } = this.state;
        //console.log(source)
        return (
            <div className="aside">
                <h5 className="search">Search A source</h5>
                <input type="text" className="searchField" placeholder="search a source" />
                <Sort />
                <div className="navbar">
                    {
                        sources.map((newsSource) => {
                            return (

                                <ul key={newsSource.id} value={newsSource.id} onClick={() => this.props.updateSelectedSource(newsSource.id)}>{newsSource.name}</ul>

                            );

                        })
                    };
                </div>
            </div >
        );
    }
}

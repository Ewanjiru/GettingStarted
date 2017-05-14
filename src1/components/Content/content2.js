import React from ‘react’;

import request from ‘superagent’;

export default class NewsSources extends React.Component {
  	constructor(props) { 
        super(props);
        this.state = { 
            sources: [] 
        }
    }
    componentWillMount() { 
        this.fetchSources().then((data) => {
            this.setState({ 
                sources: data.body.sources
            });
        });
    }
    fetchSources() {
        return (
            request
                .get(‘https://newsapi.org/v1/sources?language=en')
        )
    }

    render() {
        console.log(‘State’, this.state);
        return (
            <div className = ‘NewsSources’>
                {this.state.sources.length && this.state.sources.map((source) => (
                    <div id=“sources” key={source.id}><a href={source.url} target=‘_blank’>{source.name}</a></div>
                ))}
            </div>
        );
    }
}
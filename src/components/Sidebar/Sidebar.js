import React from "react";
import  newsStore from './../../stores/NewsStore';
import * as newsActions from './../../actions/NewsActions';
import './Sidebar.scss';

export default class Sidebar extends React.Component{

	constructor(props) { 
    super(props);
    this.state = { 
            selected: newsStore.getSelected
        }
    }
	
	componentDidMount(){
		newsStore.addChangeListener(this._onChange);
	}	

	componentWillUnmount(){
		newsStore.removeChangeListener(this._onChange);
	}

	handleSelection(value){
		console.log(value);

		newsActions.getHeadlines(value)
	}

	_onChange(){
		this.setState({
			selected: newsStore.getSelected
		})
	}	

	render() {
        return (
            <div className="aside">
            <h3 className="menutitle">Categories</h3>
                <div id="navbar">
                    // <button value = "business" onClick={() => this.handleSelection('business')}>Business</button>
                    // <ul id ="2" onClick={this.handleSelection}>Politics</ul>
                    // <ul id ="3" onClick={this.handleSelection}>Sports</ul>
                    // <ul id ="4" onClick={this.handleSelection}>Entertainment</ul>
                    // <ul id ="5" onClick={this.handleSelection}>Business</ul>
                    // <ul id ="6" onClick={this.handleSelection}>Music</ul>
                    // <ul id ="7" onClick={this.handleSelection}>Technology</ul>
                    // <ul id ="8" onClick={this.handleSelection}>Science And Nature</ul>
                    // <ul id ="9" onClick={this.handleSelection}>Gaming</ul>
                </div>
            </div>
        );
    }
}
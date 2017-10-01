import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllByRegex} from '../actions/clients';

class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input onKeyUp={(e) => {
                this.props.fetchAllByRegex(e.target.value)
            }}/>);
    }
}

export default connect(null, {fetchAllByRegex})(SearchBar);
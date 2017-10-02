import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllByRegex} from '../actions/clients';

class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-group">
                <input className="form-control"
                       onKeyUp={(e) => {
                           this.props.fetchAllByRegex(e.target.value)
                       }}
                       placeholder="Szukaj"
                />
            </form>
        );
    }
}

export default connect(null, {fetchAllByRegex})(SearchBar);
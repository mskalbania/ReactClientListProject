import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchClients} from '../actions/index';

class ClientList extends Component {

    componentWillMount() {
        this.props.fetchClients();
    }

    render() {
        return (
            <div>
                Siema
            </div>
        );
    }
}

export default connect(null, {fetchClients})(ClientList);

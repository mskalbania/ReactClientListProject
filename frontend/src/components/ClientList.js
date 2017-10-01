import React, {Component} from "react";
import SearchBar from "./SearchBar";
import {connect} from "react-redux";
import {fetchAll} from '../actions/clients';

class ClientListPanel extends Component {

    componentWillMount() {
        this.props.fetchAll();
    }

    renderClients() {
        return (this.props.clients.map((client) => {
            return (<li key={client.id} className="list-group-item">
                {client.fullName}
            </li>);
        }));
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <h2>Klienci:</h2>
                <ul className="list-group">
                    {this.renderClients()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {clients: state.clients.all}
}

export default connect(mapStateToProps, {fetchAll})(ClientListPanel);

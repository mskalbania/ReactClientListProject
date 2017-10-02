import React, {Component} from "react";
import SearchBar from "./SearchBar";
import {connect} from "react-redux";
import {Link} from 'react-router';
import {fetchAll} from '../actions/clients';

class ClientListPanel extends Component {

    componentWillMount() {
        this.props.fetchAll();
    }

    renderClients() {
        return (this.props.clients.map((client) => {
            return (
                <li key={client.id} className="list-group-item">
                    <span className="float-right">{client.date.year}</span>
                    <h5>{client.fullName}</h5>
                </li>
            );
        }));
    }

    renderClientList() {

        if (this.props.error) {
            return (
                <div className="alert alert-danger text-center" role="alert">
                    Nic nie znaleziono...
                </div>
            );
        } else if (this.props.clients.length > 0) {
            return (
                <ul className="list-group">
                    {this.renderClients()}
                </ul>
            );
        } else {
            return (
                <div className="alert alert-warning text-center" role="alert">
                    Ładowanie...
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <Link to={"/clients/new"}>
                    <span className="btn btn-success">Dodaj</span>
                </Link>
                {this.renderClientList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        clients: state.clients.all,
        error: state.clients.err
    }
}

export default connect(mapStateToProps, {fetchAll})(ClientListPanel);

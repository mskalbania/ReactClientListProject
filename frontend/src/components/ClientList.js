import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchClients} from '../actions/index';

class ClientList extends Component {

    componentWillMount() {
        this.props.fetchClients();
        console.log(this.props);
    }

    renderClients() {
        return (this.props.clients.map((client) =>{
            <li key={client.id} keyclassName="list-group-item"></li>
        }));
    }

    render() {
        return (
            <div>
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

export default connect(mapStateToProps, {fetchClients})(ClientList);

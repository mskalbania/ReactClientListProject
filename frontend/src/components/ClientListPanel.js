import React, {Component} from "react";
import SearchBar from "./SearchBar";
import {connect} from "react-redux";
import {Link} from 'react-router';
import {fetchAll} from '../actions/clients';
import{fadeInUp, fadeInUpBig, fadeOutDown} from 'react-animations';
import{StyleSheet, css} from 'aphrodite';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = StyleSheet.create({

    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '0.5s',
    },

    fadeInUpBig: {
        animationName: fadeInUp,
        animationDuration: '0.5s',
    }
});

class ClientListPanel extends Component {

    constructor() {
        super();
        this.state = {selected: null};
    }

    componentWillMount() {
        this.props.fetchAll();
    }

    renderClients() {
        return (this.props.clients.map((client) => {
            return (
                <div>
                    <li key={client.id}
                        className={`list-group-item " + ${css(styles.fadeInUp)}
                        ${this.props.selected === client.id ? " selected" : ""}`
                        }
                        onClick={() => {
                            this.setState({selected: client.id})
                        }}>
                        <span className="float-right">{client.date.year}</span>
                        <h5>{client.fullName}</h5>
                    </li>
                    {client.id === this.state.selected &&
                    <div className="container">
                          SELECTED
                    </div>}
                </div>
            );
        }));
    }

    renderClientList() {

        if (this.props.error) {
            return (
                <div className={"alert alert-danger text-center " + css(styles.fadeInUpBig)} role="alert">
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
                <div className={"alert alert-warning text-center " + css(styles.fadeInUpBig)} role="alert">
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

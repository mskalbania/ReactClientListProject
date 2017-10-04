import React, {Component} from "react";
import {Link} from "react-router";
import {reduxForm} from 'redux-form';
import {postNew} from "../actions/clients";
import * as PropTypes from "react/lib/ReactPropTypes";


class ClientAddPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {success: false, invalidForm: true}
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    onSubmit(props) {
        const promise = this.props.postNew(props);

        promise.payload.then(() => {
            this.setState({success: true});
            setTimeout(() => {
                this.context.router.push("/");
            }, 2000);
        })
    }

    testmethod(){
        console.log(this.props.fields);
    }

    render() {

        const handleSubmit = this.props.handleSubmit;
        const fullName = this.props.fields.fullName;
        const leftLens = this.props.fields.leftLens;
        const rightLens = this.props.fields.rightLens;
        const lensesType = this.props.fields.lensesType;
        const holderModel = this.props.fields.holderModel;
        const date = this.props.fields.date;

        return (
            <div>
                <Link to={"/"}>
                    <span className="btn btn-primary">Wróć</span>
                </Link>
                {this.state.success &&
                <div className="alert alert-success" role="alert">
                    Dodano nową pozycje. Przekierowywanie...
                </div>}
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group">
                        <label>Imię i nazwisko:</label>
                        <input type="text" className="form-control" {...fullName}/>
                    </div>
                    <div className="form-group">
                        <label>Oko lewe:</label>
                        <input type="text" className="form-control" {...leftLens}/>
                    </div>
                    <div className="form-group">
                        <label>Oko prawe:</label>
                        <input type="text" className="form-control" {...rightLens}/>
                    </div>
                    <div className="form-group">
                        <label>Typ Soczewek:</label>
                        <input type="text" className="form-control" {...lensesType}/>
                    </div>
                    <div className="form-group">
                        <label>Typ Oprawki:</label>
                        <input type="text" className="form-control" {...holderModel}/>
                    </div>
                    <div className="form-group">
                        <label>Data zakupu:</label>
                        <input type="date" className="form-control" {...date}/>
                    </div>
                    <button type="submit" className="btn btn-success text-center"
                            disabled={this.props.invalid}>Dodaj</button>
                    {this.testmethod()}
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'Pole imie i nazwisko nie może byc puste';
    } else if (!values.leftLens) {
        errors.leftLens = 'Pole lewe oko nie może byc puste';
    } else if (!values.rightLens) {
        errors.rightLens = 'Pole prawe oko nie może byc puste';
    } else if (!values.lensesType) {
        errors.lensesType = 'Pole typ soczewek nie może byc puste';
    } else if (!values.holderModel) {
        errors.holderModel = 'Pole model oprawki nie może byc puste';
    }else if (!values.date) {
        errors.date = 'Wybierz datę';
    }
    return errors;
}

export default reduxForm({
    form: "NewClient",
    fields: ["fullName", "leftLens", "rightLens", "lensesType", "holderModel", "date"],
    validate

}, null, {postNew})(ClientAddPanel);


// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
	{ label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
			return (
				<Field
					type="text"
					component={ SurveyField }
					key={ name }
					name={ name }
					label={ label } />
			);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{ this.renderFields() }
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">arrow_forward</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = { };

	if (!values.title) {
		errors.title = 'You must provide a title';
	}
	if (!values.subject) {
		errors.subject = 'You must provide a subject';
	}
	if (!values.body) {
		errors.body = 'You must provide a body';
	}
	if (!values.emails) {
		errors.emails = 'You must provide a list of recipients';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
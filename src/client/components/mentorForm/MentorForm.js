import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './mentorForm.css';

class MentorForm extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        id: 0,
        title: 'Form title',
        description: 'Form desription',
        nodes: [
          {
            title: 'node label',
            type: 'input type',
            value: '',
            description: 'optional',
            warn: 'optional'
          }
        ]
      }
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitForm() {
    this.props.postMentorForm(this.state.form);
  }

  handleInputChange(event) {
    event.preventDefault();
    const form = { ...this.state.form };
    for (let i = 0; i < form.nodes.length; i++) {
      if (form.nodes[i].title === event.target.name) {
        form.nodes[i].value = event.target.value;
        break;
      }
    }
    this.setState({ form });
  }

  componentDidMount() {
    this.setState({ form: this.props.form });
    console.log('myid', this.props.match.params.formID);
    return this.props.getMentorForm(this.props.match.params.formID);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      form: nextProps.form
    });
  }

  render() {
    if (this.props.isFetching) {
      return <p>loading</p>;
    } else {
      const { form } = this.props;
      return (
        <div className='wrapper'>
          <section>
            <h1>{form.title}</h1>
            <h3>{form.description}</h3>
            {
              form.nodes.map(({ title, type, description, warn }, index) => (
                <section key={index} className='query'>
                  <h4>{title}</h4>
                  { description && <p>{description}</p>}
                  { warn && <p>{warn}</p>}
                  { type && <input
                    name={title}
                    type={type}
                    onBlur={this.handleInputChange}/>}
                </section>
              ))
            }
            <button onClick={this.submitForm} type='button'>Submit</button>
          </section>
        </div>
      );
    }
  }
}

MentorForm.propTypes = {
  getMentorForm: PropTypes.func,
  match: PropTypes.object,
  postMentorForm: PropTypes.func,
  isFetching: PropTypes.bool,
  form: PropTypes.object
};

export default MentorForm;

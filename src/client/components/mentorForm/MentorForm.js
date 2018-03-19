import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Radio, Checkbox } from 'semantic-ui-react';
import './mentorForm.css';

class MentorForm extends Component {
  constructor() {
    super();
    this.state = { };
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitForm() {
    this.props.postMentorForm(this.props.form, this.props.match.params);
  }

  handleInputChange({ target }) {
    event.preventDefault();
    const form = { ...this.props.form };
    const input = target.parentNode.children[0];
    for (let i = 0; i < form.nodes.length; i++) {
      if (form.nodes[i].title === input.name) {
        form.nodes[i].value = input.type === 'checkbox' ? !form.nodes[i].value : input.value;
        if (form.nodes[i].type === 'radio')
          form.nodes[i].options
            .map(option => option.checked = option.optionName === input.value);
        break;
      }
    }
    this.setState({ form });
  }

  componentDidMount() {
    this.setState({ form: this.props.form });
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
            <Form>
              {
                form.nodes.map(({ title, type, description, warn, options, value }, index) => (
                  <section key={index} className='query'>
                    {type !== 'checkbox' && <h4>{title}</h4>}
                    { description && <p>{description}</p>}
                    { warn && <p>{warn}</p>}
                    <Form.Field>
                      { type === 'radio' && options && options.map((option, lowerIndex) => (
                        <Radio
                          name={title}
                          key={lowerIndex}
                          checked={option.checked}
                          value={option.optionName}
                          label={option.optionName}
                          onChange={this.handleInputChange}
                        />
                      ))}
                      { type === 'text' &&
                        <input
                          type={type}
                          name={title}
                          onBlur={this.handleInputChange}/>}
                      { type === 'email' &&
                        <input
                          type={type}
                          name={title}
                          onBlur={this.handleInputChange}/>}
                      { type === 'checkbox' &&
                        <Checkbox
                          name={title}
                          label={title}
                          checked={value}
                          onChange={this.handleInputChange}
                        />
                      }
                    </Form.Field>
                  </section>
                ))
              }
            </Form>
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

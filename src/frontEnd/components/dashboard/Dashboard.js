import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './dashboard.css';
import { Button, Card, Image, Icon, Message } from 'semantic-ui-react';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMentors();
  }

  render() {
<<<<<<< HEAD
    const { mentors } = this.props;
    console.log('mmmm', mentors);
=======
    const { mentors, error, isFetching } = this.props;
>>>>>>> 69f757d8eb3babf6f846b688864e152b07a90978

    return (
      <div className='wrapper'>
        <h2>Hello Sarah, Have A Good Hunt!</h2>
        <Card.Group className='mentors-container'>
          {isFetching && (
            <Message icon>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
              </Message.Content>
            </Message>
          )}
          {error && (
            <Message color='red'>{error}</Message>
          )}
          {mentors[0] && (
            mentors.map((mentor, index) => (
              <Card key={index}>
                <Card.Content>
                  <Image floated='right' size='mini' src={mentor.info.photo}/>
                  <Card.Header>
                    {mentor.first_name} {mentor.last_name}
                  </Card.Header>
                  <Card.Meta>
                    {mentor.info.job_title}
                  </Card.Meta>
                  <Card.Description>
                    {mentor.info.bio}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Reschedule</Button>
                  </div>
                </Card.Content>
              </Card>
            ))
          )}
        </Card.Group>
      </div>
    );
  }
}

Home.propTypes = {
  mentors: PropTypes.array,
  getAllMentors: PropTypes.func,
  error: PropTypes.object,
  isFetching: PropTypes.bool
};

export default Home;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './dashboard.css';
import { Button, Card, Image, Icon, Message } from 'semantic-ui-react';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMentors();
  }

  render() {
    const { mentors, error, isFetching } = this.props;

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
              <Card key={index} >
                <Card.Content>
                  <Image floated='right' size='mini' src={mentor.info.photo}/>
                  <Card.Header>
                    <span>{mentor.first_name} {mentor.last_name}</span>
                  </Card.Header>
                  <Card.Meta>
                    {mentor.info.job_title}
                  </Card.Meta>
                  <Card.Description>
                    {mentor.info.bio && mentor.info.bio.slice(0, 35)}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Link to={`/dashboard/panel/${mentor.id}`} className='w-x100'>
                      <Button basic color='green' className='w-x100'>View Panel</Button></Link>
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
  isFetching: PropTypes.bool,
  getCurrentMentor: PropTypes.func
};

export default Home;

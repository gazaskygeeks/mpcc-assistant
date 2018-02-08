import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './dashboard.css';
import { Button, Card, Image } from 'semantic-ui-react';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMentors();
  }

  render() {
    const { mentors } = this.props;

    return (
      <div className='wrapper'>
        <h2>Hello Sarah, Have A Good Hunt!</h2>
        <Card.Group className='mentors-container'>
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
  getAllMentors: PropTypes.func
};

export default Home;

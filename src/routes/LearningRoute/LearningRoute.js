import React, { Component } from 'react';
import Test from '../../components/InterpretationTest/InterpretationTest';
import '../../css/InterpretationTest.css';

class LearningRoute extends Component {
  render() {
    return (
      <section className='learning-route-container'>
        <Test />
      </section>
    );
  }
}

export default LearningRoute

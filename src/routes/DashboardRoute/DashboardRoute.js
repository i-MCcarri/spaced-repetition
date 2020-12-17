import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

class DashboardRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleStartPractice = (e) => {
    e.preventDefault();
    const { history } = this.props
    history.push('/learn')
  }

  render() {
    return (
        <section>
          <Dashboard />
        </section>
    );
  }
}
 
export default DashboardRoute
